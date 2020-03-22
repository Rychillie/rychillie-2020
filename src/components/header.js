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
        <header>
            <div className={"top-menu"}>
                <div className={"container"}>
                    <nav className={"row"}>
                        <div className={"col-4-lm"}>
                            <Link to="/" title={"Rychillie"} className={"title"}><h1>R<span>ychillie</span></h1></Link>
                        </div>

                        <div className={"col-8-lm menu-list"}>
                            <ul>
                                <li>
                                    <Link to="/artigos" title={"Portfolio"}>Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/sobre" title={"Sobre"}>Sobre</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

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
                                <p>Um jovem Programador Front-End querendo compartilhar seu conhecimento. Sempre buscando evoluir e melhorar em todos os aspectos. Venha <Link to={"/sobre"} alt={"Sobre"}>me Conhecer</Link> um pouco mais e o <Link to={"/portfolio"} alt={"Portfolio"}>meu trabalho</Link>.</p>
                            </div>
                        </div>
                        <div className={"col-12"}>
                            <div className={"social"}>
                                <ul className={"social-list"}>
                                    <li className={"social-item"}>
                                        <Link className={"twitter"} alt={"twitter"}>
                                            <FeatherIcon name="twitter" alt={"twitter"}/>
                                            <p>@rychillie</p>
                                        </Link>
                                    </li>
                                    <li className={"social-item"}>
                                        <Link className={"instagram"} alt={"instagram"}>
                                            <FeatherIcon name="instagram" alt={"instagram"}/>
                                            <p>@rychillie</p>
                                        </Link>
                                    </li>
                                    <li className={"social-item"}>
                                        <Link className={"youtube"} alt={"youtube"}>
                                            <FeatherIcon name="youtube" />
                                            <p>/rychillie</p>
                                        </Link>
                                    </li>
                                    <li className={"social-item"}>
                                        <Link className={"github"} alt={"github"}>
                                            <FeatherIcon name="github" alt={"github"}/>
                                            <p>/rychillie</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
