/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 *
 *
 */

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  // createPage({
  //   path: "/using-dsg",
  //   component: require.resolve("./src/templates/using-dsg.js"),
  //   context: {},
  //   defer: true,
  // })
}
const articles = await graphql(`
  {
    allNodeArticle {
      nodes {
        id
        title
        path {
          alias
        }
      }
    }
  }
`)

articles.data.allNodeArticle.nodes.map(articleData =>
  createPage({
    path: articleData.path.alias,
    component: path.resolve(`src/templates/article.js`),
    context: { ArticleId: articleData.id },
    // defer: true,
  })
)
