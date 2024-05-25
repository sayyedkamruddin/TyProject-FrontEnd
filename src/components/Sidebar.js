import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IoMdArrowDropdown } from "react-icons/io";
import Document from './documents/Documen';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Sidebar() {
  const location=useLocation().pathname

    const expand=()=>{
        // alert("done")
        // subMenu.current.classList.toggle('absolute')
        subMenu.current.classList.toggle('hidden')
        rotate1.current.classList.toggle('rotate-180')

    }
    const expand2=()=>{
        // alert("done")
        // subMenu.current.classList.toggle('absolute')
        subMenu2.current.classList.toggle('hidden')
        rotate2.current.classList.toggle('rotate-180')
        

    }


    
    const subMenu=useRef(null)
    const subMenu2=useRef(null)
    const rotate1=useRef(null)
    const rotate2=useRef(null)



    
  return (
    <>
   
    <div className=' bg-[rgb(255,255,255)]  w-[25%] text-[rgb(114,116,118)] flex flex-col h-screen fixed text-xl  p-8 px-15 overflowscroll  shadow-lg box-border overflow-hidden '>
        <div className=' bordr-2 p2 border-l   '>

            <ul className=' flex flex-col gap-4' >
                <li className=' hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)]'><Link to='/'>Home</Link></li>
                <li className=' gap-2 flex flex-col p-2  hover:border-l hover:border-[rgb(26,27,28)]  ' onClick={expand}>
                    <div className=' flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer'>
                    <p>AI</p>
                    <p ref={rotate1}><IoMdArrowDropdown/></p>
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
                    <p className='  ' ref={rotate2}><IoMdArrowDropdown/></p>
                    </div>
                <ul className='hidden flex flex-col gap-3 pl-4  ' ref={subMenu2}>
                        <li className=' hover:text-[rgb(26,27,28)]'><Link to='/'> Chat 1</Link></li>
                        
                        <li className=' hover:text-[rgb(26,27,28)]'><AnchorLink href="#objwork"> Chat 2 </AnchorLink></li>
                        <li className=' hover:text-[rgb(26,27,28)]'><Link to='/'> Chat 3</Link></li>

                    </ul>
                </li>
                
                <li className=' hover:text-[rgb(26,27,28)] p-2  hover:border-l hover:border-[rgb(26,27,28)]'><Link to='/'>Home</Link></li>
                
            </ul>
        </div>
    </div>

    
    <div className=' left-[25%] absolute p-2 overflow-scroll '>
    hiii
    <Document/>
    </div>
    </>

  )
}
