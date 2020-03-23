import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div className={"blogpost"}>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title}/>
        <h3 className={"titulo"}>{post.frontmatter.title}</h3>
        <p className={"categorydate"}>{post.frontmatter.categories} — {post.frontmatter.date}</p>
        <div className={"article"} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id: title
        title
        categories
        image {
          childImageSharp {
            fluid(maxWidth: 850) {
            ...GatsbyImageSharpFluid
            }
          }
        }
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
    }
  }
`
