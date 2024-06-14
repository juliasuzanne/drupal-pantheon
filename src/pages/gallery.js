import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ data }) => (
  <Layout>
    <SEO title="Image Gallery" />
    <h1> Image Gallery</h1>
    <Img fixed={data.astronautImage.childImageSharp.fixed} alt="Astronaut" />
    <Img fluid={data.gatsbyIcon.childImageSharp.fluid} alt="Gatsby Icon" />
  </Layout>
)

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 212) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    astronautImage: file(relativePath: { eq: "example.png" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Gallery
