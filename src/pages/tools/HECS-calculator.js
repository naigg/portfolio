import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

class HECCalculator extends React.Component {
  render() {
    const { data } = this.props
    const { title, tools } = data.site.siteMetadata;
    const { description, name } = tools[0];

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

export default HECCalculator

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
