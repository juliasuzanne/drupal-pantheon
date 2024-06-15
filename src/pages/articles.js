import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import DrupalComments from ‘gatsby-plugin-drupal-comments’;

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/articlePreview"

const Articles = ({ data }) => {
  const articles = data.allNodeArticle.edges

  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          key={article.node.id}
          title={article.node.title}
          path={article.node.path.alias}
          image={
            article.node.relationships.field_image.localFile.childImageSharp
              .fluid
          }
          alt={article.node.field_image.alt}
          summary={
            article.node.body.summary
              ? article.node.body.summary
              : article.node.body.processed.substring(0, 300)
          }
        ></ArticlePreview>
      ))}
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle(sort: { created: DESC }) {
      edges {
        node {
          id
          title
          body {
            summary
            processed
          }
          created
          field_image {
            alt
          }
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            comment__comment {
              comment_body {
                processed
              }
            }
          }
          path {
            alias
          }
        }
      }
    }
  }
`

export default Articles
