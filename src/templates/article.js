import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import DrupalComments from "gatsby-plugin-drupal-comments"

const Article = ({ data }) => {
  const post = data.nodeArticle
  return (
    <Layout>
      <h1>{post.title}</h1>
      <img
        src={post.relationships.field_image.localFile.publicURL}
        alt={post.field_image.alt}
      ></img>
      <div dangerouslySetInnerHTML={{ __html: post.body.processed }}></div>
      <DrupalComments
        entity_id="drupal id node"
        type_comment="comment"
        field_name="comment"
        type_content="type content"
        entity_type="type entity"
        url_api="https://dev-stanza.pantheonsite.io/jsonapi/comment/comment"
        // login_api="username"
        // password_api="password"
      />
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query ($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      id
      title
      body {
        processed
      }
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            publicURL
          }
        }
      }
    }
  }
`

export default Article
