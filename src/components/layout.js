import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({children}) => (
    <StaticQuery query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>
              <div className={"container"}>{children}</div>
            </main>
            <Footer/>
        </>
    )}/>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
