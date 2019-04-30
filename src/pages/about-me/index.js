import React from "react"
import { graphql } from "gatsby"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const { title, userDescription } = data.site.siteMetadata
    const siteTitle = title;
    const pageTitle = userDescription.title;
    const { education } = userDescription;
    console.log(education);

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={pageTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h2>{pageTitle}</h2>
        {
            education.map(item => (
                <div key={item.date}>
                    <p>{item.location}</p>
                    <p>{item.degree}</p>
                    <p>{item.date}</p>
                </div>
            ))
        }
      </Layout>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        userDescription {
            title
            education {
                date
                degree
                location
            }
        }
      }
    }
  }
`
