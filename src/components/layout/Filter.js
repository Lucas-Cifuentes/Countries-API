import React from 'react'
import styled from "styled-components"

import FilterByCountry from "../common/FilterByCountry"
import FilterByRegion from "../common/FilterByRegion"

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`

const Filter = () => {
  return (
    <Container>
      <FilterByCountry />
      <FilterByRegion />
    </Container>
  )
}

export default Filter
