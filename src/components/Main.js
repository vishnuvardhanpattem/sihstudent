import React from 'react'
import styled from 'styled-components'
// import ImageSlider from './Imageslider'
import SignIn from './SignIn'
import { Link, Routes } from "react-router-dom"
// import All from './All'
import "./Header.css"
function Main() {
  return (
    <Container>
        <Container1>
            <Content>
                <h1>Empowering Student Innovation :<br/>Where Ideas Flourish,Knowledge Unites</h1>
                <p>Our Online Integrated Platform for Projects is a comprehensive service tailored to the needs of students from diverse universities and colleges.</p>
                <p><Button><Link className="probut" >Browse Projects</Link></Button></p>
            </Content>
            {/* <Image>
                <ImageSlider/>   
            </Image> */}
        </Container1>
    </Container>
  )
}
const Container=styled.div`
    display:flex;
    flex-direction:column;
    height:500px;
`
const Container1=styled.div`
    background-color:black;
    color:white;
    height:500px;
    width:100%;
    border:2px solid black;
    display: flex;
    justify-content:space-around;
`
const Content=styled.a`
    text-align:left;
    width:450px;
    margin-top:50px;
    overflow: hidden;
    p{
        margin-top:20px;
        letter-spacing:0.8px;
    }
    padding-top:60px;
    p button {
        color: white;
        background-color: white;
    }
`
// const Image=styled.div`
//     width:400px;
//     padding-top:100px;
// `
const Container2=styled.div`
    color:black;
    background-color:white;
    float:left;
`
const Button=styled.div`

`

export default Main

