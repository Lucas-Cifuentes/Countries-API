import React, { useEffect } from 'react'
import styled from "styled-components"
import {connect} from "react-redux"
import Card from "../components/common/Card"
import Filter from "../components/layout/Filter"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Home = ({ countries, addCountries }) => {
  const url = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    getCountries()
  }, [])

  const getCountries = () => {
    fetch(url).then(res => res.json()).then(res => addCountries(res) )
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

const mapStateToProps = state => ({
  countries: state.countries
})

const mapDispatchToProps = dispatch => ({
  addCountries(countries) {
    dispatch({
      type: "ADD_COUNTRIES",
      countries
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)