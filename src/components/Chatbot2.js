import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { BsRobot } from "react-icons/bs";
import { FaHome, FaMicrophoneAlt } from "react-icons/fa";
import { TiContacts, TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { IoSend, IoSearch, IoClose } from "react-icons/io5";
import axios from "axios"
import { IoMdArrowDropleft, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Loader from './Loader';
// import micGif from './googleVoice.gif'
import { MdContentCopy, MdOutlineEdit } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import Cookie from "js-cookie";
import { IoMdArrowDropdown } from "react-icons/io";
import { Typewriter } from 'react-simple-typewriter'
import { FaArrowAltCircleDown } from "react-icons/fa";

export default function Chatbot2(props) {
  const { Email, Fname } = props.data;
  // const {Fname, Lname, Email, Phone, City }=props.data;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognitionInstance = new SpeechRecognition();
  const loc = useLocation().pathname
  const [load, setLoad] = useState(false)
  const [input, setInput] = useState("")
  const [speehc, setSpeehc] = useState('');
  const [recognition, setRecognition] = useState(null);
  let u
  const [micon, setMicon] = useState(false)
  const [historyobj, setHistoryobj] = useState('')
  const [his, setHis] = useState(false)
  const [visiable, setVisiable] = useState('show all')
  //input button logic
  const inputQuery = (e) => {
    console.log(input)
    setInput(e.target.value)

  }

  const micClose = () => {
    // SpeechRecognizer.continuous = false
    recognition.stop()
    setMicon(false)

  }
  // fetching history
  // useEffect(async() => {
  //   try {
  //   const res1 = await axios.post("http://localhost:3001/hi", { Email })

  //   // const reshis =  await axios.post("http://localhost:3001/history", Email);
  // setHistoryobj(res1.data) ;
  // setHis(true)
  // console.log(historyobj)
  // // console.log(res1.data)
  // // console.log(historyobj[0].query)
  // // console.log(historyobj[1].query)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // },[]) 



  // end
  //.................Speech--To--Text API's Codes SECTION Start.....................................
  const [Historyobj1, setHistoryobj1] = useState([])
  var v
  useEffect(() => {
    // setVisiable("show all")
    const hisfetch1 = async () => {
      console.log(Email);
      const res1 = await axios.post("http://localhost:3001/hi", { Email })

      // const reshis =  await axios.post("http://localhost:3001/history", Email);
      if (res1.data[0] !== undefined) {

        setHistoryobj(res1.data);
        setHistoryobj1(res1.data)
        setHis(true)
        setVisiable('hide')
        // setVisiable(true)
      } else {
        setVisiable("Let's start")
      }
      console.log(historyobj)
    }
    hisfetch1();


  }, [])


  const hisfetch = async () => {
    console.log(Email);
    const res1 = await axios.post("http://localhost:3001/hi", { Email })

    // const reshis =  await axios.post("http://localhost:3001/history", Email);
    if (res1.data[0] !== undefined) {

      setHistoryobj(res1.data);
      setHis(true)

      // setVisiable(true)
      // setVisiable(true)
    }
    else {
      setVisiable("Let's start")
    }
    console.log(historyobj)
  }
  useEffect(() => {

    const initializeSpeechRecognition = () => {
      
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

    // speech.voice = window.speechSynthesis.getVoices()[15]

    window.speechSynthesis.speak(speech);


    // console.log(window.speechSynthesis.getVoices()[15]);
  }

  //.................Text--To--Speech API's Codes SECTION End.....................................






  //...............copy logic............


  const copy = (ele) => {
    // let C_text = ele.firstElementChild.innerText
    let C_text = ele.innerText

    alert(C_text)
    navigator.clipboard.writeText(C_text)
  }

  //......regenarte logic........

  const regenrate = async (eleU, eleA) => {
    eleA.firstElementChild.innerText = ""
    let ans = await fetchPost(eleU.innerText)

    for (let i = 0; i < ans.length; i++) {
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
    let editModal = <div className=' w-[50%] h-[50%] border bg-white'>
      <textarea>edit</textarea>
      <button>Save</button>
      <button>Cancel</button>
    </div>



    eleU.setAttribute('disabled', 'true')
    let eleU_A = document.createElement('button')
    let edit = <MdOutlineEdit title='edit' className=' ' />
    ReactDOM.render(edit, eleU_A)
    eleU.className += "USER outline-none max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 float-right relative group text-base  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr-1 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU_A.className += " text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg"
    eleU.innerText = input

    eleU.appendChild(eleU_A)
    // CHATS_DivUser.appendChild(eleU)
    CHATS_DivUser.insertBefore(eleU, CHATS_DivUser.lastChild)

    let eleU_1 = document.createElement('div')
    eleU_1.className += ' absolute top-[100%] right-[20%]'
    eleU_1.innerText = "sdkfjjvkdfhvkrhvbkrhbv"
    // eleU.appendChild(eleU_1)
    u = input


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
    let a = <button className="opacity-50 hover:opacity-100 cursor-pointer mx-2 text-base max-sm:text-sm" onClick={() => { textTospeexh(eleA) }}><HiOutlineSpeakerWave /> </button>
    let b = < >

      <div className=' textwhite text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='copy' onClick={() => { copy(eleA) }}><MdContentCopy /></div>
      {/* <div className=' textwhite text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='reload' onClick={() => { regenrate(eleU, eleA) }}><TbReload /></div> */}
    </>
    eleA.className += "AVAZ relative leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words shadow-xl border p-2 rounded-e-2xl rounded-ss-2xl "
    // eleA_2.classList.add("absolute","right-2","bottom-2")
    // eleA.setAttribute='ref'

    eleA_2.classList.add("float-end", "hidden", "absolute", "top-[100%]", "right-0")
    let g = <div className=' flex items-center justify-end gap-2 w-full bordr text-base my-2 max-sm:text-sm'>
      <span className=' textwhite text-base cursor-pointer opacity-50 hover:opacity-100 my2 max-sm:text-sm ' title='copy' onClick={() => { copy(eleA) }}><MdContentCopy /></span>
      <button className="opacity-50 hover:opacity-100 cursor-pointer mx-2 text-base max-sm:text-sm" onClick={() => { textTospeexh(eleA) }} ><HiOutlineSpeakerWave /></button>
      </div>

    ReactDOM.render(g, eleA_2)

    sub_div.classList.add("hidden", "group-hover:block", "absolute", "top-[100%]", "rounded-sm", "bg-white", "flex")
    sub_div.className += "hidden  group-hover:grid grid-flow-col gap-4 w-auto boder   justify-between absolute right-0 flex items-center p-4 m-2  "

    // ReactDOM.render(a, eleA_2)
    // ReactDOM.render(b, sub_div)



    let chat_Div_U = document.createElement('div')
    chat_Div_U.innerText = u
    // ChatHist.current.appendChild(chat_Div_U)


    // let a = `AVAZ AI.......${input}`
    // eleA.innerText += await fetchPost(u)
    let ans = await fetchPost(u)
    // let ans = u
    for (let i = 0; i < ans.length; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      // end.current.scrollIntoView()

      setTimeout(() => {
        end.current.scrollIntoView()
        eleA_1.innerText += element
        if (i === ans.length - 1) {
          eleA_2.classList.remove("hidden")
          //       alert("done")
          //       

          // </div>

        }
      }, i * 20);




    }


    eleA.appendChild(eleA_1)
    eleA.appendChild(eleA_2)

    // eleA.appendChild(sub_div)
    //  CHATS_DivUser.appendChild(eleA)
    CHATS_DivUser.insertBefore(eleA, CHATS_DivUser.lastChild)



    // let chat_Div_A=document.createElement('div')
    chat_Div_U.innerText += ans

    // ChatHist.current.appendChild(chat_Div_A)



  };







  const send1 = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    // window.scrollTo(0, CHATS_DivUser.scrollHeight)
    let eleU = document.createElement("div")
    eleU.className += "USER float-right self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU.innerHTML = e
    CHATS_DivUser.appendChild(eleU)

    u = e

    setInput("")
    let eleA = document.createElement("div")
    eleA.style.lineHeight = '30px'
    eleA.className += "AVAZ float-left self-start m-4 w-[40%] whitespace-break-spaces break-words shadow-xl border-2 p-1 rounded-e-2xl rounded-ss-2xl  leading-3  "
    // let a = `AVAZ AI.......${input}`
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
  // history fetch 


  //post logic
  const fetchPost = async (query) => {
    try {
      setLoad(true)
      const res = await axios.post("http://localhost:3001/POST", { query, Email })
      hisfetch();

      setLoad(false)
      console.log(res)
      return res.data
    } catch (error) {
      setLoad(false)
      console.log(error)
      alert("server Error")
      return "Please Try Agin later"
    }
  }





  const increaseHieght = (e) => {
    e.target.style.height = 'auto'
    let key = e.key

    e.target.style.height = `${e.target.scrollHeight}px`;
    if (key === 'Enter') {
      // e.target.style.overflowY='hidden'

      send()
      e.target.style.height = 'auto'
    }

  }


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


  const end = useRef(null)
  // const ChatHist=useRef(null)
  useEffect(() => {
    end.current.scrollIntoView()
  },)

  const switchRefT1 = useRef(null)
  const switchRefF1 = useRef(null)
  useEffect(() => {


  })
  const [Switch1, setSwitch1] = useState(true);


  var parentElement1 = document.querySelector('.CHATS');

  const Newchat = (event) => {

    const hisDiv = event.currentTarget;

    // Find the elements with the classes 'q' and 'ans' inside the 'his' div
    const questionElement = hisDiv.querySelector('.q');
    const answerElement = hisDiv.querySelector('.ans');

    // Access the inner text of the found elements
    const questionText = questionElement.textContent.trim();
    const answerText = answerElement.textContent.trim();


    // Do something with the inner text, for example, log it to console
    console.log('Question:', questionText);
    console.log('Answer:', answerText);
    // fhdsjhdjsfhkjsdfhjkdfs

    let CHATS_DivUser = document.getElementById("chats");

    let eleU = document.createElement('div')
    let editModal = <div className=' w-[50%] h-[50%] border bg-white'>
      <textarea>edit</textarea>
      <button>Save</button>
      <button>Cancel</button>
    </div>



    eleU.setAttribute('disabled', 'true')
    let eleU_A = document.createElement('button')
    let edit = <MdOutlineEdit title='edit' className=' ' />
    ReactDOM.render(edit, eleU_A)
    eleU.className += "USER outline-none leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base  float-right relative group textxl  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr1 p-2 shadow-xl rounded-s-2xl rounded-se-2xl "
    eleU_A.className += " text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg"
    eleU.innerText = questionText

    CHATS_DivUser.insertBefore(eleU, CHATS_DivUser.lastChild)

    let eleU_1 = document.createElement('div')
    eleU_1.className += ' absolute top-[100%] right-[20%]'
    eleU_1.innerText = "sdkfjjvkdfhvkrhvbkrhbv"
    u = questionText;
    let eleA = document.createElement("div")
    let eleA_1 = document.createElement('span')
    let eleA_2 = document.createElement('div')
    let sub_div = document.createElement('div')
    let a = <button className="opacity-50 hover:opacity-100 cursor-pointer mx-2 text-base max-sm:text-sm" onClick={() => { textTospeexh(eleA) }} ><HiOutlineSpeakerWave /></button>

    let b = < >
      <div className=' text-white flex items-cente justify-center h-auto text-center my-2   ' title=''>
        <span className='opacity-50 hover:opacity-100 cursor-pointer'>
          <IoIosArrowBack disabled />
        </span>
        <h1 className='opacity-50'>0</h1>
        <span className='opacity-50 hover:opacity-100 cursor-pointer '>
          <IoIosArrowForward />
        </span>

      </div>
      <div className=' text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='copy' onClick={() => { copy(eleA) }}><MdContentCopy /></div>
      <div className=' text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 ' title='reload' onClick={() => { regenrate(eleU, eleA) }}><TbReload /></div>
    </>
    eleA.className += "AVAZ relative leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words shadow-xl border p-2 rounded-e-2xl rounded-ss-2xl "
    // eleA_2.classList.add("absolute","right-2","bottom-2")
    // eleA.setAttribute='ref'

    eleA_2.classList.add("float-end", "absolute", "top-[100%]", "right-0")
    let g = <div className=' flex items-center justify-end gap-2 w-full bordr text-base my-2 max-sm:text-sm'>
      <span className=' textwhite text-base cursor-pointer opacity-50 hover:opacity-100 my2 max-sm:text-sm ' title='copy' onClick={() => { copy(eleA) }}><MdContentCopy /></span>
      <HiOutlineSpeakerWave className="opacity-50 hover:opacity-100 cursor-pointer mx-2 text-base max-sm:text-sm     " onClick={() => { textTospeexh(eleA) }} /></div>
    ReactDOM.render(g, eleA_2)
    // sub_div.classList.add("hidden","group-hover:block","absolute","top-[100%]","rounded-sm","bg-white","flex")
    sub_div.className += "hidden  group-hover:grid grid-flow-col gap-4 w-auto boder   justify-between absolute right-0 flex items-center p-4 m-2  "

    let chat_Div_U = document.createElement('div')
    chat_Div_U.innerText = u
    eleA_1.innerText = answerText
    eleA.appendChild(eleA_1)
    eleA.appendChild(eleA_2)
    CHATS_DivUser.insertBefore(eleA, CHATS_DivUser.lastChild)
    chat_Div_U.innerText += answerText
  }
  const allchat = () => {
    if (visiable === 'hide') {
      setVisiable('show all')
    } else if (visiable === "Let's start") {
      return visiable;
    } else {
      setVisiable('hide')
    }
   
  }


  const expand = () => {
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu.current.classList.toggle('hidden')
    rotate1.current.classList.toggle('rotate-180')

  }
  const subMenu = useRef(null)
  const subMenu2 = useRef(null)
  const rotate1 = useRef(null)
  const rotate2 = useRef(null)




  const copyBTn_chatHis = (e) => {
    // console.log(oldChatref.current.innerText);
    let chat = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild.innerText
    alert(chat)
    // console.log(chat);
    // copy(chat)
    navigator.clipboard.writeText(chat)

  }
  const [speak, setSpeak] = useState(false)

  const speakBTn_chatHis = (e) => {
  
    let chat = e.target.parentElement.parentElement.parentElement.parentElement.firstElementChild
    // alert(chat)
    textTospeexh(chat)
    e.target.style.opacity = "100"
   
  }
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

          {load && <div className=' absolute flex top[50%] z-50 w-[100%] h-full justify-center  '>
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
        
          <div className='AI-CHAT bordr bg-white  border-green-500 w-[80%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  '>
            {/* {load && <div className=' absolute flex top[50%] z-50  '>
              <Loader />
            </div>} */}
            <div className=' text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   '>
              <button className=' md:hidden text-xl ' onClick={menu}><FiMenu /></button>
              <p className='col-span-2 text-neutral-400'>
                <div className='SWITCH_BTN   '>
                  <div className=' flex justify-center gap-2 text-lg items-center  '>
                    <div className='border  flex rounded-md overflow-hidden max-sm:text-base  '>
                      <p className=' p-1 px-4 cursor-pointer  bg-black text-white  max-sm:px-1'   ><Link to={'/chatbot'}>CHAT</Link> </p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer max-sm:px-1' ><Link to={'/avaz'}>AVAZ</Link></p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer  max-sm:px-1' ><Link to={'/jarvis'}>Jarvis</Link></p>
                    </div>
                  </div>
                </div>
              </p>
            </div>

            <div className='CHATS scrollsmooth relative scroll-auto justify-centr items-centr  w-full h-full bordr-8 flex flex-col px-[10%] max-sm:px-[2%] pb-[4%]    overflow-auto space-y-8 p-4 ' id='chats'>
              {visiable === 'hide' && Historyobj1.map((chat, index) => (<><div
                disabled="true"
                class="USER outline-none leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 float-right relative group text-base self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr2 p-2 shadow-sm rounded-s-2xl rounded-se-2xl"
              >
                {chat.query}<button
                  class="text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg"
                >
                  <MdOutlineEdit title='edit' className=' ' /></button>
              </div>
                <div
                  class="AVAZ relative leading-relaxed max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 z-0 text-base group float-left items-center gap-2 h-auto bg-white self-start m-4 min-w-[20%] px-4 w-auto max-w-[50%] whitespace-break-spaces break-words  shadow-sm border p-2 rounded-e-2xl rounded-ss-2xl"
                >
                  <span
                  >{chat.answer}</span>
                  <div className=' float-end absolute top-[100%] right-0' >
                    <div className=' flex items-center justify-end gap-2 w-full bordr text-base my-2 max-sm:text-sm'>
                      <button className=' textwhite text-base cursor-pointer opacity-50 hover:opacity-100 my2 max-sm:text-sm ' title='copy' onClick={copyBTn_chatHis}><MdContentCopy /></button>
                      <button className="opacity-50 hover:opacity-100 cursor-pointer mx-2 text-base max-sm:text-sm" onClick={speakBTn_chatHis} ><HiOutlineSpeakerWave /></button>
                    </div>
                  </div>
                </div>
                <div></div> </>))}
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
          <div className={`HISTORY  overflow-yscroll overflow-xhidden flex flex-col  relative bg-white z-0 bordr bordr-blue-500 w-[27%] h-full p-6 border-l border-neutral-300 transition-all delay-100 duration-100 max-[768px]:w-[90%]   max-[768px]:absolute right-0 max-[768px]:${openHist ? ' translate-x-0' : 'translate-x-full '}`}>
            <button
              className=" md:hidden absolute top-[50%] -left-4 z-0 border4 text-black  "
              onClick={history}
            >
              <IoMdArrowDropleft />
            </button>
            <div className=''>
              <div className=' top-0 w-full   p-2'><h1 className='text-3xl text-center justify-center  font-bold'>History</h1></div><hr className=' text-3xl bg-gray-400 text-gray-400 w-[90%] text-center '></hr>
              <div onClick={allchat} className=' text-lg px-4 py-2 overflow-hidden my-4 bg-[rgb(190,193,198)]  text-[#0f1115] CHAT_HISTORY w-full  bordr flex items-center justify-between max-h-20 shadow-lg rounded-xl cursor-pointer'>
                <span className='overflow-hidden textxl max-h-24   '>{visiable}</span>
              </div>
            </div>

            <div className=' overflow-y-scroll overflow-x-hidden px-2 '>
              {his && historyobj.map((chat, index) => (<div onClick={Newchat} className='cursor-pointer px-4 py-2 overflow-y-croll overflow-hidden my-2 bg[rgb(22,23,25)] bg-transparent textwhite CHAT_HISTORY w  bordr flex items-center justify-between max-h-24 shadowlg border rounded-xl'>
                <span className='overflow-hidden textxl max-h-24    '>{chat.query}</span>
                <p hidden className='q'>{chat.query}
                </p>
                <p hidden className='ans'> {chat.answer}</p>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}
