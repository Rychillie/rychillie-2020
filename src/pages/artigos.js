import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from '../components/SEO';

const PageArtigos = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Todas Minhas Publicações"
      />
      <h3>Meu Artigos:</h3>
      <div className={"post-list"}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link className={"post"} type={node.frontmatter.categories} key={node.id} to={node.fields.slug} title={node.frontmatter.title}>
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
                <span className={"categorypost"}>{node.frontmatter.categories}</span>
                <span className={"separator"}>●</span>
                <span className={"datepost"}>{node.frontmatter.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
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
export default PageArtigos
