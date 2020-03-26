import React from "react"
import { Link } from "gatsby"

const Footer = () => (
    <footer>
        <div className={"container"}>
            <nav className={"row"}>
                <div className={"col-8 menu-footer"}>
                    <ul>
                        <li>
                            <Link to="/" title={"Inicio"}>Inicio</Link>
                        </li>
                        <li>
                            <Link to="/artigos" title={"Artigos"}>Artigos</Link>
                        </li>
                        <li>
                            <Link to="/blog" title={"Blog"}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/portfolio" title={"Portfolio"}>Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/sobre" title={"Sobre"}>Sobre</Link>
                        </li>
                    </ul>
                </div>

                <div className={"col-4 copy"}>
                    <p>© 2020 - Rychillie.</p>
                </div>
            </nav>
        </div>
    </footer>
)

export default Footer
