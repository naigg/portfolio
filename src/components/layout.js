import React from "react"
import { Link } from "gatsby"

import Tools from "./tools"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              ...scale(1.5),
              display: 'flex',
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <span style={{
            ...scale(0.3),
            display: 'flex',
            marginBottom: rhythm(1.5),
            marginTop: rhythm(1.2)
          }}>
            <Link 
              style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
              }}
              to={'/about-me'}>
              About
            </Link>
          </span>
          <Tools containerStyle={{marginTop: '2rem'}}/>
        </>
      )
    } else {
      header = (
        <>
          <h3
            style={{
              display: 'flex',
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <Tools />
        </>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
          {header}
        </header>
        <main style={{
          minHeight: 'calc(100vh - 250px)'
        }}>
          {children}
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
