/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

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
}
