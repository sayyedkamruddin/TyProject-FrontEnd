import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Profilenew(props) {
  const {Fname, Lname, Email, Phone, City }=props.data;
  const [imgsrc, setImgsrc] = useState("/dp.png");
  const [ct, setCt] = useState({
            "Fname":Fname,
            "Lname":Lname,
            "Email":Email,
            "Phone":Phone,
            "City":City});

  const bd = "";
  return (
    <div className="flex h-[100%] bg-[#fafafa] justify-center item-center relative top-0 overflow-hidden ">
      <div className="w-[43%] max-md:w-full my-8 border-[#e5e5e5] border-2 shadow-lg bg-[#ffffff] h-8/12 rounded-3xl ">
        <form>
        <div className="  flex  items-center justify-center h-52">
          <div className="flex  items-center justify-center flex-col  w-60  ">
            <div className="img w-36 h-36  items-center my-auto border-2 border-black rounded-full">
              <img className="w-full h-full rounded-full " src={imgsrc}></img>
            </div>
          </div>
        </div>
        <div className="w-full h-12 my-2 max-sm:overflow-hidden max-sm:w-[90%]   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold max-sm:text-base">
            <span>Frist Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="F-name"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl max-sm:text-base  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Fname}
                
              />
            </div>
            
          </div>
        </div>
        <div className="w-full h-12 my-2 max-sm:overflow-hidden max-sm:w-[90%]   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold max-sm:text-base">
            <span>last Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="L-name"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl max-sm:text-base  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Lname}
                
              />
            </div>
            
          </div>
        </div>
        <div className="w-full h-12 my-2 max-sm:overflow-hidden max-sm:w-[90%]    rounded-xl flex justify-between items-center px-4 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold max-sm:text-base">
            <span>Email :-</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="Email"
                value={ct.Email}
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  max-sm:text-base transition-all  w-48 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                readOnly
              />
            </div>
            
          </div>
        </div>{" "}
        <div className="w-full h-12 my-2  max-sm:overflow-hidden max-sm:w-[90%]   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold max-sm:text-base">
            <span>Contact</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="number"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl max-sm:text-base  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.Phone}
                
              />
            </div>
            
          </div>
        </div>
        <div className="w-full h-12 my-2 max-sm:overflow-hidden max-sm:w-[90%]   rounded-xl flex justify-between items-center px-5 ">
          <div className="w-[45%] px-4 text-center text-xl font-semibold max-sm:text-base">
            <span>City Name</span>
          </div>
          <div className="w-[55%] gap-5 flex  items-center ` ">
            <div className="relative ">
              <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
              <input
                type="text"
                id="City"
                className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl max-sm:text-base  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                required
                value={ct.City}
               
              />
            </div>
            
          </div>
        </div>
    
        <div className="w-full h-8  mb-4  rounded-xl flex justify-center items-center px-5 ">
          <Link to='/forgot' className=" text-base font-bold text-center underline ">forgot Password ? </Link>
          
        </div>
        </form>
      </div>
  
  </div>
  );
}
