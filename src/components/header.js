import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Hd = styled.header``

const MenuTop = styled.div`
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 999;
    background-color: rgba(236, 239, 244, 0.8);
    backdrop-filter: blur(10px);

    @media (prefers-color-scheme: dark) {
      background-color: rgba(46, 52, 64, 0.8);
    }

    @media (prefers-color-scheme: light) {
      background-color: rgba(236, 239, 244, 0.8);
    }

    @media (prefers-color-scheme: no-preference) {
        background-color: rgba(236, 239, 244, 0.8);
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
    padding: 20px 0;
`

const Title = styled.h1`
    color: var(--Nord00);
    font-family: 'Nunito', sans-serif;
    display: inline-block;
    visibility: visible;
    line-height: 32px;
    font-size: 32px;
    font-weight: 700;
    padding: 0;
    margin: 0;
    opacity: 1;

    @media only screen and (min-width: 45em) {
        line-height: 44px;
        font-size: 40px;

        span {
            visibility: visible;
            font-size: 40px;
            line-height: 44px;
            opacity: 1;
        }
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

const Spn = styled.span`
    display: inline-block;
    visibility: hidden;
    line-height: 0;
    font-size: 0;
    opacity: 0;
    transition: all 300ms ease-in-out;
`

const MenuList = styled.ul`
    display: flex;
    align-items: center;
`

const ItemLista = styled.li`
    margin: 0 5px;
`

const ItemLink = styled(Link)`
    position: relative;
    display: block;
    padding: 5px;
    color: var(--Nord03);
    font-weight: 700;
    line-height: 22px;
    font-size: 16px;
    transition: all 300ms ease-in-out;

    @media only screen and (min-width: 45em) {
        padding: 10px 5px;
        line-height: 24px;
        font-size: 24px;
    }

    @media only screen and (min-width: 60em) {
        padding: 10px 15px;
    }

    &:hover, &:active, &.active,&[aria-current="page"] {
        color: var(--Nord11);
    }

    @media (prefers-color-scheme: dark) {
        color: var(--Nord04);

        &:hover, &:active, &.active,&[aria-current="page"] {
            color: var(--Nord11);
        }
    }

    @media (prefers-color-scheme: light) {
        color: var(--Nord03);

        &:hover, &:active, &.active,&[aria-current="page"] {
            color: var(--Nord11);
        }
    }

    @media (prefers-color-scheme: no-preference) {
        color: var(--Nord03);

        &:hover, &:active, &.active,&[aria-current="page"] {
            color: var(--Nord11);
        }
    }
`

const Header = () => (
    <Hd>
        <MenuTop>
            <Container>
                <Nav>
                    <Link to="/" title={"Rychillie"} className={"title"}>
                        <Title>R<Spn>ychillie</Spn></Title>
                    </Link>
                    <MenuList>
                        <ItemLista>
                            <ItemLink to="/portfolio" title={"Portfolio"}>Portfolio</ItemLink>
                        </ItemLista>
                        <ItemLista>
                            <ItemLink to="/sobre" title={"Sobre"}>Sobre</ItemLink>
                        </ItemLista>
                    </MenuList>
                </Nav>
            </Container>
        </MenuTop>
    </Hd>
)

export default Header
