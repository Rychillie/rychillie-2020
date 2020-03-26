import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Apresentation from "./apresentation"

const Home = ({children}) => (
    <StaticQuery query={graphql`
      query SiteHomeTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `} render={data => (
        <>
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Apresentation/>
            <main className={"home"}>
              <div className={"container"}>{children}</div>
            </main>
            <Footer/>
        </>
    )}/>
)

Home.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Home
