var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  linkResolver: function(ctx, doc) {
    return 'detail.html?id=' + doc.id + '&slug=' + doc.slug + ctx.maybeRefParam;
  },

  // -- To customize: what to do when an error happens on the prismic.io side
  onPrismicError: function(err) {
    window.location = '/error.html'+(err ? '#'+err.message : '');
  }

}