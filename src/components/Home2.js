import React from 'react'
import Typed from 'typed.js'
import { ReactTyped } from "react-typed"
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
// import banner from "http://localhost:3000/AI-and-ML-banner-with-head"
export default function () {

    return (
        <div className=' bg-[rgb(241,242,244)] '>



            {/* //     </div> */}
            {/* <div> */}
            <div className='BANNER relative  top-  bordr-2 max-md:h-[20rem] '>
                <img src='/7xm.xyz644367.jpg' className=' max-md:opacity-55  bordr max-md:h-[20rem]' />
                <div  className='side-TEXT  absolute top-[35%] max-md:top-[28%] max-sm:top-[20%]  max-lg:px-28 max-md:px-26 max-md:items-center max-sm:px-4  px-32 w-full  items-centr  bord  h-full flex flex-col gap-6 max-lg:gap-4  max-md:gap-3 justifycenter font-bold '>
                    <h1 className=' text-5xl max-lg:text-4xl max-md:text-4xl max-md:text-center  '><ReactTyped strings={["Ai Voice Assistant For Gen Z"]} typeSpeed={40} /></h1>
                    <p className='font-normal text-xl max-lg:text-base max-md:text-xl max-md:text-center '>
                        <ReactTyped
                            strings={[

                                "<strong>Avaz : </strong>" + " Ask Anything, Know Everything" + "<i> Voice Assistant</i>",
                                "<strong>Avaz : </strong>" + " Turn Your Thoughts into Art" + "<i> Image Generator</i>",
                                "<strong>Avaz : </strong>" + " Soundtracks for Your Story" + "<i> Audio generator</i>",
                                "<strong>Avaz : </strong>" + " Seeing Beyond the Lens" + "<i> Object Dectector</i>",
                            ]}
                            typeSpeed={20}
                            backSpeed={30}
                            loop
                        />
                    </p>
                    <Link to='/sign' className=' border py-4 px-6 rounded-xl w-[30%] bg-[rgb(37,38,40)] hover:bg-[rgb(71,72,74)] cursor-pointer text-white text-center max-sm:w-32  text-xl max-lg:text-base max-lg:px-2 max-lg:py-2 '>Quickstart</Link>
                </div>
            </div>

            <div className='TOOLS w-[90%] m-auto gap-4  p-6 flex flex-col justify-center items-center max-md:p-2  '>
                <h1 className=' text-5xl font-semibold p-2 underline underline-offset-8 decoration-1 max-md:text-2xl '>Avaz Tools</h1>
                

                <div className='Chat border flex justify-evenly max-sm:justify-between p-6 max-[425px]:px-0 bg-white items-center max-[425px]:flex-col'>
                    <div className=' w-[35%] max-sm:w-[40%] max-[425px]:w-[60%]  '> <img src='/ai_instagram_post_generator_0_97d37b53be.png' /></div>
                    <div className=' w-[50%] max-sm:w-[55%] max-[425px]:w-[80%] flex flex-col justify-center gap-4 max-sm:gap-3'>
                        <h1 className=' text-3xl font-bold max-md:text-2xl max-sm:text-xl'>CHAT BOT</h1>
                        <p className=' text-xl max-md:text-base max-sm:text-sm'>Avaz  is your personal Gen-Z guru, ready to assist you with any query. From homework help to life advice, Avaz Answers has you covered.
                        You can Talk Just Like Your Friend.</p>
                        <p> <Link to='/document#avaz'> Learn More </Link></p>
                        <Link to='/chatbot'> <p className=' flex h-auto items-end text-[rgb(18,186,130)] font-bold hover:underline max-md:text-xs'>Get Started <IoIosArrowRoundForward/></p>    </Link>
                    </div>
                </div>

                <div className='Chat border max-sm:px-10 flex justify-evenly max-sm:justify-between px-16 py-6 max-[425px]:px-0 bg-white items-center max-[425px]:flex-col-reverse'>
                    <div className=' w-[50%] max-sm:w-[55%] max-[425px]:w-[80%] flex flex-col justify-center gap-4 max-sm:gap-3'>
                        <h1 className=' text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Imaginate</h1>
                        <p className=' text-xl max-md:text-base max-sm:text-sm'>Unleash your creativity with Image Generator. Transform your ideas into stunning visuals with just a few clicks.</p>
                        <p> <Link to='/document#imaginate'> Learn More </Link></p>
                        <Link to='/avaz'> <p className=' flex h-auto items-end text-[rgb(18,186,130)] font-bold hover:underline max-md:text-xs'>Get Started <IoIosArrowRoundForward/></p>    </Link>
                    </div>
                    <div className=' w-[50%] max-sm:w-[40%] max-[425px]:w-[60%]  '> <img src='/bot-automation-234tdgf.png' /></div>

                </div>
                <div className='Chat border flex justify-evenly max-sm:justify-between p-6 max-[425px]:px-0 bg-white items-center max-[425px]:flex-col'>
                <div className=' w-[45%] max-sm:w-[40%] max-[425px]:w-[60%] '> <img src='/BotPanels_chatBot_templates-1024x943.png' /></div>
                   
                    <div className=' w-[50%] max-sm:w-[55%] max-[425px]:w-[80%] flex flex-col justify-center gap-4 max-sm:gap-3'>
                        <h1 className=' text-3xl font-bold  max-md:text-2xl max-sm:text-xl'>Audio Generator</h1>
                        <p className=' text-xl max-md:text-base max-sm:text-sm'>Dive into the world of sound with Avaz AudioForge. Craft unique audio experiences that bring your stories to life</p>
                        <p> <Link to='/document#genaudio'> Learn More </Link></p>
                        <Link to='/avaz'> <p className=' flex h-auto items-end text-[rgb(18,186,130)] font-bold hover:underline max-md:text-xs'>Get Started <IoIosArrowRoundForward/></p>    </Link>  
                    </div>

                </div>
                <div className='Chat border max-sm:px-10 flex justify-evenly max-sm:justify-between  px-16 py-6 max-[425px]:px-0 bg-white items-center max-[425px]:flex-col-reverse'>
                    <div className=' w-[50%] max-sm:w-[55%] max-[425px]:w-[80%] flex flex-col justify-center gap-4 max-sm:gap-3'>
                        <h1 className=' text-3xl font-bold max-md:text-2xl max-sm:text-xl'>Object Dectector </h1>
                        <p className=' text-xl max-md:text-base max-sm:text-sm'>Explore the unseen with Avaz Visionary. Discover and identify objects in your images with unparalleled accuracy.</p>
                        <p> <Link to='/document#hovervision'> Learn More </Link></p>
                        
                        
                        <Link to='/avaz'> <p className=' flex h-auto items-end text-[rgb(18,186,130)] font-bold hover:underline max-md:text-xs'>Get Started <IoIosArrowRoundForward/></p>    </Link>
                    </div>
                    <div className=' w-[50%] max-sm:w-[45%] max-[425px]:w-[60%]  '> <img src='/object-detection-01-768x768.png' /></div>

                </div>
            </div>



        </div>
    )
}
