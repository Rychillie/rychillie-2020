import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/home"
import Img from "gatsby-image"
import SEO from '../components/SEO';

const IndexPage = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Pagina Inicial"
      />
      <h3>Ultimas Publicações:</h3>
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
                <p className={"description"}>{node.frontmatter.description}</p>
                <span className={"categorypost"}>{node.frontmatter.categories}</span>
                <span className={"datepost"}>{node.frontmatter.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link className={"btn ver-artigos"} to={"Artigos"}>Todos Artigos</Link>
    </Layout>
  )
}

export const pageQuery = graphql`{
  allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, limit: 10) {
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
          date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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

export default IndexPage
