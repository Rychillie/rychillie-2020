import React from "react"
import { Link } from "gatsby"
import Apresentation from "./apresentation"

const Layout = () => (
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
        <Apresentation/>
    </header>
)

export default Layout
