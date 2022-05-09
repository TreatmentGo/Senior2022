import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>TreatmentGo</h1>
            <p1>Find The Help you Need!</p1>
        </ItemText>
        <Buttons>
        <ButtonGroup>
            <LeftButton>
             Take The Quiz 
            </LeftButton>
            <RightButton>
               Find the nearest help Center
            </RightButton>
        </ButtonGroup>
      
    </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap = styled.div`
width: 100VW;
height: 100Vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/assets/ms2.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

`
const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`
display: flex;
margin-bottom: 200px;
`
const LeftButton = styled.div`
background-color:yellow;
height: 40px;
width: 256px;
color: blue;
display: flex;
justify-content: center;
align-items: center;
border-radius: 30px;
opacity: 0.85;
text-transform: uppercase;
font-size:12px;
cursor: pointer;
margin: 8px;
@media (max-width: 768px){
flex-direction: column;
}

`

const RightButton = styled(LeftButton)`
background: #FFFFFF;
opacity: 0.65;
color: black;
@media (max-width: 768px){
flex-direction: column;
}


`
const Buttons= styled.div`
@media (max-width: 768px){
flex-direction: column;
}

`



