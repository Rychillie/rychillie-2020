import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from '../components/SEO';
import FeatherIcon from '../components/FeatherIcon'

const SobrePage = () => {
  const data = useStaticQuery(graphql`
  query {
      file(relativePath: { eq: "rychillie.jpg" }) {
          childImageSharp {
              fluid {
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
      <div className={"about"}>
        <div className={"row"}>
          <div className={"col-6"}>
            <div className={"image"}>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="Rychillie"
                />
            </div>
          </div>
          <div className={"col-6 apresentation"}>
            <div className={"bio"}>
              <h2><small>Olá, meu nome é</small>Rychillie Umpirre de Oliveira</h2>
              <p>Sou um jovem estudante interessado em tecnologia, games e códigos. Sempre fui atrás de aprimorar meu conhecimento e buscar o que é de mais atual, não importando se é conhecido ou não, procurei sempre estar em meio a algo novo e diferente.</p>
              <p>Meu maior desejo é fazer parte das coisas, é estar envolvido, poder deixar meu nome na história é meu objetivo, ser conhecido!</p>
            </div>
          </div>
          <div className={"col-12"}>
              <div className={"social"}>
                  <ul className={"social-list"}>
                      <li className={"social-item"}>
                          <a href="https://www.twitter.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"twitter"} alt={"twitter"}>
                              <FeatherIcon name="twitter" alt={"twitter"}/>
                              <p>@rychillie</p>
                          </a>
                      </li>
                      <li className={"social-item"}>
                          <a href="https://www.youtube.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"youtube"} alt={"youtube"}>
                              <FeatherIcon name="youtube" />
                              <p>/rychillie</p>
                          </a>
                      </li>
                      <li className={"social-item"}>
                          <a href="https://t.me/rychiii" target="_blank" rel="noopener noreferrer" className={"telegram"} alt={"telegram"}>
                              <FeatherIcon name="send" alt={"telegram"}/>
                              <p>@rychiii</p>
                          </a>
                      </li>
                      <li className={"social-item"}>
                          <a href="https://www.github.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"github"} alt={"github"}>
                              <FeatherIcon name="github" alt={"github"}/>
                              <p>/rychillie</p>
                          </a>
                      </li>
                      <li className={"social-item"}>
                          <a href="https://www.instagram.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"instagram"} alt={"instagram"}>
                              <FeatherIcon name="instagram" alt={"instagram"}/>
                              <p>@rychillie</p>
                          </a>
                      </li>
                      <li className={"social-item"}>
                          <a href="https://www.linkedin.com/in/rychillie/" target="_blank" rel="noopener noreferrer" className={"linkedin"} alt={"linkedin"}>
                              <FeatherIcon name="linkedin" alt={"linkedin"}/>
                              <p>/rychillie</p>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
          <div className={"col-12"}>
            <form className="formcontato" name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="details">
                <input className="name" type="text" name="name" placeholder="Name"/>
                <input className="email" type="email" name="email" placeholder="Email"/>
              </div>
              <div className="textarea">
                <textarea className="text" name="message" placeholder="Mensagem"/>
              </div>
              <button className="enviar" type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}


export default SobrePage
