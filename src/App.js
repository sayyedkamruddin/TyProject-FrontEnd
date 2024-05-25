import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route, useLocation} from "react-router-dom"
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
// import Document from './components/Document';
import Auth from './components/Auth';
import Jar from './components/jarvisbot';
import Avaz from './components/Avaz';
import Objdetec from './components/objdetect';
import ErrorPage from './components/ErrorPage';
import Forget from './components/Forget';
import Cookies from 'js-cookie';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { updateBydataTrue,updateByDefaultFalse } from './redux/counter/conterSlice';
import Home2 from './components/Home2';
import Footer2 from './components/Footer2';
import Sigup2 from './components/Sigup2';
import Chatbot2 from './components/Chatbot2';
import Profilenew from './components/Profilenew';
import Sidebarr from './components/documents/sidebar';
import Sidebarold from './components/Sidebar';
import ChatBots from './components/Chatbots'
function App() {
  
  const dispatch = useDispatch()
  const flag=false
// useEffect(()=>{
//   // alert("loaded")
//   console.log("loaded");
//    CookieAuth()
// })
const CookieAuth= async()=>{
  const Cget=Cookies.get('user')
  // console.log(Cget!=undefined +" .......");
  // console.log(Cget);
  try {
  if (Cget!=undefined) {
  // console.log(Cget+"...........hjkhkh..........")
  const cookieVerification =await axios.post("http://localhost:3001/tokenAuth",{Cget});
  if (cookieVerification.statusText==='Authenticated') {
    // console.log(cookieVerification.data);
    // console.log(cookieVerification.statusText+".......App.js Cookie");
    const {Fname,Lname,Email,Phone,City}=cookieVerification.data
    dispatch(updateBydataTrue(cookieVerification.data))
    // console.log(userValue.Token)
    flag=true
  } else {
    // console.log(cookieVerification.statusText+".......App.js Cookie");
    Cookies.remove('user')
  dispatch(updateByDefaultFalse())
  }
}
} catch (error) {
    // alert("something Error try later")
    // window.location.reload(true)
}
}
CookieAuth()
const userValue = useSelector((state) => state.user)
  // console.log(userValue.Token+"redux ...........From APP.JS....");

  return (
      
        
    <div className='' >
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home2/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
          <Route path='/document' element={<Sidebarr/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/chatbot' element={<Auth Component={Chatbot2} bool={flag}/>}/> */}
          <Route path='/chatbot' element={<Auth Component={ChatBots} bool={flag}/>}/>

          <Route path='/sign' element={ <Sigup2/>}/>
          {/* <Route path='/side' element={<Sidebarold/>}/> */}
          <Route path='/jarvis' element={<Jar/>}/>
          <Route path='/avaz' element={<Avaz/>}/>
          {/* <Route path='/obj' element={<Objdetec/>}/> */}
          <Route path='/*' element={<ErrorPage/>}/>
          <Route path='/forgot' element={<Forget/>}/>
          <Route path='/profile' element={<Auth Component={Profilenew}/>}/>
        </Routes>
        <Footer2/>
      </Router>
    </div>
  );
}

export default App;
