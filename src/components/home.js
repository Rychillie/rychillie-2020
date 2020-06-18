import React from "react"
import PropTypes from "prop-types"
import {StaticQuery, graphql} from "gatsby"
import  styled, { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Apresentation from "./apresentation"


const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Nunito:wght@400,700&display=swap");

  :root {
    --dark: #191919;
    --light: #ececec;
    --twitterbluelight: #006aad;
    --twitterbluedark: #7cccff;
    --redprimarylight: #FF5757;
    --youtuberedlight: #d40000;
    --redprimarydark: #b90000;
    --youtubereddark: #ff9090;
    --linkedinbluelight: #0077B5;
    --linkedinbluedark: #4fc3ff;
    --telegrambluelight: #0088CC;
    --telegrambluedark: #5cc9ff;
    --twitchpurpledark: #6441a5;
    --twitchpurplelight: #be92ff;
    --Nord00: #2E3440;
    --Nord01: #3B4252;
    --Nord02: #434C5E;
    --Nord03: #4C566A;
    --Nord04: #D8DEE9;
    --Nord05: #E5E9F0;
    --Nord06: #ECEFF4;
    --Nord07: #8FBCBB;
    --Nord08: #88C0D0;
    --Nord09: #81A1C1;
    --Nord10: #5E81AC;
    --Nord11: #BF616A;
    --Nord12: #D08770;
    --Nord13: #EBCB8B;
    --Nord14: #A3BE8C;
    --Nord15: #B48EAD;
  }

  body, html {
    font-family: 'Nunito', sans-serif;
    background-color: var(--Nord06);
    margin: 0;
    width: 100%;
    height: 100%;
    padding: 0;

    a {
      color: var(--Nord00);
      transition: all .3s ease-in-out;

      &:hover, &:active {
        color: var(--Nord00);
      }

      &.btn {
        &.ver-artigos {
          width: 130px;
          height: 40px;
          color: var(--Nord06);
          display: block;
          margin: 50px auto 20px;
          background: var(--Nord00);
          text-align: center;
          padding: 10px 20px;
          line-height: 20px;
          font-size: 14px;
          opacity: 1;
          position: relative;
          border-radius: 5px;
          transition: all .3s ease-in-out;
          box-sizing: border-box;

          &:hover {
            opacity: .8;
          }
        }
      }
    }

    img {
      transition: all 300ms ease-in-out;
    }

    @media (prefers-color-scheme: dark) {
      background-color: var(--Nord00);

      a {
        color: var(--Nord06);

        &:hover, &:active {
          color: var(--Nord06);
        }

        &.btn {
          &.ver-artigos {
            color: var(--Nord00);
            background: var(--Nord07);
          }
        }
      }
    }

    @media (prefers-color-scheme: light) {
      background-color: var(--Nord06);

      a {
        color: var(--Nord00);

        &:hover, &:active {
          color: var(--Nord00);
        }

        &.btn {
          &.ver-artigos {
            color: var(--Nord06);
            background: var(--Nord00);
          }
        }
      }
    }

    @media (prefers-color-scheme: no-preference) {
      background-color: var(--Nord06);

      a {
        color: var(--Nord00);

        &:hover, &:active {
          color: var(--Nord00);
        }

        &.btn {
          &.ver-artigos {
            color: var(--Nord06);
            background: var(--Nord00);
          }
        }
      }
    }
  }

  html, body, div, span, applet, object, iframe, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  a {
    text-decoration: none;
  }

  /* HTML5 display-role reset for older browsers */

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote {
    &:before, &:after {
      content: '';
      content: none;
    }
  }

  q {
    &:before, &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #___gatsby, #gatsby-focus-wrapper, .tl-edges, .tl-wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: unset;
  }
`

const Main = styled.main`
  margin-top: 0;
  padding: 40px 0;
  background-color: var(--Nord04);

  @media (prefers-color-scheme: dark) {
    background-color: var(--Nord01);
  }

  @media (prefers-color-scheme: light) {
    background-color: var(--Nord04);
  }

  @media (prefers-color-scheme: no-preference) {
    background-color: var(--Nord04);
  }
`

const Container = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 850px;
  box-sizing: border-box;

  @media only screen and (min-width: 33.75em) {
    width: 80%;
    padding: 0 1.5rem;
  }

  @media only screen and (min-width: 45em) {
    padding: 0 2rem;
  }
`

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
          <React.Fragment>
            <GlobalStyle />
            <Header siteTitle={data.site.siteMetadata.title}/>
            <Apresentation/>
            <Main>
              <Container>{children}</Container>
            </Main>
            <Footer/>
          </React.Fragment>
        </>
    )}/>
)

Home.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Home
