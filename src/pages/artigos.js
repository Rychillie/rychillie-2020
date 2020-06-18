import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from '../components/SEO';

const Title = styled.h3`
  margin-bottom: 30px;
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

const PostList = styled.div``

const PostLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;

  @media only screen and (min-width: 45em) {
    flex-direction: row;
    margin-bottom: 30px;
  }

  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.05);
      box-shadow: 0 3px 10px -3px rgba(80, 80, 80, 0.3), 0 1px 5px -2px rgba(80, 80, 80, 0.19);
    }
  }
`

const Left = styled.div`
  width: 100%;
  transition: all 300ms ease-in-out;

  @media only screen and (min-width: 45em) {
    width: 38%;
  }
`

const Image = styled.div`
  .gatsby-image-wrapper {
    border-radius: 6px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    box-shadow: 0 5px 10px -3px rgba(80, 80, 80, 0.2), 0 1px 5px -2px rgba(80, 80, 80, 0.1);
  }
`

const Right = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-left: 0;
  padding-left: 0;
  box-sizing: border-box;

  @media only screen and (min-width: 45em) {
    width: 60%;
    margin-top: 0;
    margin-left: 2%;
    padding-left: 5%;
  }
`

const PostDetails = styled.div`
  font-size: 15px;
  line-height: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;

  @media only screen and (min-width: 45em) {
    padding-bottom: 15px;
  }
`

const Category = styled.span`
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

const Separator = styled.span`
  margin-left: 5px;
  margin-right: 5px;
  color: var(--Nord06);

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

const DatePost = styled.span`
  color: var(--Nord06);

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

const TitlePost = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 20px;
  line-height: 24px;
  color: var(--Nord06);

  @media only screen and (min-width: 45em) {
    font-size: 22px;
    line-height: 24px;
  }

  @media only screen and (min-width: 60em) {
    font-size: 24px;
    line-height: 26px;
  }

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

const PageArtigos = ({data}) => {
  return (
    <Layout>
      <SEO
        title="Todas Minhas Publicações"
      />
      <Title>Meu Artigos:</Title>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostLink type={node.frontmatter.categories} key={node.id} to={node.fields.slug} title={node.frontmatter.title}>
            <Left>
              <Image>
                <Img
                  alt={node.frontmatter.title}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </Image>
            </Left>
            <Right>
              <PostDetails>
                <Category>{node.frontmatter.categories}</Category>
                <Separator>●</Separator>
                <DatePost>{node.frontmatter.date}</DatePost>
              </PostDetails>
              <TitlePost>{node.frontmatter.title}</TitlePost>
            </Right>
          </PostLink>
        ))}
      </PostList>
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
export default PageArtigos
