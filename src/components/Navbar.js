import React, { useState } from 'react'
import Pop1l from './Pop1l'
import { useContext } from 'react'
// import noteContext from "../context/noteContext";
import { Link, useLocation,useNavigate } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import Cookies from 'js-cookie';
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlineWbSunny } from "react-icons/md";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { updateBydataTrue, updateByDefaultFalse } from '../redux/counter/conterSlice';
import { IoIosClose } from "react-icons/io";




export default function () {
    // const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const userValue = useSelector((state) => state.user)
    const dispatch = useDispatch()

    // const updateByDefaultFalse=useContext(noteContext)
    // console.log(updateByDefaultFalsex  .);
    const location = useLocation().pathname;
    const [bgcolor, setbgcolor] = useState("red")
    const [fgcolor, setfgcolor] = useState("white")
    const [path, setPath] = useState(true)
    const [pop, setPop] = useState(false);
	const [chckbox,setChckbox]= useState("password");

    console.log(location === "/chatbot")
    const hovered = () => {
        setbgcolor(() => {
            return "transparent"
        })
        setfgcolor(() => {
            return "black"
        })
    }
    const unhovered = () => {
        setbgcolor(() => {
            return "red"
        })
        setfgcolor(() => {
            return "white"
        })
    }

    const [open, setopen] = useState(false)   //use for navbar tagggle menu on responsive design
    const Clicks = () => {
        setopen(!open)
    }

    const Logout = async () => {
        const Cget = Cookies.get('user')
        // window.location.reload(true)

        try {

            alert("current device logout")
            Cookies.remove('user')
            console.log(userValue.Fname + "Nav accessing redux Fname before logout");

            dispatch(updateByDefaultFalse())
            console.log(Cget);
            console.log(userValue.Token + "Nav accessing redux token after logout");
            console.log(userValue.Fname + "Nav accessing redux Fname after logout");

            const cookieVerification = await axios.post("http://localhost:3001/logout", { Cget });
            console.log(cookieVerification.data + "NAVBAR Logout Function");

            //   context.update(cookieVerification.data);
        window.location.reload(true)

        } catch (error) {
            console.log(error);
        }
    }

    const AllLogout = async () => {
        const Cget = Cookies.get('user')
        // window.location.reload(true)

        try {
            alert("all device logout")
            Cookies.remove('user')
            dispatch(updateByDefaultFalse())
            console.log(Cget);

            console.log(userValue.Token + "Nav accessing redux token after logout");

            const cookieVerification = await axios.post("http://localhost:3001/alllogout", { Cget });
            console.log(cookieVerification.data + "NAVBAR allLogout Function");

        window.location.reload(true)

        } catch (error) {
            console.log(error);

        }
    }
    const [submenu, setSubmenu] = useState(false)












    // login popup





    let name, value
	// const [open,setOpen]=useState(false)
	const [userl, setUserL] = useState({ Username: "", Pass_word: "" });
	  const navigate = useNavigate();
 
	  const onChngInptlog = (event) => {
		// console.log(event);
		name = event.target.name;
		value = event.target.value;
		setUserL({ ...userl, [name]: value });
		console.log(userl.Pass_word+"POPUP PAGE FUNCTION")
	
	  }
	  
	  const [titleslog, setTitleslog] = useState("");
	  const login = async (e) => {
		e.preventDefault();
		try {
			if (userl.Username !== "") {
				const logres = await axios.post("http://localhost:3001/log",userl);
				console.log(logres);
				if (logres.statusText === "success") {
					// contecs.update(logres.data);
					dispatch(updateBydataTrue(logres.data))
		  			console.log(userValue+"login of poppu window");
					navigate("/")
					// alert("successfull")
					Cookies.set("user",logres.data.token,{
					  expires:1,
					})
					console.log(logres.data.token);
                    setPop(!pop)
				  } 
				  else if (logres.data === "not match") {
					setTitleslog("invalid password");
					setTimeout(() => {
					  setTitleslog('');
					}, 3000);
				  }
				  else {
					setTitleslog("user not exist");
					setTimeout(() => {
					  setTitleslog('');
					}, 3000);
				  }
			}
			else {
				setTitleslog('enter Email');
				setTimeout(() => {
					setTitleslog('');
				  }, 3000);
			  }
		}	catch(e){
			console.log(e);
			setTitleslog('Server Error');
			setTimeout(() => {
			  setTitleslog('');
			}, 3000);
			}

	  }
    return (
        <>





        { pop &&
            
            <div className="w-full top-0 h-full flex z-[50] fixed items-center justify-center bg-gray-500/60  ">
	<div className=" overflow-hidden rounded-3xl  w-11/12 h- bg-white fixed md:w-6/12 md:h-80 flex flex-col md:flex-row z-50 max-md:w-[80%] max-sm:w-[99%]">
		<div className=' absolute cursor-pointer right-5
	 top-3 text-3xl '>
	<span className="material-symbols-outlined relative" onClick={()=>{setPop(!pop)}}>
<IoIosClose/>

</span>	</div>	
		<div className="w-full h-1/2 md:w-1/2 md:h-full overflow-hidden max-md:hidden " >
			<img  className="w-full h-full  "src="/popl1.png" alt=""/>
		</div>
		<div className="w-full h-1/2 md:w-1/2 md:h-full bg-white ">
			<form onSubmit={login} className='w-full h-full flex-col'>
				<div className="w-full p-2 h-auto">
					<h1  className="w-full text-center p-1 h-auto font-bold text-gray-950 text-3xl ">Login </h1>
					<p className='font-serif txlext- text-center text-red-600'>{titleslog}</p>
				</div>
				<div className="w-full h-16 flex mb-3 justify-center items-center">
				<div className="relative h-10 w64 flex mt-4 justify-center items-center w-9/12  ">
					<input id="user" type="text" required placeholder='shakib' className='   bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '
				
					name="Username"
					value={userl.Username}
					onChange={onChngInptlog}
					>
					</input>   
					<label htmlFor='user' className=" transition-all duration-300 absolute left-2 text-base font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-white 
					 peer-placeholder-shown:top-1 peer-valid:bg-white
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">username</label> </div>
				    <i></i>
				</div>
			    <div className="w-full h-16 flex justify-center items-center">
				<div className="relative h-10 w64 flex mt-3 justify-center items-center  w-9/12 ">
					<input id="ps" type={chckbox} required  className='    bg-transparent peer focus:outline-none  pl-4 pt-3 pb-2  rounded-lg w-full  border border-b-4 focus:border-blue-500 border-gray-300 placeholder-transparent '
					name="Pass_word"
					placeholder=''
					value={userl.Pass_word}
					onChange={onChngInptlog}
					>
					</input>   
					<label htmlFor='ps' className=" transition-all duration-300 absolute left-2 text-base font-mono text-neutral-600 -top-4 px-2 bg-white
					 peer-placeholder-shown:text-lg  peer-placeholder-shown:pl-3 peer-focus:bg-white 
					 peer-placeholder-shown:top-1 peer-valid:bg-white
					peer-focus:text-base  peer-focus:z-10 peer-focus:-top-4 peer-focus:px-2
					 ">password</label> </div>
				    <i></i>
				</div>
			<div className="w-full left-16 h-auto flex float-start  relative text-blue-700  my-3"> 
				<input type='checkbox' onChange={()=>{chckbox==="password"? setChckbox("text"): setChckbox("password")}} className=' '>
				</input>
				<span className='ml-2'>show password</span>
				<Link to="/forgot" className='absolute right-32 ' onClick={()=>{setPop(!pop)}} >forgot</Link>

			</div>
			<div className=' w-full my-4 flex justify-center items-center h-12'>
				<input className='w-24 bg-[rgb(37,38,40)] hover:bg-[rgb(71,72,74)] rounded-lg cursor-pointer text-white font-serif h-9 ' type='submit' value="Login" ></input>
			</div>
			<div>
				{/* <a>sp</a> */}
			</div>
			
			</form>
		</div>
</div>
</div>}
            {/* <Pop1l poplog={pop} onChange={(value) => setPop(value)} /> */}
            {
                (location != "/chatbot"  && location != "/new1" && location != "/avaz" && location!="/jarvis"  ) && 


                //navbar  for device greater than 768px 
                <div className='relative z-49 ticky top-0 ' >
                    <div className='NAVBAR flex justify-between    pl-10 pr-5 text-xl h-16  shadow-md items-center w-full max-[768px]:px-8 relative'>
                        <div className='LOGO text-3xl font-bold px-2  '>
                            <Link to='/'>AvAz</Link>
                        </div>

                        <div className='NAVLIST max-[768px]:hidden'>
                            <ul className=' flex gap-10 text-lg items-center font-medium max-lg:gap-5 max-lg:text-base'>
                                <li><Link to='/' className={`${location === "/" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"}} `}>Home</Link></li>
                                <li><Link to='/chatbot' className={`${location === "/chatbot" ? "text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} "} `}>Ai</Link></li>
                                {/* <li><Link to='/about' className={`${location === "/about" ? "text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} "} `}>About</Link></li> */}
                                <li><Link to='/document' className={`${location === "/document" ? "text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} "} `}>Document</Link></li>
                                <li><Link to='/contact' className={`${location === "/contact" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} "} `}>Contact</Link></li>
                                {/* <li><button onClick={()=>{pop===true? setPop(false): setPop(true)}} className={`w-32 h-10 leading-8 bg-${bgcolor === "transparent" ? "red" : "transparent"}-500 text-${fgcolor === "black" ? "white" : "black"} border-2 text-center rounded-full hover:bg-red-500 hover:text-white transition  delay-100 duration-200 ease-in `} onMouseOver={hovered} onMouseOut={unhovered}>Log In</button></li> */}

                                <li className=' h-10 border'></li>
                                {/* <li className=' cursor-pointer hover:    hover:bg-gray-200  rounded-xl p-2'><MdOutlineWbSunny/> </li> */}
                                {!userValue.Token &&
                                    <li onClick={()=>{setPop(!pop)}} className={`w-20 py-1    border-2 text-center rounded-full cursor-pointer  hover:bg-[rgb(71,72,74)] transition  delay-100 duration-200 ease-in bg-[rgb(37,38,40)] text-white  `} >Log In</li>}
                                {/* <li>hii</li> */}
                                {userValue.Token &&
                                    <li>  <Link >
                                        <div className='img w-12 h-12 items-center my-auto border-2 border-black rounded-full' onClick={() => { setSubmenu(!submenu) }}><img className='w-full h-full rounded-full ' src='/dp.png'></img>
                                        </div></Link></li>}
                            </ul>
                        </div>

                        {userValue.Token &&
                            <>
                                {/* <div className='profile right-2 flex justify-end items-center w-56 h-full'>
                                    <div className=' flex'>
                                        <button onClick={AllLogout}>Logout All</button>

                                    </div>
                                    <div className='fname  items-center  text-2xl bold font-serif  h-8 w-40 text-black flex justify-end mr-2'><span className='h-8 ' >{userValue.Fname}</span> </div>
                                   

                                </div> */}
                                <div className={`PROFILE-SUBMENU z-50 absolute top-[100%] mt-2 w-48 shadow-xl right-10 ${!submenu ? "hidden" : "block"} p-4 text-base text-black bg-white rounded-md max-[768px]:hidden `}>
                                    <ul className=' flex flex-col gap-5 text-[rgb(114,116,118)]'>
                                        <Link to='/profile' ><li className=' cursor-pointer hover:text-black' onClick={() => { setSubmenu(!submenu) }}>Your Profile</li></Link>
                                        <li className=' cursor-pointer hover:text-black' onClick={() => { setSubmenu(!submenu); Logout() }}>Logout</li>
                                        <li className=' cursor-pointer hover:text-black' onClick={() => { setSubmenu(!submenu); AllLogout() }}>All Device Logout</li>

                                    </ul>
                                </div>
                            </>

                        }
                        {open &&
                            < >
                                {/* responsive close button */}
                                <div className=' absolute'>
                                    {console.log("drop down")}
                                </div>
                                <button className='text-4xl hidden max-[768px]:block' onClick={Clicks}> <IoClose /></button>
                            </>
                        }

                        {!open &&
                            // menu button 

                            <button className='text-4xl hidden max-[768px]:block' onClick={Clicks}> <FiMenu /></button>
                        }

                        {/*navbar  for device under 768px  */}
                        {open &&

                            <div className={` z-50 absolute hidden max-[768px]:block  top-[101%] text-base font-medium left-0 bg-gray-200  text-[rgb(114,116,118)] w-full p-10 transition ease-in-out delay-200 duration-300 `}   >
                                <ul className=' flex gap-4 flex-col  textcenter ' >
                                    <li><Link to='/' className={`${location === "/" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"}     `} onClick={() => { setopen(!open) }}>Home</Link></li>
                                    <li><Link to='/chatbot' className={`${location === "/chatbot" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} `} onClick={() => { setopen(!open) }}>Ai</Link></li>
                                    {/* <li><Link to='/about' className={` ${location === "/about" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} `} onClick={() => { setopen(!open) }}>About</Link></li> */}
                                    <li><Link to='/document' className={` ${location === "/document" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} `} onClick={() => { setopen(!open) }}>Document</Link></li>
                                    <li><Link to='/contact' className={` ${location === "/contact" ? " text-black hover:text-[rgb(114,116,118)]" : "text-[rgb(114,116,118)] hover:text-black"} `} onClick={() => { setopen(!open) }}>Contact</Link></li>
                                    <hr className='  border-gray-300' />
                                    {!userValue.Token &&
                                        <li onClick={() => { setPop(!pop); setopen(!open) }} className={`w-20 py-1 px-2    border-2 text-center rounded-md cursor-pointer  hover:bg-[rgb(71,72,74)] transition  delay-100 duration-200 ease-in bg-[rgb(37,38,40)] text-white  `} >Log In</li>}

                                    {userValue.Token &&
                                    <>
                                        <li className=' flex gap-3'>  <Link >
                                            <div className='img w-12 h-12 items-center my-auto border-2 border-black rounded-full' onClick={() => { setSubmenu(!submenu) }}><img className='w-full h-full rounded-full ' src='/dp.png'></img>
                                            </div></Link>
                                            
                                            <div>
                                                <h1 className=' text-base capitalize'>{userValue.Fname}</h1>
                                                <p className=' text-sm text-[rgb(114,116,118)]'>{userValue.Email}</p>
                                            </div>
                                            </li>
                                            
                                            <Link to='/profile' ><li className='hover:text-black' onClick={()=>{setopen(!open)}}> Your Profile</li></Link>
                                            <li className='hover:text-black' onClick={()=>{setopen(!open); Logout()  }}>Logout</li>
                                            <li className='hover:text-black' onClick={()=>{setopen(!open); AllLogout()  }}>All Device Logout</li>


                                            
                                            </>
                                            }
                                </ul>

                            </div>
                        }

                    </div>

                </div>
            }

        </>
    )
}
