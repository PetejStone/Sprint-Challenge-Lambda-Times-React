import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
// const Button = styled.button `
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;

// ${props => props.primary && css ` background: palevioletred; color: white;`};
//  `;

const Top = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 5rem;
  background-color: #333;
  flex-wrap: wrap;
  z-index: 1000;
  @media (min-width: 650px) {
    flex-direction: column;
    height: 44px;
  }
`

const TopContainer = styled.div `
  width: 20%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: column;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  @media (min-width: 1280px) {
    width: 1280px;
  }

  @media (min-width: 650px) {
    flex-direction: row;
    width: 100%;
  }

`

const ContainerLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  @media (max-width: 650px) {
    width: 90%;
    margin: 0 auto;
    
  }

  ${props => (props.type === "leftSpan" ? 
  `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;

  @media (max-width: 650px) {
    flex: 0;
    width: fit-content;
    
  }

  `: null)}
`



const ContainerCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;


  ${props => (props.type === "centerSpan" ? 
  `
    cursor: pointer;
    margin-right: 5%;
    :hover {
      text-decoration: underline;
    }
    :last-child {
      margin-right: none;
    }
  `: null)}
  
`


const ContainerRight = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
    ${props => (props.type === "rightSpan" ?
     `cursor: pointer; 
     @media (max-width: 650px) {
      justify-content: center;
      
    }
     
     `: null)}
    
`
const TopBar = () => {
  return (
    <Top>
      <TopContainer>
        <ContainerLeft>
          <ContainerLeft type="leftSpan">TOPICS</ContainerLeft><ContainerLeft type="leftSpan">SEARCH</ContainerLeft>
        </ContainerLeft>
        <ContainerCenter>
          <ContainerCenter type="centerSpan">GENERAL</ContainerCenter>
          <ContainerCenter type="centerSpan">BROWNBAG</ContainerCenter>
          <ContainerCenter type="centerSpan">RANDOM</ContainerCenter>
          <ContainerCenter type="centerSpan">MUSIC</ContainerCenter>
          <ContainerCenter type="centerSpan">ANNOUNCEMENTS</ContainerCenter>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRight type="rightSpan">LOG IN</ContainerRight>
        </ContainerRight>
      </TopContainer>
    </Top>
  )
}

export default TopBar;

