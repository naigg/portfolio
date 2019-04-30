/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { useState } from "react"
import { StaticQuery, navigate, graphql } from "gatsby"

const handleSubmit = (event, valueHandler) => {
  const value = event.target.value;
  event.preventDefault();
  valueHandler(value);
  navigate(`/tools/${event.target.value}/`);
}

function Tools({ containerStyle }) {
  const [selectValue, setSelectValue] = useState('tool');

  return (
    <StaticQuery
      query={toolQuery}
      render={data => {
        const { tools } = data.site.siteMetadata;

        const toolsElement = tools.map((tool) => {
          const { name, link } = tool;
          return (
            <option key={link} value={link}>{name}</option>
          )
        })

        return (
          <div style={{
            ...containerStyle,
            display: 'flex',
            marginBottom: '2.625rem'
          }}>
            <select defaultValue={selectValue} onChange={(e) => handleSubmit(e, setSelectValue)}>
              <option value="tool" disabled>Tool options</option>
              { toolsElement }
            </select>
          </div>
        )
      }}
    />
  )
}

const toolQuery = graphql`
  query ToolQuery {
    site {
      siteMetadata {
        tools {
          name
          link
        }
      }
    }
  }
`

export default Tools
