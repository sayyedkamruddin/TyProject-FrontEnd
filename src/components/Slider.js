import React, { useState } from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default function 
() {
    const imgs=["https://png.pngtree.com/background/20231117/original/pngtree-city-of-the-future-3d-rendered-ai-robot-in-urban-landscape-picture-image_6299969.jpg",
    "https://miro.medium.com/v2/resize:fit:750/1*PlOTeS5syDCWSrYDUb7J7w.jpeg", "http://localhost:3000/1.png", "http://localhost:3000/2.png",
    "http://localhost:3000/3.png", "http://localhost:3000/4.png", "http://localhost:3000/5.png", "http://localhost:3000/6.png",
    "https://media.wired.co.uk/photos/606db957c99f3d4d31739e74/16:9/w_1280,c_limit/ed86af6ae5769fb3c72f82c959f0d422.png"]
    
    const [current,setCurrent]=useState(0);
    const [wid,setWid]=useState(window.innerWidth)
    let wids = setInterval(() => {
        setWid(window.innerWidth)
       
   }, 1000);
//    let wds = setInterval(() => {
      
//     if(current >= 8){
//         setCurrent(0)
//     }else{
//          setCurrent(current+1)
//     }},2000);
    const nxtBtn=()=>{
        if (current===imgs.length-1) {
            setCurrent(0)
        } else {
            setCurrent(current+1)
        }
    }
    const preBtn=()=>{
        if (current===0) {
            setCurrent(imgs.length-1)
        } else {
            setCurrent(current-1)
        }
    }
    // setInterval(() => {
    //     if (current===imgs.length-1) {
    //         setCurrent(0)
    //     } else {
    //         setCurrent(current+1)
    //     }
    // }, 7000);
    return (
        <div className='flex w-full max-[768px]:hidden  overflow-hidden h-[550px] max-[768px]:h-80 shadow-xl relative '>

    <div className='w-full '
    style={ {
                
   
        height:"100%"
        }}>


        {
            imgs.map((s)=>{
                return <div className='w-full h-full'
                style={ { 
                    
                    //  backgroundSize:'cover',
                    // backgroundImage:`url(${s})`,
                    //  backgroundRepeat:'no-repeat',
                    // width:`${100}%`,
                    // height:"100%",
                    transform:`translateY(-${current*550}px)`}}>
                    <img src={s} className='  ' 
                 style={ { 
                width:`${wid}px`,
                    height:"100%"
                
                     }}/> 
                    </div>})
        }
       
        {/* <div className='btns absolute top-[50%] text-4xl text-white  flex'>
            <button className=''>  <FaArrowAltCircleLeft /></button>
            <button className=''> <FaArrowAltCircleRight/></button>

        </div>        */}
    </div>
        <button className=' absolute top-[50%] left-[5%] text-4xl text-white  max-[768px]:text-xl' onClick={preBtn}>  <FaArrowAltCircleLeft /></button>
        <button className=' absolute top-[50%] right-[5%] text-4xl text-white max-[768px]:text-xl ' onClick={nxtBtn}>  <FaArrowAltCircleRight /></button>

        <div className='dot-btns absolute bottom-[5%] flex  gap-4 justify-center w-full  '>
            {
                imgs.map((s,i)=>{
                    return <div className={` ${i===current?"bg-white":"bg-gray-400"} w-6 h-6  border border-white rounded-full cursor-pointer max-[768px]:w-2 max-[768px]:h-2`} onClick={()=>{
                        setCurrent(()=>{
                            return i
                        })
                    }}></div>
              
                })
            }
        </div>
    </div>
    
   

  )
}
