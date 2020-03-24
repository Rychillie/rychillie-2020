import React from "react"
import { Link } from "gatsby"

const Layout = () => (
    <header>
        <div className={"top-menu"}>
            <div className={"container"}>
                <nav className={"row"}>
                    <div className={"col-5 col-4-lm"}>
                        <Link to="/" title={"Rychillie"} className={"title"}><h1>R<span>ychillie</span></h1></Link>
                    </div>

                    <div className={"col-7 col-8-lm menu-list"}>
                        <ul>
                            <li>
                                <Link to="/portfolio" title={"Portfolio"}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/sobre" title={"Sobre"}>Sobre</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </header>
)

export default Layout
