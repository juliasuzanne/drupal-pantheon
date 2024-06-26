import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About"></SEO>
    <h1>About</h1>
    <Link to="/">Back to home</Link>
  </Layout>
)

export default About
