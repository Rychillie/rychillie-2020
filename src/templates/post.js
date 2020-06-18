import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from '../components/SEO';
import styled from "styled-components"

const Post = styled.div`

  h1, h2, h3, h4, h5, h6 {
    color: var(--Nord00);
  }

  p {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
    color: var(--Nord00);
  }

  img {
    display: block;
    position: relative;
    max-width: 100%;
    margin: 20px 0 15px;
    border-radius: .5rem;
  }


  iframe {
    display: block;
    max-width: 560px;
    max-height: 315px;
    margin: 0 auto;
    width: 100%;
  }

  a {
    font-size: 20px;
    line-height: 26px;
    position: relative;
    display: inline-block;
    color: var(--Nord00);
    z-index: 5;
    transition: all 300ms ease-in-out;

    &::before {
      content: "";
      width: 100%;
      height: 2px;
      opacity: 4;
      position: absolute;
      background-color: var(--Nord11);
      z-index: -1;
      display: block;
      bottom: 2px;
      left: 0px;
      transition: all 300ms ease-in-out;
    }

    &:hover {
      color: var(--Nord00);

      &::before {
        height: 13px;
        background-color: var(--Nord11);
        opacity: .3;
      }
    }
  }

  @media (prefers-color-scheme: dark) {
    h1, h2, h3, h4, h5, h6 {
      color: var(--Nord06);
    }

    p {
      color: var(--Nord06);
    }

    a {
      color: var(--Nord06);

      &::before {
        background-color: var(--Nord11);
      }

      &:hover {
        color: var(--Nord06);

        &::before {
          background-color: var(--Nord11);
        }
      }
    }
  }

  @media (prefers-color-scheme: light) {
    h1, h2, h3, h4, h5, h6 {
      color: var(--Nord00);
    }

    p {
      color: var(--Nord00);
    }

    a {
      color: var(--Nord00);

      &::before {
        background-color: var(--Nord11);
      }

      &:hover {
        color: var(--Nord00);

        &::before {
          background-color: var(--Nord11);
        }
      }
    }
  }

  @media (prefers-color-scheme: no-preference) {
    h1, h2, h3, h4, h5, h6 {
      color: var(--Nord00);
    }

    p {
      color: var(--Nord00);
    }

    a {
      color: var(--Nord00);

      &::before {
        background-color: var(--Nord11);
      }

      &:hover {
        color: var(--Nord00);

        &::before {
          background-color: var(--Nord11);
        }
      }
    }
  }
`

const Thumb = styled.div`
  .gatsby-image-wrapper {
    max-height: 220px;
    border-radius: .65rem;
  }
`

const Title = styled.h3`
  display: block;
  position: relative;
  font-size: 28px;
  line-height: 34px;
  color: var(--Nord00);

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

const CategoryDate = styled.div`
  display: block;
  position: relative;
  margin: 20px 0 15px;
  color: var(--Nord00);

  @media (prefers-color-scheme: dark) {
    color: var(--Nord06);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord00);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord00);
  }
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt || 'nothin’'}
        image={post.frontmatter.image.childImageSharp.fluid}
        pathname={post.fields.slug}
        article
      />
      <Post>
        <Thumb>
          <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title}/>
        </Thumb>
        <Title>{post.frontmatter.title}</Title>
        <CategoryDate>{post.frontmatter.categories} — {post.frontmatter.date}</CategoryDate>
        <div className={"article"} dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>
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
      fields {
        slug
      }
    }
  }
`
