## Starter project for client side app with JQuery

This is a purely client side application that will connect to any [prismic.io](https://prismic.io) repository. It uses the prismic.io JavaScript developement kit, and provide a few helpers to integrate with JQuery and a templating engine.

> This project embed a very simple Micro templating engine (http://ejohn.org/blog/javascript-micro-templating/), but you can easily switch it by any other JavaScript templating engine you want.

It uses the browser `sessionStorage` to store the access token when you interactively login to preview the future of your repository. Meaning that to preview another release than **Master**, a modern browser supporting HTML5 is required.

### How to start?

Edit the `script/prismic-configuration.js` file to make the application point to the correct repository:

```
var Configuration = {

  // -- API endpoint
  apiEndpoint: 'https://lesbonneschoses.prismic.io/api'

  // -- Access token if the Master is not open
  // accessToken: 'xxxxxx',

  // -- OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx'
  
}
```

To get the OAuth configuration, go to the Applications panel in your repository settings, and create an OAuth application to allow interactive sign-in. Just create a new application, fill the application name and the callback URL (localhost URLs are always authorized, so at development time you can omit to fill the Callback URL field), and copy/paste the clientId & clientSecret tokens.

Open the `index.html` in your browser. Alternatively you can also launch a local Web server using the `server.sh` script and open the home page at http://localhost:8000/.

### Publish your code

As this application is just made of static files, you can publish it to any web server. One simple way to do that is to use [Github pages](https://github.io). Just push this Git repository on Github and create a `gh-pages` branch to publish it to your own Github pages: 

```
git checkout --orphan gh-pages
git commit -a -m "Push to Github pages"
git push origin gh-pages
```

You can then visit your website at:

**http://_your-github-user_.github.io/_your-github-repository_**.

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Zengularity (http://www.zengularity.com).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.