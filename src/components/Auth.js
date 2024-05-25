// const jwt =require("jsonwebtoken");
import axios from "axios";

import React, { useContext } from 'react'
// import noteContext from "../context/noteContext";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { updateBydataTrue } from '../redux/counter/conterSlice';

// import Chatbot from './Chatbot';
import Profile from './Profile';

import { Navigate } from "react-router-dom"; 


const Auth=(props) =>{
  // const access=useContext(noteContext)

  // const navigate= useNavigate();
  // const isAuthenticated =acces.access;
  // useEffect(() => {
  //  acces.update();
  
  // }, [])
  
  // useEffect(async()=>{
  //  isAuthenticated = await axios.post("http://"+/*192.168.1.208*/"localhost:3001/auth")
    
  // })
  // console.log(access.state)
  
  const {Component} = props
  const userValue = useSelector((state) => state.user)
  // console.log(userValue+".........auth.js token");
  // console.log(props.bool+".........auth.js token-----Props");
  // const bool =userValue.Token
  // console.log(bool+".........auth.js token");
  // console.log(Component);
  return (
// access.state.Token ? <Component data={access.state}/> :<Navigate to='/sign'/>
userValue.Token ? <Component data={userValue}/> :<Navigate to='/sign'/>
// props.bool? <Component data={userValue}/> :<Navigate to='/sign'/>

  
  )
}

export default Auth;