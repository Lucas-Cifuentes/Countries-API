import React from 'react'
import styled from "styled-components";
import { useParams, Link } from "react-router-dom"

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

const Details = () => {

  const { country } = useParams();

  return (
    <>
      <Button>
      <Link to="/" > <i className="fas fa-arrow-left"></i> Back</Link>
      </Button>
      <h1>Details</h1>
      <p> {country} </p>
    </>
  )
}

export default Details