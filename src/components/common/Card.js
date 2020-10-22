import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 18rem;
  border-radius: 0.3rem;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const Title = styled.p`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 1rem;
`

const Description = styled.div`
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
`

const Item = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin: 0;
`

const Data = styled.span`
  font-weight: 300;
`

const LinkStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem;
  a{
    color: #2196f3;
    text-decoration: none;
    margin-left: 0.5rem;
  }
`

const Card = ({ country }) => {
  const { flag, name, population, region, capital } = country;

  const path = `/details/${name}`;

  return (
    <Container>
      <Image src={flag} alt="flag" />
        <Description>
          <Title> {name} </Title>
          <Item>Population: <Data> {population} </Data> </Item>
          <Item>Region: <Data> {region} </Data> </Item>
          <Item>Capital: <Data> {capital} </Data> </Item>
      </Description>
      <LinkStyled>
      <i className="fas fa-info-circle"></i>
      <Link to={path} >Details</Link>
      </LinkStyled>
    </Container>
  )
}

export default Card
