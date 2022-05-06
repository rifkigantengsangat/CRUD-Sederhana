import React from 'react'
import Styled from 'styled-components'

const Welcome = () => {
  return (
    <Container>
        <ContainerText>
      <Text>CRUD SHOTGAN</Text>
        </ContainerText>
    </Container>
  )
}

export default Welcome

const Container = Styled.div`
width:100%;
align-items:center;
height:70px;
background-color:grey;
`
const ContainerText = Styled.div`
height:100%;
background-color:#009879;

`
const Text = Styled.div`
text-align:center;
padding-top:20px;
font-size:20px;
font-weight:bold;
color:white;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;

`