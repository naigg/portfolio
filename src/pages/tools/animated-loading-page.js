import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

class AnimatedLoadingPage extends React.Component {
  render() {
    const { data } = this.props
    const { title, tools } = data.site.siteMetadata
    const { description, name } = tools[1];

    return (
      <Layout location={this.props.location} title={title}>
        <SEO
          title={name}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2>{name}</h2>
        <p>
          { description }
        </p>
      </Layout>
    )
  }
}

export default AnimatedLoadingPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tools {
          name
          description
        }
      }
    }
  }
`
