import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const Heading = styled.div `
  width: 100%;
  margin-top: 5rem;

  @media (max-width: 650px) {
    margin-top: 6rem;
  }

${props => (props.type === "mainHeading" ? 
` 
    font-size: 60px;
    font-family: Didot, serif;
    font-weight: bold;
    flex: 8;
    text-align: center;
    color: #000;
    margin-top: 0px;

    @media (max-width: 650px) {
      margin-top: 0px;
    }
`: null)}

${props => (props.type === "date" ? 
`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  margin-left: 25px;
  flex: 1;
  margin-top: 0px;

  @media (max-width: 650px) {
    text-align: center;
    margin: 0px;
    width: 100%;
  }

`: null)}

${props => (props.type === "temp" ? 
`
  text-align: right;
  margin-right: 25px;
  flex: 1;
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  width: initial;
  margin-top: 0px;

  @media (max-width: 650px) {
    text-align: center;
    margin: 0px;
    width: 100%;
    margin-top: 0px;
   
  }
}

`: null)}


  }
`
const Header = () => {
  return (
    <Heading>
      <Heading type="date">MARCH 32, 2018</Heading>
      <Heading type="mainHeading">Lambda Times</Heading>
      <Heading type="temp">98°</Heading>
    </Heading>
  )
}

export default Header;

