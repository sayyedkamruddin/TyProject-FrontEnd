import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { BsGoogle } from "react-icons/bs";
import { Link,useLocation } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
export default function Footer2() {
    const location=useLocation().pathname
    return (
        <>
        { location!="/chatbot" && location!="/sign" && location!="/profile"  && location!="/avaz" && location!="/document" && location!="/forgot" && location!="/jarvis" && location != "/new" && 
            <div className=' flex justify-between p-6 shadow-2xl items-center max-md:p-2 max-md:flex-col max-md:gap-3'>
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
                    <li><a href='https://in.linkedin.com/' target='blank'><FaLinkedin /></a></li>
                </ul>
            </div>
        </div>}
        </>

    )
}
