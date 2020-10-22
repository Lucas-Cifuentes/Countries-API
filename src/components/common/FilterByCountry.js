import React from 'react'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  color: grey;
`

const Input = styled.input`
  padding: 1rem;
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  text-indent: 2rem;
`
const Icon = styled.div`
  position: absolute;
  margin-left: 0.7rem;
`

const FilterByCountry = () => {
  return (
    <Container>
      <Icon>
      <i className="fas fa-search"></i>
      </Icon>
      <Input placeholder="Search by country..." />
    </Container>
  )
}

export default FilterByCountry
