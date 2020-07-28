import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from '../components/SEO';
import Social from '../components/Social'

const About = styled.div``

const Apresentation = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media only screen and (min-width: 45em) {
    flex-direction: row;
  }
`

const Left = styled.div`
  overflow: hidden;
  height: auto;
  width: 100%;
  max-width: 320px;
  border-radius: 8px;

  .gatsby-image-wrapper {
    min-height: 500px;
    box-shadow:0 5px 10px -3px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.1);
  }

  @media only screen and (min-width: 45em) {
    max-width: 46%;

    .gatsby-image-wrapper {
      min-height: 590px;
    }
  }

  @media (prefers-color-scheme: dark) {
    box-shadow:0 5px 10px -3px rgba(80, 80, 80, 0.2), 0 1px 5px -2px rgba(80, 80, 80, 0.1);
  }

  @media (prefers-color-scheme: light) {
    box-shadow:0 5px 10px -3px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: no-preference) {
    box-shadow:0 5px 10px -3px rgba(0, 0, 0, 0.2), 0 1px 5px -2px rgba(0, 0, 0, 0.1);
  }
`

const Right = styled.div`
  margin-top: 30px;
  margin-left: 0;
  flex: 1;

  @media only screen and (min-width: 45em) {
      margin-top: 0;
      margin-left: 30px;
  }
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: var(--Nord00);
  font-size: 28px;
  line-height: 32px;
  margin-bottom: 20px;
  position: relative;
  font-weight: 700;
  display: block;
  width: 100%;

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

const Small = styled.small`
  color: var(--Nord03);
  position: relative;
  font-weight: 700;
  line-height: 18px;
  font-size: 14px;
  display: block;
  width: 100%;
  margin: 0;

  @media (prefers-color-scheme: dark) {
    color: var(--Nord04);
  }

  @media (prefers-color-scheme: light) {
    color: var(--Nord03);
  }

  @media (prefers-color-scheme: no-preference) {
    color: var(--Nord03);
  }
`

const Text = styled.p`
  font-size: 20px;
  line-height: 26px;
  color: var(--Nord00);
  position: relative;
  display: inline-block;
  margin-bottom: 10px;
  z-index: 5;

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

const Contato = styled.div`
  margin-top: 40px;

  form {
    &.formcontato {
      width: 100%;
      display: block;
      position: relative;
      box-sizing: border-box;

      .details {
        width: 100%;
        display: block;
        position: relative;

        .name, .email {
          margin-top: 0;
          margin-left: 0;
          margin-right: 0;
          margin-bottom: 10px;
          width: 100%;
          border: 0;
          color: var(--Nord00);
          background: var(--Nord06);
          font-size: 16px;
          line-height: 20px;
          max-width: 100%;
          min-height: 30px;
          padding: 10px 15px;
          border-radius: 6px;
          font-family: inherit;
          font-weight: 400;
          box-sizing: border-box;

          &::placeholder,
          &::-webkit-input-placeholder,
          &:-ms-input-placeholder {
            color: var(--Nord00);
          }

          @media only screen and (min-width: 45em) {
            width: 48%;
          }
        }

        @media only screen and (min-width: 45em) {
          display: flex;

          .name {
            margin-right: 2%;
          }

          .email {
            margin-left: 2%;
          }
        }
      }

      .textarea {
        textarea {
          border: 0;
          color: var(--Nord00);
          background: var(--Nord06);
          display: block;
          resize: none;
          width: 100%;
          font-size: 16px;
          line-height: 20px;
          min-width: 100%;
          max-width: 100%;
          min-height: 180px;
          padding: 20px 15px;
          border-radius: 6px;
          box-sizing: border-box;
          font-family: inherit;
          font-weight: 400;

          &::placeholder,
          &::-webkit-input-placeholder,
          &:-ms-input-placeholder {
            font-size: 16px;
            line-height: 20px;
            color: var(--Nord00);
            font-family: inherit;
          }
        }
      }

      button.enviar {
        width: 130px;
        height: 40px;
        color: var(--Nord06);
        display: block;
        margin: 20px auto 30px;
        background: var(--Nord00);
        text-align: center;
        padding: 10px 20px;
        line-height: 20px;
        font-size: 14px;
        opacity: 1;
        position: relative;
        border-color: transparent;
        border-radius: 6px;
        transition: all .3s ease-in-out;
        box-sizing: border-box;

        &:hover {
          opacity: .8;
        }

        @media only screen and (min-width: 45em) {
          margin: 20px 0 30px auto;
        }
      }
    }

    @media (prefers-color-scheme: dark) {
      &.formcontato {
        .details {
          .name, .email {
            color: var(--Nord06);
            background: var(--Nord00);

            &::placeholder,
            &::-webkit-input-placeholder,
            &:-ms-input-placeholder {
              color: var(--Nord06);
            }
          }
        }

        .textarea {
          textarea {
            color: var(--Nord06);
            background: var(--Nord00);

            &::placeholder,
            &::-webkit-input-placeholder,
            &:-ms-input-placeholder {
              color: var(--Nord06);
            }
          }
        }

        button.enviar {
          color: var(--Nord00);
          background: var(--Nord14);
        }
      }
    }

    @media (prefers-color-scheme: light) {
      &.formcontato {
        .details {
          .name, .email {
            color: var(--Nord00);
            background: var(--Nord06);
          }
        }

        .textarea {
          textarea {
            color: var(--Nord00);
            background: var(--Nord06);
          }
        }

        button.enviar {
          color: var(--Nord06);
          background: var(--Nord00);
        }
      }
    }

    @media (prefers-color-scheme: no-preference) {
      &.formcontato {
        .details {
          .name, .email {
            color: var(--Nord00);
            background: var(--Nord06);
          }
        }

        .textarea {
          textarea {
            color: var(--Nord00);
            background: var(--Nord06);
          }
        }

        button.enviar {
          color: var(--Nord06);
          background: var(--Nord00);
        }
      }
    }
  }
`

const SobrePage = () => {
  const data = useStaticQuery(graphql`
  query {
    file(relativePath: { eq: "rychillie.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 250, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)
  return (
    <Layout>
      <SEO
        title="Sobre"
      />
      <About>
        <Apresentation>
          <Left>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Rychillie"
            />
          </Left>
          <Right>
              <Title><Small>Olá, meu nome é</Small>Rychillie Umpirre de Oliveira</Title>
              <Text>Sou um jovem estudante interessado em tecnologia, games e códigos. Sempre fui atrás de aprimorar meu conhecimento e buscar o que é de mais atual, não importando se é conhecido ou não, procurei sempre estar em meio a algo novo e diferente.</Text>
              <Text>Meu maior desejo é fazer parte das coisas, é estar envolvido, poder deixar meu nome na história é meu objetivo, ser conhecido!</Text>
          </Right>
        </Apresentation>

        <Social/>

        <Contato>
          <form className="formcontato" action="/" name="Contact Form" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="details">
              <input className="name" type="text" name="name" placeholder="Name" required/>
              <input className="email" type="email" name="email" placeholder="Email" required/>
            </div>
            <div className="textarea">
              <textarea className="text" name="message" placeholder="Mensagem" required/>
            </div>
            <button className="enviar" type="submit">Enviar</button>
          </form>
        </Contato>
      </About>
    </Layout>
  )
}


export default SobrePage;
