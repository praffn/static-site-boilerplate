# 👷 static-site-boilerplate 🚧

static-site-boilerplate is a starting point for creating modern static websites with the following features:

* Module bundling with [webpack](https://github.com/webpack/webpack)
* Modern ES2015 javascript with [babel](https://github.com/babel/babel)
* Even more modern ES2017 features like decorators, object rest spread operator and class properties.
* CSS with [Sass](https://github.com/sass/sass)
* Worlds best JS linting with [eslint](https://github.com/eslint/eslint), using Airbnb's excellent [style guide](https://github.com/airbnb/javascript)

----------------

## How to use
Clone this repository and run `npm install` (or highly recommended: `yarn`).

### npm commands:

* `npm start` <br>
  Starts a development server running on `localhost:8080`. Automatically watches for changes, recompiles and autoreloads 👍

* `npm build` <br>
  Builds the entire project, optimizing it along the way. Built files are located in the `dist` directory.

* `npm run build:dev` <br>
  Builds the project, but no optimizations are done.

* `npm run lint` <br>
  Lints all files in `src`, because linting is awesome and helps you produce better code 🎉
