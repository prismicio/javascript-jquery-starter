## JQuery starter project for prismic.io

This is a purely client-side application using JQuery, that will connect to any [prismic.io](https://prismic.io) repository, and trivially list its documents. It uses the prismic.io JavaScript development kit, and provides a few helpers to integrate with JQuery, as well as a basic templating engine.

The embedded templating engine is JavaScript Micro-templating (http://ejohn.org/blog/javascript-micro-templating/), but you can easily switch for any other JavaScript templating engine you may want.

This starter project uses the browser `sessionStorage` to store the access token when you interactively login to preview the future releases of your repository. Therefore, to preview another release than **Master**, a modern browser supporting HTML5 is required.

### Getting started

#### Launch the starter project

Since it's all client-side, you don't need more than a web browser: simply open the `index.html` file in your browser.

If you wish to simulate a client-server architecture anyway, you can also launch a local Web server using the `server.sh` script and open the home page at http://localhost:8000/ (Python is required)

Your JQuery starter project is now working! However, by default, it will list and display documents from our "[Les Bonnes Choses](http://lesbonneschoses.prismic.me)" example repository.

### Configure the starter project

Edit the `js/prismic-configuration.js` file to make the application point to the correct repository:

```
var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses.prismic.io/api',

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx'
  
}
```

To set up the OAuth configuration and interactive signin, go to the _Applications_ panel in your repository's settings, and create a new OAuth application. You simply have to fill in an application name and potentially the callback URL (`localhost` URLs are always authorized, so at development time you can omit to fill in the Callback URL field). After submitting, copy/paste the `clientId` & `clientSecret` tokens into the proper place in your configuration.

### Publish your project

As this application is just made of static files, you can publish it to any web server. One simple way to do that is to use [Github pages](http://pages.github.com/). Just push this Git repository on Github and create a `gh-pages` branch to publish it to your own Github pages:

```
git checkout --orphan gh-pages
git commit -a -m "Push to Github pages"
git push origin gh-pages
```

You can then visit your website at:

**http://_your-github-user_.github.io/_your-github-repository_**.


#### Get started with prismic.io

You can find out [how to get started with prismic.io](https://developers.prismic.io/documentation/UjBaQsuvzdIHvE4D/getting-started) on our [prismic.io developer's portal](https://developers.prismic.io/).

#### Understand the JavaScript development kit

You'll find more information about how to use the development kit included in this starter project, by reading [its README file](https://github.com/prismicio/javascript-kit/blob/master/README.md).

### Specifics and helpers of the JQuery starter project

There are several places in this project where you'll be able to find helpful helpers of many kinds. You may want to learn about them in order to know your starter project better, or to take those that you think might be useful to you in order to integrate prismic.io in an existing app.

 * in `js/prismic-configuration.js`:
   * this is where you set you API endpoint and security to access your repository's API;
   * you will also find the linkResolver closure that gets passed around to resolve your links (read more in the last paragraph of our [API documentation](https://developers.prismic.io/documentation/UjBe8bGIJ3EKtgBZ/api-documentation));
   * you will also find the closure that gets executed when the API returns an error.
 * in `js/prismic-helpers.js`:
   * a `getApiHome` function that creates the `Api` object using the configuration in the `prismic-configuration.js` file;
   * a `buildContext` function that creates the `ctx` object that will be passed around (containing the `Api` object, the ref, the `linkResolver` closure, etc.
   * a `withPrismic` function that we'll start every "controller" with, so that the rest of it (that we'll write in the callback) can directly use `ctx`, and therefore the properly prepared `Api` object, and everything that is necessary to get stuff done.
   * also, some URL parsing helpers: `queryString` and `encodedHash`.
 * in `js/prismic-template.js`:
   * a very basic templating system based on [John Resig's micro-templating](http://ejohn.org/blog/javascript-micro-templating/) and JQuery, so that you can simply call `$(#your-element-id).render(vars, callback)`
   
You can see the typical architecture of an HTML page if you look at [the index.html file](https://github.com/prismicio/javascript-jquery-starter/blob/master/index.html):

 * **Scripts**: including them at the top of the page (note that you can also include them at the bottom)
 * **Content release selectbox**: only appears when the user is logged in, and allows to select a future content release to preview
 * **View**: with the bits of template to trigger
 * **Controller** at the bottom: does the queries, and triggers the rendering of templates:
   * start with `Helpers.withPrismic` to make sure your `ctx` is properly prepared for you;
   * in the callback of `Helpers.withPrismic`, perform your API calls, one after the other, each one inside the previous one's callback (if you feel this is not as clean as could be, you can learn about [promises](http://www.html5rocks.com/en/tutorials/es6/promises/) and the [Q](https://github.com/kriskowal/q) library), and make sure to properly deal with errors;
   * in the last callback, render the page, by calling `render` on DOM elements that contain your templates.
 
### Contribute to the starter project

Contribution is open to all developer levels, read our "[Contribute to the official kits](https://developers.prismic.io/documentation/UszOeAEAANUlwFpp/contribute-to-the-official-kits)" documentation to learn more.

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Zengularity (http://www.zengularity.com).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
