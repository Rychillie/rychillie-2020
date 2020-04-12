import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from '../components/SEO';

const Portfolio = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Conheça meu Porfolio"
      />
      <h3>Meu Portfolio:</h3>
      <div className={"post-list"}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link className={"post"} type={"portfolio"} key={node.id} to={node.fields.slug} title={node.frontmatter.title}>
            <div className={"row content"}>
              <div className={"col-5 imgpost"}>
                <div className={"imagepost"}>
                  <Img
                    alt={node.frontmatter.title}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                </div>
              </div>
              <div className={"col-7 details"}>
                <h3 className={"titlepost"}>{node.frontmatter.title}</h3>
                <span className={"description"}>{node.frontmatter.description}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {categories: {eq: "Portfolio"}}}) {
    edges {
      node {
        id
        frontmatter {
          id: title
          title
          categories
          image {
            childImageSharp {
              fluid(maxWidth: 360) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(locale: "pt-br", formatString: "DD MMM")
          description
        }
        fields {
          slug
        }
      }
    }
  }
}
`
export default Portfolio
