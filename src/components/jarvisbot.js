import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, N, useLocation, useNavigate } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome,FaMicrophoneAlt } from "react-icons/fa";
import { TiContacts,TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { IoSend,IoSearch,IoClose } from "react-icons/io5";
import axios from "axios"
import { IoMdArrowDropleft,IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import Loader from './Loader';
// import micGif from './googleVoice.gif'
import { MdContentCopy,MdOutlineEdit } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { RiImageEditLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { Navigate } from "react-router-dom"; 
export default function Avaz() {
  const navigate=useNavigate()
  const loc = useLocation().pathname
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")
  const [speehc, setSpeehc] = useState('');
  const [recognition, setRecognition] = useState(null);
  let u
  const [micon, setMicon] = useState(false)
  //input button logic
  const inputQuery = (e) => {
    console.log(input)
    setInput(e.target.value)

  }
  const micClose = () => {
    // SpeechRecognizer.continuous = false
    //   SpeechRecognizer.stop()
    setMicon(false)

  }

  //.................Speech--To--Text API's Codes SECTION Start.....................................
  var v
  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.interimResults = true;
      //   recognitionInstance.continuous = true;

      recognitionInstance.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        setSpeehc(command);
        v = command

      };

      recognitionInstance.onspeechend = () => {
        console.log(v);

        setTimeout(() => {
          setInput(v)
          // send1(v)
          setMicon(false)
          setSpeehc("")
        }, 2000);
      }
      setRecognition(recognitionInstance);
    };

    initializeSpeechRecognition();

    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  const VoiceInputQuery = () => {
    setMicon(true)
    if (recognition) {
      recognition.start();
    }
    
  };



  //.................Speech API's Codes SECTION End.....................................


  //.................Text--To--Speech API's Codes SECTION Start.....................................
  const textTospeexh = (eleA) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = eleA.innerText

    speech.voice = window.speechSynthesis.getVoices()[15]

    window.speechSynthesis.speak(speech);


    // console.log(window.speechSynthesis.getVoices()[15]);
  }

  //.................Text--To--Speech API's Codes SECTION End.....................................






  //...............copy logic............


  const copy = (ele) => {
    let C_text = ele.firstElementChild.innerText
    navigator.clipboard.writeText(C_text)
    alert("copied")
  }

  //......regenarte logic........

  const regenrate = async (eleU, eleA) => {
    eleA.firstElementChild.innerText=""
    let ans = await fetchPost(eleU.innerText)

    for (let i = 0; i < ans; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      setTimeout(() => {
        eleA.firstElementChild.innerText += element
      }, i * 20);
    }
  }

  //.................Backend API's Codes SECTION Start.....................................

  //send function
  const send = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");

    let eleU = document.createElement('div')
    eleU.setAttribute('disabled', 'true')
    let eleU_A = document.createElement('button')
    let edit = <MdOutlineEdit title='edit' className=' ' />
    ReactDOM.render(edit, eleU_A)
    eleU.className += "USER outline-none max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 float-right relative group text-base  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr-1 p-2 shadow-xl rounded-s-2xl rounded-se-2xl  "
    eleU_A.className += " text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg"
    eleU.innerText = input

    eleU.appendChild(eleU_A)
    // CHATS_DivUser.appendChild(eleU)
    CHATS_DivUser.insertBefore(eleU,CHATS_DivUser.lastChild)


    u = input.toLowerCase();


    let u1 = `There are several different types of PCs, each with their own specific purpose and configuration:
    1. Desktop PCs: These are the traditional computers that are typically placed on a desk or table. They consist of a computer case that houses the motherboard, CPU, memory, storage, and other components. Desktop PCs are typically larger in size and offer more customization options, allowing users to upgrade or replace components as needed.
    2. Laptop PCs: Also known as notebooks, these are portable computers that are designed for use on the go. They are lightweight and compact, with all the necessary components integrated into a single unit. Laptops typically have a built-in keyboard, a touchpad, and a display screen. They are powered by batteries and can be easily transported.
    3. All-in-One PCs: These are computers where the monitor and the central processing unit (CPU) are integrated into a single unit. The all-in-one PC eliminates the need for a separate computer tower and allows for a more compact and streamlined design. They are often used in homes or offices where space is limited.
    4. Gaming PCs: These are high-performance computers specifically designed for gaming purposes. They are equipped with powerful processors, dedicated graphics cards, and ample memory and storage capacity. Gaming PCs are built to handle demanding games and provide a smooth gaming experience with high-quality graphics.
    These are just a few examples of the many types of PCs available in the market. The choice of PC depends on the specific requirements and intended usage of the user or organization.`

    setInput("")
    let eleA = document.createElement("div")
    let eleA_1 = document.createElement('span')
    let eleA_2 = document.createElement('div')
    let sub_div = document.createElement('div')
    
    eleA.className += "AVAZ relative leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words shadow-xl border p-2 rounded-e-2xl rounded-ss-2xl  "
    // eleA_2.classList.add("absolute","right-2","bottom-2")
    // eleA.setAttribute='ref'
  
    eleA_2.classList.add("float-end", "leading-snug")
    // sub_div.classList.add("hidden","group-hover:block","absolute","top-[100%]","rounded-sm","bg-white","flex")
    sub_div.className += "hidden  group-hover:grid grid-flow-col gap-4 w-auto boder   justify-between absolute right-0 flex items-center p-4 m-2  "

  
  // xx------------------------**jarvis start**------------------------------------------xx
    let ans ;
  console.log("s"+u)

  if (u.includes("play")) {
    let playStr = u.split("");
    playStr.splice(0, 5);
    let videoName = playStr.join("");
    playStr = playStr.join("").split(" ").join("+");
    readOut(`searching youtube for ${videoName}`);
    ans=`searching youtube for ${videoName}`;
    let a = window.open(`https://www.youtube.com/search?q=${playStr}`);
    // windowsB.push(a)
  }
  // if (u.includes("open instagram")) {
  //   readOut("opening instagram sir");
  //   let a =window.open("https://www.instagram.com");
  //   // windowsB.push(a)
  // }

if (u.includes("open calendar")) {
  console.log(u)
      readOut("opening calendar");
      ans="opening calendar"
      let a = window.open("https://calendar.google.com/");
      // windowsB.push(a)
    }
    // if (u.includes("open instagram")) {
    //   readOut("opening instagram sir");
    //   ans="opening instagram sir"
    //         let a =window.open("https://www.instagram.com");
    //   // windowsB.push(a)
    // }
    if (u.includes("write tweet on ")) {
      // readOut("opening twitter sir");
       ans = await fetchPost(u)
      const urlEnStr = await encodeURIComponent(ans);
      let a = window.open(`https://twitter.com/intent/post?text=${urlEnStr}`);
      // let a = window.open(`https://twitter.com/`);
      // windowsB.push(a)
    }
    if (u.includes("open youtube")) {
      readOut("opening youtube sir");
      ans="opening youtube sir"
      let a = window.open("https://www.youtube.com/");
      // windowsB.push(a)
    }
    if (u.includes("open github")) {
      readOut("opening github");
      ans="opening github"

      let a = window.open("https://github.com/");
      // windowsB.push(a)
    }
    
    if (u.includes("open google")) {
      readOut("opening google");
      ans = "opening google";

      let a = window.open("https://www.google.com/");
    } else if (u.includes("open youtube")) {
      readOut("opening youtube");
      ans = "opening youtube";

      let a = window.open("https://www.youtube.com/");
    } else if (u.includes("open facebook")) {
      readOut("opening facebook");
      ans = "opening facebook";

      let a = window.open("https://www.facebook.com/");
    } else if (u.includes("open twitter")) {
      readOut("opening twitter");
      ans = "opening twitter";
      
      let a = window.open("https://twitter.com/");
    }
    if (u.includes("what time is it")) {
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let time = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
    
      readOut("The current time is " + time);
      ans = "The current time is " + time;
    }
    
    if (u.includes("open amazon")) {
      readOut("opening amazon");
      ans = "opening amazon";
    
      let a = window.open("https://www.amazon.com/");
    }
    
    if (u.includes("open reddit")) {
      readOut("opening reddit");
      ans = "opening reddit";
    
      let a = window.open("https://www.reddit.com/");
    }
    
    if (u.includes("show me the news")) {
      readOut("opening news website");
      ans = "opening news website";
    
      let a = window.open("https://www.bbc.com/news");
    }
    
    
    if (u.includes("search for")) {
      let inputg = u.split("");
      
      inputg.splice(0, 11);
      inputg.pop();
      ans=`searching for ${inputg.join("").split(" ").join(" ")}`
      readOut(ans);
      inputg = inputg.join("").split(" ").join("+");
      let a = window.open(`https://www.google.com/search?q=${inputg}`);
      readOut("here's your result");
      
      // windowsB.push(a)
    }

  console.log("s"+u)

  if (u.includes("play")) {
    let playStr = u.split("");
    playStr.splice(0, 5);
    let videoName = playStr.join("");
    playStr = playStr.join("").split(" ").join("+");
    readOut(`searching youtube for ${videoName}`);
    ans=`searching youtube for ${videoName}`;
    let a = window.open(`https://www.youtube.com/search?q=${playStr}`);
    // windowsB.push(a)
  }
  if (u.includes("open instagram")) {
    readOut("opening instagram sir");
    let a =window.open("https://www.instagram.com");
    // windowsB.push(a)
  }

if (u.includes("open calendar")) {
  console.log(u)
      readOut("opening calendar");
      ans="opening calendar"
      let a = window.open("https://calendar.google.com/");
      // windowsB.push(a)
    }
    // if (u.includes("open instagram")) {
    //   readOut("opening instagram sir");
    //   ans="opening instagram sir"
    //         let a =window.open("https://www.instagram.com");
    //   // windowsB.push(a)
    // }

// Basic Commands of Jarvis related to AVAZ
if (u.includes("who are you")) {
  readOut("Hello! I am Avaz, an AI voice assistant developed by Shakib and Kamruddin for our BSC IT final year project. I am here to assist you with any queries or tasks you may have. How can I help you today?");
  ans="Hello! I am Avaz, an AI voice assistant developed by Shakib and Kamruddin for our BSC IT final year project. I am here to assist you with any queries or tasks you may have. How can I help you today?"
  // windowsB.push(a)
}

if (u.includes("tell me about kamruddin")) {
  readOut("Kamruddin is one of the creators of Avaz AI voice assistant, developed as a BSC IT final year project by him and Shakib.");
  ans="Kamruddin is one of the creators of Avaz AI voice assistant, developed as a BSC IT final year project by him and Shakib."
  let a =window.open("https://github.com/sayyedkamruddin/");
  // windowsB.push(a)
}


if (u.includes("tell me about shakib")) {
  readOut("Shaakib is one of the developers who worked on creating me, Avaz AI voice assistant, for the BSC IT final year project along with Kamruddin.");
  ans="Shakib is one of the developers who worked on creating me, Avaz AI voice assistant, for the BSC IT final year project along with Kamruddin."
  
  let a =window.open("https://github.com/shakibkumnale");
 
}

if (u.includes("open profile")) {
  readOut("opening you profile ");
  ans="opening..."
  // let a =window.open("http://localhost:3000/profile");
  navigate("/profile")
  
  // windowsB.push(a)
}
// basic Command End

    if (u.includes("write tweet on ")) {
      // readOut("opening twitter sir");
       ans = await fetchPost(u)
      const urlEnStr = await encodeURIComponent(ans);
      let a = window.open(`https://twitter.com/intent/post?text=${urlEnStr}`);
      // let a = window.open(https://twitter.com/);
      // windowsB.push(a)
    }
    if (u.includes("write email")) {
      // readOut("opening twitter sir");
      let con=prompt("enter your email")

      if (con!=null || con!="" ) {
        let playStr = u.split("");
        playStr.splice(0, 12);
        let videoName = playStr.join("");
        playStr = playStr.join("").split(" ").join("+");
        
       ans = await fetchPost(u)
      const urlEnStr = await encodeURIComponent(ans);
      
      let a = window.open(`https://mail.google.com/mail/u/0/?to=${con}&su=${playStr}&body=${urlEnStr}&tf=cm`);
     
    }
  }
    if (u.includes("open youtube")) {
      readOut("opening youtube sir");
      ans="opening youtube sir"
      let a = window.open("https://www.youtube.com/");
      // windowsB.push(a)
    }
    if (u.includes("open github")) {
      readOut("opening github");
      ans="opening github"

      let a = window.open("https://github.com/");
      // windowsB.push(a)
    }
    

    if (u.includes("search for")) {
      let inputg = u.split("");
      
      inputg.splice(0, 11);
      inputg.pop();
      ans=`searching for ${inputg.join("").split(" ").join(" ")}`
      readOut(ans);
      inputg = inputg.join("").split(" ").join("+");
      let a = window.open(`https://www.google.com/search?q=${inputg}`);
      readOut("here's your result");

      // windowsB.push(a)
    }
    
    if (!ans) {
      ans='Sorry for the inconvenience, could you please try saying that again?'
      readOut("Sorry for the inconvenience, could you please try saying that again?");
       }



    // xx------------------------**jarvis start**------------------------------------------xx

    // let a = AVAZ AI.......${input}
    // eleA.innerText += await fetchPost(u)

    // let ans = u
    for (let i = 0; i < ans.length; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      // end.current.scrollIntoView()

      setTimeout(() => {
        end.current.scrollIntoView()
        eleA_1.innerText += element
        
      }, i * 20);
      if (i == ans.length - 1) {
        console.log("done");
      }
      
    }

    eleA.appendChild(eleA_1)
    eleA.appendChild(eleA_2)
    eleA.appendChild(sub_div)

// hh    // CHATS_DivUser.appendChild(eleA)
    CHATS_DivUser.insertBefore(eleA,CHATS_DivUser.lastChild)



  };







  const send1 = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    // window.scrollTo(0, CHATS_DivUser.scrollHeight)
    let eleU = document.createElement("div")
    eleU.className += "USER outline-none max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 float-right relative group text-base  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr-1 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU.innerHTML = e
    CHATS_DivUser.appendChild(eleU)
    u = e.toLowerCase();

    setInput("")
    let eleA = document.createElement("div")
    eleA.className += "AVAZ relative leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words shadow-xl border p-2 rounded-e-2xl rounded-ss-2xl "
    // let a = AVAZ AI.......${input}
    eleA.innerText += await fetchPost(u)
    // eleA.innerHTML += u
    CHATS_DivUser.appendChild(eleA)
  };


  // useEffect(()=>{
  //   // fetch()
  //   spRec.start()
  // },[])


  //get logic
  const fetchGet = async () => {
    try {
      setLoad(true)
      const res = await axios.get("http://localhost:3001/GET")
      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
    }
  }

  //post logic
  const fetchPost = async (query) => {
    try {
      setLoad(true)
      // const res = await axios.post("http://192.168.1.210:3001/POST", { query })
      const res = await axios.post("http://localhost:3001/POST", { query })

      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
      alert("server Error")
      return "server Error"
    }
  }





  const increaseHieght = (e) => {
    e.target.style.height = 'auto'
    let key = e.key

    e.target.style.height =`${e.target.scrollHeight}px`;
    if (key === 'Enter') {
      // e.target.style.overflowY='hidden'

      send()
      e.target.style.height = 'auto'
    }

  }


  //.................Bead SECTION start.....................................
  
  function readOut(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
  console.log("Speaking out");
  // createMsg("jmsg", message);
}
  
  //.................Bead SECTION End.....................................
  //.................Backend API's Codes SECTION End.....................................

 
  const [open, setopen] = useState(false)
  const [openHist, setopenHist] = useState(false)


  const menu = () => {
    console.log(open);
    setopen(!open)
    setopenHist(false)
  }

  const history = () => {
    setopenHist(!openHist)
    setopen(false)
  }


const end=useRef(null)
useEffect(()=>{
  end.current.scrollIntoView()
},)




  

  return (
    <>
      {<div className=' bordr-4  border-red-800 flex w-full h-dvh overflow-hidden  bg-[rgb(249,249,249)]  '>
        {micon &&
          <div className='    absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex ' style={{ zIndex: "99" }}>
            <div className=' p-4 rounded-lg w-96 h-96 border-2 bg-white flex flex-col '>
              <button className='w-full flex justify-end' onClick={micClose}><IoClose /></button>
              <div className=' flex flex-col items-center'>
                <p>Listening.... </p>
                <img src="/googleVoice.gif" className=' w-20' />
              </div>
              <div className='bordr w-full p-2 flex justify-center'>
                <p className='bordr w-[70%] '>{speehc}</p>
              </div>
            </div>
          </div>}

          {load && <div className=' absolute flex top[50%] z-50 w-[100%] h-full justify-center cursor-wait  '>
              <Loader />
            </div>}


        <div className={`SIDE-NAV bordr relative z-49 bg-[rgb(249,249,249)]   transition-all delay-100 duration-100   bordr-black w-[18%] h-full flex flex-col items-center p-4 space-y-8 bg-opacity-80 max-[768px]:bg-opacity-100 bg-emerald00 shadw-2xl  max-[768px]:absolute
             max-[768px]:${open ? 'translate-x-[0px]' : '-translate-x-[800px]'} max-[768px]:w-full max-[768px]:z-50 max-[768px]:p-0`}>
          <button className=' absolute right-0 p-2  bordr md:hidden ' onClick={menu}><IoClose /></button>
          <div className=' w-5/6 grid grid-flow-col items-center font-bold justify-center'>
            {/* <Link to='/'>
              <LuUserCircle2 className='w-full h-full ' />
            </Link> */}
            <p className=' text-4xl'>AvAz</p>
          </div>
          <div className='SIDE_MENU w-6/6 m-auto  '>
            <ul className=' w-full p-2 text-lg font-medium font-semibld space-y-4 text-whit   max-lg:text-sm max-[768px]:text-md '>
              <li><Link to='/' className={` text-[rgb(114,116,118)] hover:text-black flex text-center items-center gap-2 `}><FaHome /> Home</Link></li>
              <li className=' relative overflow-hidden gap-2  flex flex-col '>

                <div className=' flex items-center justify-between hover:text-[rgb(26,27,28)] cursor-pointer'>
                  <Link to='/chatbot' className={`  text-${loc === "/chatbot" ? "black" : ""} hover:text-${loc === "/chatbot" ? "hover:text-red-500" : "hover:text-[rgb(114,116,118)]"} flex text-center items-center gap-2 `}>
                    <BsRobot />
                    <p>AI</p>
                  </Link>
                </div>
               
              </li>
              {/* <li><Link to='/about' className={` text-[rgb(114,116,118)] hover:text-black flex text-center items-center gap-2 `}><FcAbout /> About</Link></li> */}
              <li><Link to='/document' className={` text-[rgb(114,116,118)] hover:text-black flex text-center items-center gap-2 `}><TiDocumentText /> Document </Link></li>
              <li><Link to='/contact' className={` text-[rgb(114,116,118)] hover:text-black flex text-center items-center gap-2 `}> <TiContacts /> Contact</Link></li>
            </ul>
          </div>
        </div>


        <div className=' w-full relative  flex flex-row m-4 max-sm:m-0 max-sm:rounded-none rounded-xl shadow-lg borer overflow-hidden'>
          <div className='AI-CHAT bordr bg-white  border-green-500 w-[100%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  '>
            {/* {load && <div className=' absolute flex top-[50%] '>
              <Loader />
            </div>} */}
            <div className=' text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   '>
              <button className=' md:hidden text-xl ' onClick={menu}><FiMenu /></button>
              <p className='col-span-2 text-neutral-400'>
                <div className='SWITCH_BTN   '>
                  <div className=' flex justify-center gap-2 text-lg items-center   '>
                    <div className='border  flex rounded-md overflow-hidden max-sm:text-sm  '>
                      <p className=' p-1 px-4 cursor-pointer    max-sm:px-1'   ><Link to={'/chatbot'}>CHAT</Link> </p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer max-sm:px-1' ><Link to={'/avaz'}>AVAZ</Link></p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer bg-black text-white max-sm:px-1' ><Link to={'/jarvis'}>Jarvis</Link></p>
                    </div>
                  </div>
                </div>
              </p>
            </div>

            <div  className='CHATS scrollsmooth relative scroll-auto justify-centr items-centr  w-full h-full bordr-8 flex flex-col px-[10%] max-sm:px-[2%] pb-[4%]    overflow-auto space-y-8 p-4 ' id='chats'>
              

              <div ref={end}></div>


            </div>
            <div className='INPUT relative w-full h-36 p-4 border-t border-neutral-300 max-md:h-20 items-center flex   '>

              <div className='INPUT-BAR max-h-24 bordr-2  bg-white w-[80%] flex flex-row justify-between  items-center    px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg border shadow-slate-200 max-sm:w-full  '>
                <button className=' text-xl  max-sm:text-base  p-2 rounded-2xl hover:bg-gray-200 ' onClick={VoiceInputQuery}><FaMicrophoneAlt /></button>
                <textarea className='w-[85%] max-h-20  text-lg max-sm:text-base outline-none bg-white resize-none  ' rows={1} onChange={inputQuery} value={input} placeholder='Ask Query' onKeyUp={increaseHieght}>
                </textarea>
                <button className='text-xl max-sm:text-base p-2 rounded-2xl hover:bg-gray-200 cursor-pointer  ' disabled={input.length == 0} onClick={send}><IoSend /></button>

              </div>
            </div>
          </div>

        </div>
      </div>}
    </>
  )
}