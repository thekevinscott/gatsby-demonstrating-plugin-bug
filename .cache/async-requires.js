// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/www/gatsby-remark-vega-example/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/www/gatsby-remark-vega-example/.cache/dev-404-page.js"),
  "component---src-pages-404-js": require("gatsby-module-loader?name=component---src-pages-404-js!/www/gatsby-remark-vega-example/src/pages/404.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/www/gatsby-remark-vega-example/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/www/gatsby-remark-vega-example/.cache/json/layout-index.json"),
  "hello-world.json": require("gatsby-module-loader?name=path---hello-world!/www/gatsby-remark-vega-example/.cache/json/hello-world.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/www/gatsby-remark-vega-example/.cache/json/dev-404-page.json"),
  "404.json": require("gatsby-module-loader?name=path---404!/www/gatsby-remark-vega-example/.cache/json/404.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/www/gatsby-remark-vega-example/.cache/json/index.json"),
  "404-html.json": require("gatsby-module-loader?name=path---404-html!/www/gatsby-remark-vega-example/.cache/json/404-html.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/www/gatsby-remark-vega-example/.cache/layouts/index.js")
}