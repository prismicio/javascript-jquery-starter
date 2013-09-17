(function($) {

    // -- QueryString parser

    var parseQS = function(query) {
        var params = {},
            match,
            pl = /\+/g,
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); };
        while (match = search.exec(query)) {
           params[decode(match[1])] = decode(match[2]);
        }
        return params;
    }

    // --- A light prismic.io plugin for JQuery

    $.prismic = {

        // Retrieve the API and Wrap async results in JQuery Deferred Objects 
        api: function(apiEndpoint) {
            var deferredApi = $.Deferred(),
                maybeAccessToken = sessionStorage.getItem('ACCESS_TOKEN'),
                apiEndpoint = Configuration['apiEndpoint'] + (maybeAccessToken ? '?access_token=' + maybeAccessToken : ''),
                api = window.prismic(apiEndpoint);
            api.get(function() { // TODO: GET THE API AS CALLBACK PARAM
                var originalForms = api.forms;
                api.forms = function(formId) {
                    var form = originalForms.call(api, formId),
                        originalSubmit = form.submit;
                    form.submit = function() {
                        var deferredResults = $.Deferred()
                        originalSubmit.call(form, function(results) {
                            deferredResults.resolve(results);
                        });
                        return deferredResults;
                    }
                    return form;
                }
                deferredApi.resolve(api);
            });
            return deferredApi;
        },

        // QueryString data
        queryString: parseQS(window.location.search.substring(1)),

        // Hash data
        encodedHash: parseQS(window.location.hash.substring(1)),

        // Create a link resolver 
        linkResolver: function(api, ref) {

        },

        // OAuth context
        oauth: function() {
            var token = sessionStorage.getItem('ACCESS_TOKEN');
            return {
                accessToken: token,
                hasPrivilegedAccess: !!token
            }
        }

    };

    // --- Micro templating

    // Simple JavaScript Templating
    // John Resig - http://ejohn.org/ - MIT Licensed
    (function(){
        var cache = {};
       
        this.tmpl = function tmpl(str, data){
            // Figure out if we're getting a template, or if we need to
            // load the template - and be sure to cache the result.
            var fn = !/\W/.test(str) ?
                cache[str] = cache[str] ||
                    tmpl(document.getElementById(str).innerHTML) :
               
                // Generate a reusable function that will serve as a template
                // generator (and which will be cached).
                new Function("obj",
                    "var p=[],print=function(){p.push.apply(p,arguments);};" +
                 
                    // Introduce the data as local variables using with(){}
                    "with(obj){p.push('" +
                 
                    // Convert the template into pure JavaScript
                    str
                        .replace(/[\r\t\n]/g, " ")
                        .split("<%").join("\t")
                        .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                        .replace(/\t=(.*?)%>/g, "',$1,'")
                        .split("\t").join("');")
                        .split("%>").join("p.push('")
                        .split("\r").join("\\'")
                + "');}return p.join('');");
           
            // Provide some basic currying to the user
            return data ? fn( data ) : fn;
        };
    })();

    $.fn.render = function(ctx) {
        $(this).each(function() {
            var source = $(this).find('script[type="text/template"]').html(),
                template = source ? tmpl(source) : undefined;
            if(template) {
                $(this).html(template(ctx));
            }
        });
    }

}(jQuery));