import React from 'react'
import styled from "styled-components"

const Select = styled.select`
  border: none;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
  padding: 1rem;
`

const FilterByRegion = () => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
  return (
    <>
      <Select>
        <option value="" > Filter by Region </option>
        {
          regions.map((region, index) => <option value={region} key={index} > {region} </option> )
        }
      </Select>
    </>
  )
}

export default FilterByRegion
