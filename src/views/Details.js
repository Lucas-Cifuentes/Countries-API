import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import styled from "styled-components";
import { useParams, Link } from "react-router-dom"
import BorderItem from "../components/common/BorderItem"

const Button = styled.div`
  border: none;
  background-color: transparent;
  margin: 2rem;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  width: 4rem;
  a{
    color: #2196f3;
    text-decoration: none;
  }
`

const Image = styled.img`
  width: 100%;
  max-width: 30rem;
  margin-right: 2rem;
`

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
`
const DetailItem = styled.p`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-weight: 600;
  margin: 0 0.8rem;
  width: 100%;
`

const DetailData = styled.span`
  font-weight: 300;
`
const OtherDetails = styled.div`
  margin-top: 1.5rem;
`

const Borders = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

const Details = ({ countries }) => {
  const [currentCountry, setCurrentCountry] = useState(null)
  const { country } = useParams();

  const getSelectedCountry = () => {
    const selectedCountry = countries.filter(data => data.name === country)
    setCurrentCountry(selectedCountry[0])
  }

  useEffect(() => {
    getSelectedCountry()
  }, [])

  return (
    <>
      <Button>
      <Link to="/" > <i className="fas fa-arrow-left"></i> Back</Link>
      </Button>
      {
        currentCountry && (
          <Container>
            <Image src={currentCountry.flag} alt="flag" />
            <div>
              <h1> {currentCountry.name} </h1>
            <DetailItem>
              Native Name: <DetailData>{currentCountry.nativeName}</DetailData>
            </DetailItem>
            <DetailItem>
              Population: <DetailData>{currentCountry.population}</DetailData>
            </DetailItem>
            <DetailItem>
              Region: <DetailData>{currentCountry.region}</DetailData>
            </DetailItem>
            <DetailItem>
              Sub Region: <DetailData>{currentCountry.subregion}</DetailData>
            </DetailItem>
            <DetailItem>
              Capital: <DetailData>{currentCountry.capital}</DetailData>
            </DetailItem>
            <OtherDetails>
              <DetailItem>
                Top Level Domain: {
                  currentCountry.topLevelDomain.map((data, index) => ( 
                    <DetailData key={index}>
                      {data}
                    </DetailData>
                   ) )
                }
              </DetailItem>
              <DetailItem>
                Currencies: {
                  currentCountry.currencies.map((data, index) => ( 
                    <DetailData key={index}>
                      {data.name}
                    </DetailData>
                   ) )
                }
              </DetailItem>
              <DetailItem>
                Currencies: {
                  currentCountry.languages.map((data, index) => (
                    <DetailData key={index}>
                      {data.name}, {" "}
                    </DetailData>
                   ) )
                }
              </DetailItem>
              <DetailItem>
                Borders: 
              </DetailItem>
              <Borders>
                {
                  currentCountry.borders.map((data, index) => (
                    <BorderItem key={index} border={data} />
                  ))
                }
              </Borders>
                </OtherDetails>
              </div>
          </Container>
        )
      }
    </>
  )
}

const mapStateToProps = state => ({
  countries: state.countries
})

export default connect(mapStateToProps, {})(Details) 