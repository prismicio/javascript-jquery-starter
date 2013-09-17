# Starter project for client side JavaScript using JQuery

This is a pure client side application that will connect to any [prismic.io](https://prismic.io) repository. It uses the prismic.io JavaScript developement kit, and provide a few helpers to integrate with JQuery and a templating engine.

> This project embed a very simple Micro templating engine (http://ejohn.org/blog/javascript-micro-templating/), but you can easily switch it by any other JavaScript templating engine you want.

It uses the browser `sessionStorage` to store the access token when you interactively login to preview the future of your repository. Meaning that to preview another release than **Master**, a modern browser supporting HTML5 is required.

## How to start?

Edit the `script/prismic-configuration.js` file to make the application point to the correct repository:

```
var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses.prismic.io/api'

}
```

Open the `index.html` in your browser. Alternatively you can also launch a local Web server using the `server.sh` script and open the home page at http://localhost:8000/.
