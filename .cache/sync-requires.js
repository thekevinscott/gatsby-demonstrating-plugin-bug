// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/www/gatsby-remark-vega-example/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/www/gatsby-remark-vega-example/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/www/gatsby-remark-vega-example/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/www/gatsby-remark-vega-example/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/www/gatsby-remark-vega-example/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/www/gatsby-remark-vega-example/.cache/json/layout-index.json"),
  "hello-world.json": require("/www/gatsby-remark-vega-example/.cache/json/hello-world.json"),
  "dev-404-page.json": require("/www/gatsby-remark-vega-example/.cache/json/dev-404-page.json"),
  "404.json": require("/www/gatsby-remark-vega-example/.cache/json/404.json"),
  "index.json": require("/www/gatsby-remark-vega-example/.cache/json/index.json"),
  "404-html.json": require("/www/gatsby-remark-vega-example/.cache/json/404-html.json")
}