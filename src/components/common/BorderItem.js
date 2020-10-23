import React from 'react'
import styled from "styled-components"

const Card = styled.div`
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
  padding: 0.5rem;
`

const BorderItem = ({ border }) => {
  console.log(border)
  return (
    <Card>
      {
        border
      }
    </Card>
  )
}

export default BorderItem
