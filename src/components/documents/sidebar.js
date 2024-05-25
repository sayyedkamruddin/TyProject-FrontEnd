import React, { useState, useRef, useEffect } from "react";

import Documens from './Documen'; 
import AnchorLink from "react-anchor-link-smooth-scroll";

import { FaInstagram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Objcom from "./objcom";
export default function Document(props) {
  const location = useLocation();
console.log(location.hash.substring(1)+"..................Location");
const idPath=location.hash.substring(1)
let pathHover=false
console.log(location.pathname);
  useEffect(()=>{
    if (location.hash) {
      
      document.getElementById(location.hash.substring(1)).scrollIntoView({behavior:"smooth",block:"center"})
   


      // document.getElementById("aaa").scrollIntoView({behavior:"smooth"})
    }
  })

  const expand = () => {
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu.current.classList.toggle("hidden");
    rotate1.current.classList.toggle("rotate-180");
  };
const s="http://localhost:3000/1.png"

  const expand2 = () => {
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu2.current.classList.toggle("hidden");
    rotate2.current.classList.toggle("rotate-180");
  };

  

  const subMenu = useRef(null);
  const subMenu2 = useRef(null);
  const rotate1 = useRef(null);
  const rotate2 = useRef(null);

  const [display, setDisplay] = useState(false);
  if (idPath==="imaginatework" || idPath==="objwork" || idPath==="genaudiowork") {
    pathHover=true
   
  }
  else{
    pathHover=false
  }

  const expandClose=()=>{
    // subMenu.current.className+=" hidden"
    // subMenu2.current.className+=" hidden"
   
  }
  return (
    <div className=" w-full flex h-full fixed top16  ">
      <div
        className={`w-[25%] overflow-hidden   ${
          display ? "" : "max-[768px]:-translate-x-80"
        }  transition ease-in max-[768px]:absolute bg-white z-50 max-sm:w-full  `}
      >
        <div className="   bg-[rgb(255,255,255)] w-[25%] text-[rgb(114,116,118)] flex flex-col h-screen fixed text-lg max-md:w-[50%] max-sm:text-base pt-2 p-8 px-15   shadow-lg box-border "> {/* scoll remove*/ }
          <div
            className=" absolute top-0 right-0 p-2 font-semibold min-[769px]:hidden cursor-pointer "
            onClick={() => {
              setDisplay(!display);
            }}
          >
            <IoIosClose />
          </div>
          <div className=" bordr-2 p2 border-l   ">
            <ul className=" flex flex-col gap-2">
              <li className={` hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)] transition-all delay-100 duration-100 ${idPath==="tutorial"?expandClose():""}  ${idPath==="tutorial"?" border-l border-[rgb(26,27,28)] " :" "}   `}>
              <a href="#tutorial">Tutorial</a>
              </li>
              <li className={` hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)] transition-all delay-100 duration-100 ${idPath==="avaz"?expandClose():""} ${idPath==="avaz"?"border-l border-[rgb(26,27,28)]  ":""} `}>
              <a href="#avaz">AVAZ</a>
              </li>
              <li
                className={` gap-2 flex flex-col p-2  hover:border-l hover:border-[rgb(26,27,28)]   transition-all  ${idPath==="imaginate" || idPath==="genaudio" || idPath==="hovervision"?"border-l border-[rgb(26,27,28)]  " :""}`}
                
              >
                <div className=" flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer " onClick={expand}>
                  <p>Models</p>
                  <p ref={rotate1}>
                    <IoMdArrowDropdown />
                  </p>
                </div>

                <ul className="hidden flex flex-col gap-3 text-base  " ref={subMenu}>
                  <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl    ${ idPath==="imaginate"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""} `}>
                  <a href="#imaginate">Imaginate</a>
                  </li>
                  <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl ${ idPath==="genaudio"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""}`}>
                  <a href="#genaudio">GenAudio</a>
                  </li>
                  <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl ${ idPath==="hovervision"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""}`}>
                  <a href="#hovervision">HoverVision</a>
                  </li>
                </ul>
              </li>
              <a href="#jarvis"><li className={` hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)] transition-all delay-100 duration-100 ${idPath==="jarvis"?expandClose():""}  ${idPath===" jarvis"?"border-l border-[rgb(26,27,28)] ":""}`}>
              jarvis
              </li></a>
              <li className={` hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)] transition-all delay-100 duration-100 ${idPath==="avazwork"?expandClose():""}  ${idPath==="avazwork"?"border-l border-[rgb(26,27,28)]  ":""}`}>
              <a href="#avazwork">How AVAZ work</a>
              </li>
              <li
                className={` gap-2 flex flex-col  p-2  hover:border-l hover:border-[rgb(26,27,28)] transition-all  ${pathHover?"border-l border-[rgb(26,27,28)]  ":"border-0"}`}
                
              >
                <div className=" flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer" onClick={expand2}>
                  <p>CHATS</p>
                  <p className="  " ref={rotate2}>
                    <IoMdArrowDropdown />
                  </p>
                </div>
                <ul
                  className="hidden flex flex-col gap-3 pl-4 text-base  "
                  ref={subMenu2}
                >
                  <a href="#imaginatework">
                    <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl ${ idPath==="imaginatework"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""}`}>
                     How Imaginate work
                  </li>
                    </a>
                    <a href="#objwork">

                  <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl ${ idPath==="objwork"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""}`}>
                    How it detected object
                  </li>
                    </a>
                    {/* <AnchorLink href="#genaudiowork"> */}
                      <a href="#genaudiowork">
                  <li className={`hover:text-[rgb(26,27,28)] px-6 py-1 rounded-xl ${ idPath==="genaudiowork"?"bg-[rgb(241,239,239)] text-[rgb(26,27,28)]":""}`}>
                    How genAudio works
                  </li>
                  </a>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <div id="aaa" className=" relative w-[75%] max-[768px]:w-full h-dvh overflow-scroll scroll-smooth  pb-10 ">
        <div className="w-full p-4  ">
          <div className=" flex items-center min-[769px]:hidden gap-2 text-xl  ">
            <BiSolidFoodMenu
              onClick={() => {
                setDisplay(!display);
              }}
              className=" cursor-pointer"
            />{" "}
            DOCUMENT{" "}
          </div>
          <hr  className=" min-[769px]:hidden"/>
          {/* <div className="py-2">Write Document here</div> */}
           <Documens></Documens>  {/* i wil use thi fr dev only */}
           
        </div>

        <div id="objwork" className="FOOTERn w-full shadow-4xl ">
          <div className=" flex justify-between py-6 bordr shadow-2xl items-center max-md:p-2 max-md:flex-col max-md:gap-3 w-full">
            <div className="left-Footer flex">
              <ul className=" flex justify-center items-center gap-5 max-md:flex-col max-md:gap-3">
                <li>
                  <div className="LOGO text-3xl font-bold px-2 max-md:text-2xl  ">
                    <Link to="/">AvAz</Link>
                  </div>
                </li>
                <li className="h-10 border max-md:hidden"></li>
                <li className=" max-md:text-sm">
                  Copyright &#169; 2024 , All Rights Reserved
                </li>
              </ul>
            </div>
            <div className="Right-Footer">
              <ul className=" flex gap-5 text-2xl max-md:text-xl">
                <li>
                  <a href="https://www.instagram.com/" target="blank">
                    <FaSquareInstagram />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="blank">
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="blank">
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/" target="blank">
                    <BsGoogle />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
