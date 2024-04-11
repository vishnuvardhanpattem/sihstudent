import styled from "styled-components"
import React from 'react'
import { Link, Routes } from "react-router-dom"
import SignIn from "./SignIn";
import "./Header.css";

export default function Header() {
  return (
    <div className="headermain">
      <div className="header">
        <div className="header-img">
          <h1>UNIPROJEX</h1>
        </div>
        <div className="header-links">
          <Link className="header-link" to="/signin">SignIn</Link>
          <Link className="header-link" to="/register">SignUp</Link>
          <Link className="header-link" to="/community">Communities</Link>
          <Link className="header-link" to="/courses">Courses</Link>
        </div>
      </div>
    </div>


  )
}
// const Container=styled.div`
//   height:110px;
//   width:100%;
//   border:1px solid black;
//   display:flex;
//   justify-content:space-between;
//   align-items:center;
// `

// const div=styled.Link`
//   cursor:pointer;
//   text-decoration:none;
//   font-weight:bolder;
//   color:black;
//   font-size:1.3em;
//   padding-right:20px;
//   padding-left:20px;
//   &:hover{
//     text-decoration:underline;
//     font-size:1.5em;
//     transform:ease;
//   }
// `
// const Image=styled.img`
//   height:100px;
//   float:left;
//   margin-left:30px;
// `



