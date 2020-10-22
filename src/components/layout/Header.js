import React from 'react'
import styled from "styled-components"

import DarkMode from "../common/DarkMode"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.1);
`

const Title = styled.h1`
  font-weight: 800;
  font-size: 14px;
`

const Header = () => {
  return (
    <Container>
      <Title>Where in the World?</Title>
      <DarkMode />
    </Container>
  )
}

export default Header
