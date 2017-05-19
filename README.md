# static-site-boilerplate
###### webpack-based static site boilerplate for easy sass and es6 websites!

---------------------------------------------

Before use run `npm install` to install all dependencies.

`static-site-boilerplate` uses [webpack](https://webpack.github.io/) to bundle javascript as well as sass-files. [Babel](https://babeljs.io/) is used to transpile es6 into es5.

Description of npm scripts:

* `npm run lint` <br>
  Lints the entire `/src` directory.

* `npm run build` <br>
  Builds the production ready code into the `/dist` directory.

* `npm run build:dev` <br>
  Builds the entire project into the `/dist` directory. Not optimized, but quicker.

* `npm run watch` <br>
  Builds the project into the `/dist` directory and watches for changes. Not optimized, but quicker.

* `npm run start` <br>
  Starts a development server running on `localhost:8080` serving the built `/dist` directory. Watches for changes and automatically reloads. Built files are not optimized.

* `npm run clean` <br>
  Removes built files

## Be nice and lint!
