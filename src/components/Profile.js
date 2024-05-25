import React, { useState } from "react";import { useSelector, useDispatch } from 'react-redux'
import { updateBydataTrue,updateByDefaultFalse } from '../redux/counter/conterSlice';
export default function Profile(props) {
  // const {Fname, Lname, Email, Phone, City }=props.data;
  const userValue = useSelector((state) => state.user)
  const {Fname, Lname, Email, Phone, City }=userValue;

  const [imgsrc, setImgsrc] = useState("http://localhost:3000/dp.png");
  const [ct, setCt] = useState({
            "Fname":Fname,
            "Lname":Lname,
            "Email":Email,
            "Phone":Phone,
            "City":City
          });

  const bd = "";
  return (
    <div className="flex h-[100%] relative top-0 ">
      <div
        className=" w-[35%] absolute top-0 pt-[4rem] h-[100%] flex justify-center bg-[#333533] items-center 
  border-r-4 border-[#71717150]"
      >
         {/* bg-[rgba(247,245,243,0.44)] */}
      <div className="flex flex-col w-80 rounded-[25px] h-5/6 border-2  bg-[#e7ecef] border-[#97979763]"><div className=" border-b-4 border-[#49494977] w-full h-16 "></div></div>
      </div>
      {/* bg-[#faf1e218] */}
      <div className=" absolute top-0 pt-[4rem] right-0 w-[65%] flex flex-col items-center  bg-[#e7ecef] justify-center h-screen overflow-y-scroll overflow-x-hidden ">
        <div className="w-4/6 border-[#e5e5e5] border-2 shadow-lg bg-[#ffffff] rounded-3xl ">
          <form>
          <div className="  flex  items-center justify-center h-80">
            <div className="flex  items-center justify-center flex-col h-72 w-60  ">
              <div className="img w-48 h-48  items-center my-auto border-2 border-black rounded-full">
                <img className="w-full h-full rounded-full " src={imgsrc}></img>
              </div>
              <div className="btn-img-chng">
                <input
                  id="img-btn"
                  className=" hidden"
                  onChange={(e) => {
                    setImgsrc(URL.createObjectURL(e.target.files[0]));
                  }}
                  type="file"
                  accept=".png, .jpg, .jpeg"
                ></input>
                <div className=" w-28 p-1 hover:bg-transparent hover:text-black transition duration-500 border-2 hover:border-[#333] justify-center items-center text-xl text-center rounded-xl cursor-pointer text-white bg-black  font-serif h-10 ">
                  {" "}
                  <label htmlFor="img-btn">Change</label>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-16 my-2   rounded-xl flex justify-between items-center px-5 ">
            <div className="w-[45%] px-4 text-center text-xl font-semibold">
              <span>Frist Name</span>
            </div>
            <div className="w-[55%] gap-5 flex  items-center ` ">
              <div className="relative ">
                <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
                <input
                  type="text"
                  id="F-name"
                  className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                  required
                  value={ct.Fname}
                  onChange={(event) => {
                    setCt(event.target.value);
                  }}
                />
              </div>
              <div className="img w-7 h-7 items-center my-auto ">
                <label htmlFor="F-name">
                  <img
                    className="w-full h-full  "
                    src="http://localhost:3000/e.svg"
                  ></img>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-16 my-2   rounded-xl flex justify-between items-center px-5 ">
            <div className="w-[45%] px-4 text-center text-xl font-semibold">
              <span>last Name</span>
            </div>
            <div className="w-[55%] gap-5 flex  items-center ` ">
              <div className="relative ">
                <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
                <input
                  type="text"
                  id="L-name"
                  className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                  required
                  value={ct.Lname}
                  onChange={(event) => {
                    setCt(event.target.value);
                  }}
                />
              </div>
              <div className="img w-7 h-7 items-center my-auto ">
                <label htmlFor="L-name">
                  <img
                    className="w-full h-full  "
                    src="http://localhost:3000/e.svg"
                  ></img>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-16 my-2   rounded-xl flex justify-between items-center px-4 ">
            <div className="w-[45%] px-4 text-center text-xl font-semibold">
              <span>Email :-</span>
            </div>
            <div className="w-[55%] gap-5 flex  items-center ` ">
              <div className="relative ">
                <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
                <input
                  type="text"
                  id="Email"
                  className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-48 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                  required
                  readOnly
                />
              </div>
              <div className="img w-20  items-center my-auto  text-center">
                <label htmlFor="Email">You Can't Change</label>
              </div>
            </div>
          </div>{" "}
          <div className="w-full h-16 my-2   rounded-xl flex justify-between items-center px-5 ">
            <div className="w-[45%] px-4 text-center text-xl font-semibold">
              <span>Contact</span>
            </div>
            <div className="w-[55%] gap-5 flex  items-center ` ">
              <div className="relative ">
                <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
                <input
                  type="text"
                  id="number"
                  className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                  required
                  value={ct.Phone}
                  onChange={(event) => {
                    setCt(event.target.value);
                  }}
                />
              </div>
              <div className="img w-7 h-7 items-center my-auto ">
                <label htmlFor="number">
                  <img
                    className="w-full h-full  "
                    src="http://localhost:3000/e.svg"
                  ></img>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-16 my-2   rounded-xl flex justify-between items-center px-5 ">
            <div className="w-[45%] px-4 text-center text-xl font-semibold">
              <span>City Name</span>
            </div>
            <div className="w-[55%] gap-5 flex  items-center ` ">
              <div className="relative ">
                <div className="absolute top-0 left-0 w-52 bg-transparent   h-9  "></div>
                <input
                  type="text"
                  id="City"
                  className="   top-0 z-10  bg-transparent  peer h-9 focus:outline-none   outline-none border-0 pl-4 p-1  text-xl  transition-all  w-52 duration-300 border-b-2 focus:border-b-3 focus:border-black border-gray-400 "
                  required
                  value={ct.City}
                  onChange={(event) => {
                    setCt(event.target.value);
                  }}
                />
              </div>
              <div className="img w-7 h-7 items-center my-auto ">
                <label htmlFor="City">
                  <img
                    className="w-full h-full  "
                    src="http://localhost:3000/e.svg"
                  ></img>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full h-16 mt-6  rounded-xl flex justify-center items-center px-5 ">
             <button className=" w-28 p-1 hover:bg-black hover:text-white transition duration-500 border-2 border-[#333] justify-center items-center text-xl text-center rounded-full cursor-pointer text-black font-serif h-10 "> Submit</button>
          </div>
          <div className="w-full h-8  mb-5  rounded-xl flex justify-center items-center px-5 ">
            <a className=" text-base font-bold text-center underline ">forgot Password ? </a>
          </div>
          </form>
        </div>
        <div className="footer shadow-xl h-24 m-4  w-full  bg-[#fafafa35] top-auto bottom-0 static text-black text-center justify-center items-center justify-items-center border-t-2 border-[#0005]  ">
          <div className="ufoot flex border-b border-[rgba(0, 0, 0, 0.797)] w-3/5 h-1/2 m-auto justify-center items-center ">
            <a
              className="foot-icon w-6 h-6 mx-1 my-2 border border-[rgba(13, 13, 13, 0.806)] rounded-md hover:bg-[#333] hover:text-[rgba(255, 253, 253, 0.907)]"
              href="#!"
              role="button"
            >
              <i className="fa fa-facebook-f"></i>
            </a>

            <a
              className="foot-icon w-6 h-6 mx-1 my-2 border border-[rgba(13, 13, 13, 0.806)] rounded-md hover:bg-[#333] hover:text-[rgba(255, 253, 253, 0.907)]"
              href="#!"
              role="button"
            >
              <i className="fa fa-twitter"></i>
            </a>

            <a
              className="foot-icon w-6 h-6 mx-1 my-2 border border-[rgba(13, 13, 13, 0.806)] rounded-md hover:bg-[#333] hover:text-[rgba(255, 253, 253, 0.907)]"
              href="#!"
              role="button"
            >
              <i className="fa fa-google"></i>
            </a>

            <a
              className="foot-icon w-6 h-6 mx-1 my-2 border border-[rgba(13, 13, 13, 0.806)] rounded-md hover:bg-[#333] hover:text-[rgba(255, 253, 253, 0.907)]"
              href="#!"
              role="button"
            >
            <i className="fa fa-instagram"></i>
            </a>
          </div>
          <h1 className="h1"></h1>
          <div className="lfoot p-1 h-1/2 w-4/5 m-auto text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit id
            porro optio sint reiciendis labore architecto necessitatibus,
            laudantium natus voluptatibus est maxime ipsa tenetur odit numquam
            amet laborum quas? Distinctio, molestias quaerat.
          </div>
        </div>
      </div>
    </div>
  );
}
