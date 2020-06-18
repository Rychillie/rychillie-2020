import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ft = styled.footer`
    padding: 40px 0;
    background: var(--Nord06);

    @media (prefers-color-scheme: dark) {
        background: var(--Nord00);
    }

    @media (prefers-color-scheme: light) {
        background: var(--Nord06);
    }

    @media (prefers-color-scheme: no-preference) {
        background: var(--Nord06);
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

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin: 20px 0;

    @media only screen and (min-width: 45em) {
        flex-direction: row;
    }
`

const NavList = styled.ul`
    display: flex;
    align-items: center;
`

const ItemList = styled.li`
    margin: 10px 5px;
`

const StyledLink = styled(Link)`
    font-size: 14px;
    line-height: 16px;
    padding: 5px 10px;
    color: var(--Nord00);
    transition: all 300ms ease-in-out;

    &:hover {
        color: var(--Nord03);
    }

    @media only screen and (min-width: 60em) {
        font-size: 16px;
        line-height: 18px;
    }

    @media (prefers-color-scheme: dark) {
        color: var(--Nord06);

        &:hover {
            color: var(--Nord04);
        }
    }

    @media (prefers-color-scheme: light) {
        color: var(--Nord00);

        &:hover {
            color: var(--Nord03);
        }
    }

    @media (prefers-color-scheme: no-preference) {
        color: var(--Nord00);

        &:hover {
            color: var(--Nord03);
        }
    }
`

const Copy = styled.p`
    margin: 20px 0;
    font-size: 16px;
    line-height: 16px;
    color: var(--Nord00);
    text-align: center;

    @media only screen and (min-width: 45em) {
        text-align: right;
        line-height: 38px;
    }

    @media only screen and (min-width: 60em) {
        font-size: 16px;
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

const Footer = () => (
    <Ft>
        <Container>
            <Nav>
                <NavList>
                    <ItemList>
                        <StyledLink to="/" title={"Inicio"}>Inicio</StyledLink>
                    </ItemList>
                    <ItemList>
                        <StyledLink to="/artigos" title={"Artigos"}>Artigos</StyledLink>
                    </ItemList>
                    <ItemList>
                        <StyledLink to="/portfolio" title={"Portfolio"}>Portfolio</StyledLink>
                    </ItemList>
                    <ItemList>
                        <StyledLink to="/sobre" title={"Sobre"}>Sobre</StyledLink>
                    </ItemList>
                </NavList>
                <Copy>© 2020 - Rychillie.</Copy>
            </Nav>
        </Container>
    </Ft>
)

export default Footer
