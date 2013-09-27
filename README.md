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

}
```

Open the `index.html` in your browser. Alternatively you can also launch a local Web server using the `server.sh` script and open the home page at http://localhost:8000/.

### Licence

This software is licensed under the Apache 2 license, quoted below.

Copyright 2013 Zengularity (http://www.zengularity.com).

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this project except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.