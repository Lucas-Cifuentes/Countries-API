import React, { useEffect, useState } from 'react'
import styled from "styled-components"

import Card from "../components/common/Card"
import Filter from "../components/layout/Filter"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(res => setCountries(res))
      .catch(err => console.log(err))
  }

  return (
    <>
      <Filter />
      <Container>
        {
          countries.map((country, index) => (
            <Card country={country} key={index} />
          ))
        }
        </Container>
    </>
  )
}

export default Home;