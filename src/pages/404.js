import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

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

const Title = styled.h1`
    margin-bottom: 30px;
    color: var(--Nord00);

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

const Text = styled.p `
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 10px;
    color: var(--Nord00);

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

const NotFoundPage = () => (
    <Layout>
        <Container>
            <Title>Ops deu Ruim</Title>
            <Text>Em Construção</Text>
        </Container>
    </Layout>
)

export default NotFoundPage
