import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
`

const Text = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
`

const DarkMode = () => {
  return (
    <Container>
      <Text> <i className="far fa-moon"></i> Dark Mode</Text>    
    </Container>
  )
}
export default DarkMode