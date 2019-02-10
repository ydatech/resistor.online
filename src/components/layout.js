import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,

          }}
        >
          <main
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexFlow: 'column nowrap',
              alignItems: 'center'
            }}
          >{children}</main>
        </div>
        <footer style={{
          position: "absolute",
          bottom: 0,
          right: 0,

          left: 0,
          padding: "1rem",
          width: "100%",
          textAlign: "center",
          height: "60px"   /* Height of the footer */
          //background:#6cf;
        }}>
          © {new Date().getFullYear()},{` `}
          <a href="https://resistor.online">Resistor Calculator</a>
        </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
