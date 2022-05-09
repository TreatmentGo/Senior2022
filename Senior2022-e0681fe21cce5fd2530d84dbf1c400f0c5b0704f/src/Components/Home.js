import React from 'react'
import styled from "styled-components"
import Section from './Section'

function Home() {
  return (
    <CustomContainer>
        <Section/>
    </CustomContainer>
  )
}

export default Home

const CustomContainer = styled.div`
 height: 100vh;
`
  

