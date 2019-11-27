const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-plugin-offline-app-shell-js": hot(preferDefault(require("/home/hamza/hamzabhatti.me/node_modules/gatsby-plugin-offline/app-shell.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/hamza/hamzabhatti.me/src/pages/404.js"))),
  "component---src-pages-archive-js": hot(preferDefault(require("/home/hamza/hamzabhatti.me/src/pages/archive.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/hamza/hamzabhatti.me/src/pages/index.js")))
}

