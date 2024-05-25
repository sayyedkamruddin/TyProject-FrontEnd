import React, { useState, useRef } from 'react'
import Sidebar from './Sidebar'
import Doc1 from './Doc1'
import Footer2 from './Footer2'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import { IoMdArrowDropright } from "react-icons/io";
import { BiSolidFoodMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import Documen from "./documents/Documen"
export default function Document(props) {
  const expand = () => {
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu.current.classList.toggle('hidden')
    rotate1.current.classList.toggle('rotate-180')

  }
  const expand2 = () => {
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu2.current.classList.toggle('hidden')
    rotate2.current.classList.toggle('rotate-180')


  }



  const subMenu = useRef(null)
  const subMenu2 = useRef(null)
  const rotate1 = useRef(null)
  const rotate2 = useRef(null)


  const [display, setDisplay] = useState(false)
  return (
    <div className=' w-full flex h-full fixed  overflow-hidden'>
      <div className={`w-[25%]   ${display ? "" : "max-[768px]:-translate-x-80"}  transition ease-in max-[768px]:absolute bg-white z-50 max-sm:w-full  `}>

        <div className='   bg-[rgb(255,255,255)] w-[25%] text-[rgb(114,116,118)] flex flex-col h-screen fixed text-xl max-md:w-[50%] max-sm:text-base  p-8 px-15 overflow-scroll  shadow-lg box-border '>
          <div className=' absolute top-0 right-0 p-2 font-semibold min-[769px]:hidden cursor-pointer ' onClick={() => { setDisplay(!display) }}  >
            <IoIosClose/>
          </div>
          <div className=' bordr-2 p2 border-l   '>
            <ul className=' flex flex-col gap-4' >
              <li className=' hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)]'><Link to='/'>Home</Link></li>
              <li className=' gap-2 flex flex-col p-2  hover:border-l hover:border-[rgb(26,27,28)]  ' onClick={expand}>
                <div className=' flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer'>
                  <p>AI</p>
                  <p ref={rotate1}><IoMdArrowDropdown /></p>
                </div>

                <ul className='hidden flex flex-col gap-3  ' ref={subMenu}>
                  <li className='hover:text-[rgb(26,27,28)] bg-[rgb(241,239,239)] px-6 py-1 rounded-xl text-[rgb(26,27,28)] '><Link to='/document/doc1'>AI 1</Link></li>
                  <li className='hover:text-[rgb(26,27,28)] px-6'><Link to='/'>AI 2</Link></li>
                  <li className='hover:text-[rgb(26,27,28)] px-6'><Link to='/'>AI 3</Link></li>
                </ul>
              </li>
              <li className=' gap-2 flex flex-col  p-2  hover:border-l hover:border-[rgb(26,27,28)]' onClick={expand2}>
                <div className=' flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer'>
                  <p>Chat</p>
                  <p className='  ' ref={rotate2}><IoMdArrowDropdown /></p>
                </div>
                <ul className='hidden flex flex-col gap-3 pl-4  ' ref={subMenu2}>
                  <li className=' hover:text-[rgb(26,27,28)]'><Link to='/'> Chat 1</Link></li>
                  <li className=' hover:text-[rgb(26,27,28)]'><Link to='/'> Chat 2</Link></li>
                  <li className=' hover:text-[rgb(26,27,28)]'><Link to='/'> Chat 3</Link></li>

                </ul>
              </li>

              <li className=' hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)]'><Link to='/'>Home</Link></li>

            </ul>
          </div>
        </div>
        {/* <Sidebar /> */}
      </div>
      <div className=' relative w-[75%] max-[768px]:w-full h-full overflow-scroll '>

        <div className='p-4 '>
          <div className=' flex items-center min-[769px]:hidden gap-2 text-xl  '><BiSolidFoodMenu onClick={() => { setDisplay(!display) }} className=' cursor-pointer' />  DOCUMENT </div>
          <hr />
          <div className='py-2'>
            <Documen/>

          </div>
        </div>

        <div className='FOOTERn w-full h-full'>
          <div className=' flex justify-between p-6 shadow-2xl items-center max-md:p-2 max-md:flex-col max-md:gap-3 w-full'>
            <div className='left-Footer flex'>
              <ul className=' flex justify-center items-center gap-5 max-md:flex-col max-md:gap-3'>
                <li>
                  <div className='LOGO text-3xl font-bold px-2 max-md:text-2xl  '>
                    <Link to='/'>AvAz</Link>
                  </div>
                </li>
                <li className='h-10 border max-md:hidden'></li>
                <li className=' max-md:text-sm'>Copyright &#169; 2024 , All Rights Reserved</li>

              </ul>
            </div>
            <div className='Right-Footer'>
              <ul className=' flex gap-5 text-2xl max-md:text-xl'>
                <li><a href='https://www.instagram.com/' target='blank' ><FaSquareInstagram /></a></li>
                <li><a href='https://www.facebook.com/' target='blank'><FaFacebookSquare /></a></li>
                <li><a href='https://www.twitter.com/' target='blank'><FaTwitterSquare /></a></li>
                <li><a href='https://www.google.com/' target='blank'><BsGoogle /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
