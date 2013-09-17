(function () {

    "use strict";

    var apiUrl = "https://lesbonneschoses.prismic.io/api",
        api = prismic(apiUrl);

    api.get(function () {

        var someDocuments = api.forms("everything");

        if (someDocuments) {
            someDocuments
                .ref(api.data.master)
                .submit(displayDocuments);
        }
    });

    function displayDocuments(documents) {

        documents.forEach(function (document) {

            var imgs = document.getAllImageViews("image", "main").map(function (img) {
                return img.asHtml()
            }).join();

            var desc = document.get("description");

            var col = document.get("color"),
                flavours = document.getAll("flavour").map(function (fl) {
                    return fl.value;
                }),
                fontCol = col ? col.value : "#000";

            $("<div />")
                .css("color", fontCol)
                .text(document.slugs[0] + " - " + flavours)
                .appendTo("body");

        });

    }

}());
