# Webpack Bundle Analysis Webcast
Example code for Bocoup's webpack bundle analysis webcast

## The "App"
This application exists just for the purpose of the webpack bundle analysis webcast. It was build off a free template design called TwoColors, created by [TEMPLATED](http://templated.co). It's static, full of lorem ipsum, and the original design is broken out into react components.  It's built in a way to showcase common issues that come up when working on a modular application with webpack.

This "app" has 3 entry points. Most sites don't use multiple entry points, and it's possible you haven't encountered this type of set up before.  A real world use case were you might use multiple entry points is if you are building a site with a user facing interface and an admin interface.


## Auditing your Webpack Config
As you develop more and modify your codebase, it's worth doing audits of your webpack build process periodically to look for performance gains.

To do this, in the command line in the root folder of your theme, run the following:

`node_modules/.bin/webpack --config webpack.config.js --profile --json > stats.json`

The file `stats.json` should be generated in the root of the project. Upload it on: [http://webpack.github.io/analyse/](http://webpack.github.io/analyse/)

Note: This json doc does not reveal any private information about your application. Only file size, information around imports/asset chunking.
