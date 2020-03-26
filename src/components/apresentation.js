import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import FeatherIcon from './FeatherIcon'

export default () => {
    const data = useStaticQuery(graphql`
    query {
        file(relativePath: { eq: "profile.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return (
        <div className={"apresentation"}>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-4"}>
                        <div className={"image"}>
                            <Img
                                fluid={data.file.childImageSharp.fluid}
                                alt="Rychillie"
                            />
                        </div>
                    </div>
                    <div className={"col-8"}>
                        <div className={"bio"}>
                            <h2><small>Olá, meu nome é</small>Rychillie Umpirre de Oliveira</h2>
                            <p>Um jovem Programador Front-End querendo compartilhar seu conhecimento. Sempre buscando evoluir e melhorar em todos os aspectos. <Link to={"/sobre"} alt={"Sobre"}>Conheça-me</Link> e um pouco mais do <Link to={"/portfolio"} alt={"Portfolio"}>meu trabalho</Link>.</p>
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
                                    <a href="https://www.instagram.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"instagram"} alt={"instagram"}>
                                        <FeatherIcon name="instagram" alt={"instagram"}/>
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
                                    <a href="https://www.github.com/rychillie/" target="_blank" rel="noopener noreferrer" className={"github"} alt={"github"}>
                                        <FeatherIcon name="github" alt={"github"}/>
                                        <p>/rychillie</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
