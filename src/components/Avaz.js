import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FiMenu } from "react-icons/fi";
import { LuUserCircle2 } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { BsRobot } from "react-icons/bs";
import { FaDownload, FaHome, FaMicrophoneAlt } from "react-icons/fa";
import { TiContacts, TiDocumentText } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { IoSend, IoSearch, IoClose } from "react-icons/io5";
import axios from "axios";
// import ReactPlayer from "react-player";
import {
  IoMdArrowDropleft,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import Loader from "./Loader";
// import micGif from "./googleVoice.gif";
import { MdAudiotrack, MdContentCopy, MdDownload, MdOutlineEdit } from "react-icons/md";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbReload } from "react-icons/tb";
import { RiImageEditLine } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Avaz() {
  const loc = useLocation().pathname;
  const slct = "text-white  opacity-100  bg-black ";
  const other = "text-gray-500 border border-gray-300 ";
  const [timg, setTimg] = useState(slct);
  const [taudio, setTaudio] = useState(other);
  const [obdetec, setObdetec] = useState(other);
  const [load, setLoad] = useState(false);
  const [input, setInput] = useState("");
  const [dis, setDis] = useState(true);
  const [imgin, setImgin] = useState("");
  const [speehc, setSpeehc] = useState("");
  const [recognition, setRecognition] = useState(null);
  let u;
  const [imageSrc, setImageSrc] = useState("");
  const [objects, setObjects] = useState([]);
  const [hoveredObject, setHoveredObject] = useState(null);
  const [micon, setMicon] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [mode, setMode] = useState("text2img");
  //input button logic
  const inputQuery = (e) => {
    console.log(input);
    setInput(e.target.value);
  };
  const micClose = () => {
    // SpeechRecognizer.continuous = false
    //   SpeechRecognizer.stop()
    setMicon(false);
  };

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = "image.jpg";
    downloadLink.click();
  };
  //.................Speech--To--Text API's Codes SECTION Start.....................................
  var v;
  useEffect(() => {
    const initializeSpeechRecognition = () => {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = "en-US";
      recognitionInstance.interimResults = true;
      //   recognitionInstance.continuous = true;

      recognitionInstance.onresult = (event) => {
        const last = event.results.length - 1;
        const command = event.results[last][0].transcript;
        setSpeehc(command);
        v = command;
      };

      recognitionInstance.onspeechend = () => {
        console.log(v);

        setTimeout(() => {
          setInput(v);
          // send1(v)
          setMicon(false);
          setSpeehc("");
        }, 2000);
      };
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
    setMicon(true);
    if (recognition) {
      recognition.start();
    }
  };

  //.................Speech API's Codes SECTION End.....................................
  //.................Smenu mode switcher start.....................................
  useEffect(() => {
    if (!dis) {
      const parent = document.getElementById("chats");
      const elementsToRemove = parent.querySelectorAll('.rmc ');
      elementsToRemove.forEach(element => {
        parent.removeChild(element);
      });
    }
  }, [dis]);

  const texttoimg = () => {
    setDis(true);
    setMode("text2img");
    setTimg(slct);
    setObdetec(other);
    setTaudio(other);
  };
  const texttoaudio = () => {

    setDis(true);
    setMode("text2audio");
    setTimg(other);
    setObdetec(other);
    setTaudio(slct);
  };
  const objdetect = () => {
    let CHATS_DivUser = document.getElementById("chats");


    setDis(false);
    setTimg(other);
    setTaudio(other);
    setObdetec(slct);
  }

  //.................Smenu mode switcher end.....................................

  //.................SObkect detecter start.....................................
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      setImageSrc(event.target.result);
      try {
        const data = event.target.result.split(",")[1]; // Get base64 image data
        setLoad(true);
        
        const response = await fetch(
          "https://api-inference.huggingface.co/models/facebook/detr-resnet-50",
          {
            headers: {
              Authorization: "Bearer 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",
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ inputs: data }),
          }
        );
        setLoad(false);

        const result = await response.json();
        setObjects(result);
      } catch (error) {
        console.error("Error detecting objects:", error);
        alert("Something went Wrong Please Try After Later")
      }
    };

    reader.readAsDataURL(file);
  };
  const handleMouseOver = (object) => {
    setHoveredObject(object);
  };

  const handleMouseOut = () => {
    setHoveredObject(null);
  };
  //.................SObkect detecter end.....................................

  //.................Text--To--Speech API's Codes SECTION Start.....................................
  const textTospeexh = (eleA) => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = eleA.innerText;

    speech.voice = window.speechSynthesis.getVoices()[15];

    window.speechSynthesis.speak(speech);

    // console.log(window.speechSynthesis.getVoices()[15]);
  };

  //.................Text--To--Speech API's Codes SECTION End.....................................

  //...............copy logic............

  const copy = (ele) => {
    let C_text = ele.firstElementChild.innerText;
    navigator.clipboard.writeText(C_text);
    alert("copied");
  };

  //......regenarte logic........

  const regenrate = async (eleU, eleA) => {
    eleA.firstElementChild.innerText = "";
    let ans = await fetchPost(eleU.innerText);

    for (let i = 0; i < ans.length; i++) {
      const element = ans[i];
      // window.scrollTo(0, CHATS_DivUser.scrollHeight)
      setTimeout(() => {
        eleA.firstElementChild.innerText += element;
      }, i * 20);
    }
  };

  //.................Backend API's Codes SECTION Start.....................................

  //send function
  const send = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");

    let eleU = document.createElement("div");
    eleU.setAttribute("disabled", "true");
    let eleU_A = document.createElement("button");

    eleU.className +=
      "USER rmc outline-none max-sm:max-w-[80%] max-sm:text-sm max-sm:px-2 float-right relative group text-xl max-[768px]:text-md  self-end m-4 px-4 w-auto max-w-[50%] whitespace-break-spaces break-words font-semibold bg[#3FDD79] bg-black text-white bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl ";
    eleU_A.className +=
      " rm text-white absolute top-[100%] right-0 p-4 group-hover:block hidden opacity-50 hover:opacity-100 text-lg";
    eleU.innerText = input;

    eleU.appendChild(eleU_A);
    // CHATS_DivUser.appendChild(eleU)

    CHATS_DivUser.insertBefore(eleU, CHATS_DivUser.lastChild);

    u = input;

    let u1 = `There are several different types of PCs, each with their own specific purpose and configuration:
    1. Desktop PCs: These are the traditional computers that are typically placed on a desk or table. They consist of a computer case that houses the motherboard, CPU, memory, storage, and other components. Desktop PCs are typically larger in size and offer more customization options, allowing users to upgrade or replace components as needed.
    2. Laptop PCs: Also known as notebooks, these are portable computers that are designed for use on the go. They are lightweight and compact, with all the necessary components integrated into a single unit. Laptops typically have a built-in keyboard, a touchpad, and a display screen. They are powered by batteries and can be easily transported.
    3. All-in-One PCs: These are computers where the monitor and the central processing unit (CPU) are integrated into a single unit. The all-in-one PC eliminates the need for a separate computer tower and allows for a more compact and streamlined design. They are often used in homes or offices where space is limited.
    4. Gaming PCs: These are high-performance computers specifically designed for gaming purposes. They are equipped with powerful processors, dedicated graphics cards, and ample memory and storage capacity. Gaming PCs are built to handle demanding games and provide a smooth gaming experience with high-quality graphics.
    These are just a few examples of the many types of PCs available in the market. The choice of PC depends on the specific requirements and intended usage of the user or organization.`;

    setInput("");
    let eleA = document.createElement("div");
    let eleA_1 = document.createElement("span");
    let eleA_2 = document.createElement("div");
    let sub_div = document.createElement("div");
    let player = document.createElement("ReactPlayer");

    let a = "";
    // let a = <HiOutlineSpeakerWave className="opacity-50 hover:opacity-100 cursor-disable   " onClick={() => { textTospeexh(eleA) }} />
    let b = (
      <>
        {/* <div
          className=" text-white flex items-cente justify-center h-auto text-center my-2   "
          title=""
        >
          <span className="opacity-50 hover:opacity-100 cursor-pointer">
            <IoIosArrowBack disabled />
          </span>
          <h1 className="opacity-50">0</h1>
          <span className="opacity-50 hover:opacity-100 cursor-pointer ">
            <IoIosArrowForward />
          </span>
        </div> */}
        {/* <div
          className=" absolute top-0 text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 "
          title="Download"
          onClick={handleDownload}
        >
          <MdDownload />
        </div> */}
        {/* <div
          className=" text-white text-lg cursor-pointer opacity-50 hover:opacity-100 my-2 "
          title="reload"
          onClick={() => {
            regenrate(eleU, eleA);
          }}
        >
          <TbReload />
        </div> */}
      </>
    );
    eleA.className +=
      "AVAZ rmc relative z-0 alignitem-center group float-left bg-[#111111] self-start m-4  w-[50%] flex justify-center whitespace-break-spaces break-words shadow-xl border-2 border-[#121212] max-[768px]:p-1 p-[8px] max-[768px]:w-[80%]  rounded-[15px] ";
    // eleA_2.classList.add("absolute","right-2","bottom-2")
    // eleA.setAttribute='ref'

    eleA_2.classList.add("float-end", "leading-snug");
    // sub_div.classList.add("hidden","group-hover:block","absolute","top-[100%]","rounded-sm","bg-white","flex")
    sub_div.className +=
      "hidden  group-hover:grid grid-flow-col gap-4 w-auto boder   justify-between absolute right-0 flex items-center p-4 m-2  ";

    ReactDOM.render(a, eleA_2);
    // ReactDOM.render(b, sub_div);
    if (mode === "text2img") {
      let imgs = document.createElement("img");
    ReactDOM.render(b, sub_div);

      imgs.className += " w-full h-full rounded-[15px]";

      imgs.alt += "my image";
      try {
        setLoad(true);
        const response = await axios.post(
          "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
          { inputs: u },
          {
            headers: {
              Authorization: "Bearer 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",
            },
            responseType: "blob", // Specify response type as blob
          }
        );
        setLoad(false);
        const url = URL.createObjectURL(new Blob([response.data]));
        imgs.src += url;
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching image:", error);
        alert("Something went Wrong Please Try After Later")

      }
      eleA.appendChild(imgs);
    } else if (mode === "text2audio") {
      try {
        setLoad(true);
        const response = await axios.post(
          "https://api-inference.huggingface.co/models/facebook/musicgen-small",
          { inputs: u },
          {
            headers: {
              Authorization: "Bearer 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",
            },
            responseType: "arraybuffer",
          }
        );
        setLoad(false);
        const blob = new Blob([response.data], { type: "audio/mp3" });
        var url = URL.createObjectURL(blob);
        eleA.innerHTML = ""; // Clear any previous content
        const audioPlayer = document.createElement("audio");
        audioPlayer.src = url;
        audioPlayer.controls = true;
        eleA.appendChild(audioPlayer);
      } catch (error) {
        console.error("Error generating audio:", error);
        alert("Something went Wrong Please Try After Later")

      }
    } else {
      console.log("jj ");
    }

    // let a = AVAZ AI.......${input}
    // eleA.innerText += await fetchPost(u)
    // let ans = await fetchPost(u)
    let ans = "dhdhh";
    // my code start

    // my code end
    // let ans = u
    // text animation logic
    // for (let i = 0; i < ans.length; i++) {
    //   const element = ans[i];
    //   // window.scrollTo(0, CHATS_DivUser.scrollHeight)
    //   // end.current.scrollIntoView()

    //   setTimeout(() => {
    //     end.current.scrollIntoView()
    //     eleA_1.innerText += element

    //   }, i * 20);
    //   if (i == ans.length - 1) {
    //     console.log("done");
    //   }

    // }

    // eleA.appendChild(eleA_1)
    eleA.appendChild(eleA_2);
    eleA.appendChild(sub_div);

    // hh    // CHATS_DivUser.appendChild(eleA)
    CHATS_DivUser.insertBefore(eleA, CHATS_DivUser.lastChild);
  };

  const send1 = async (e) => {
    // e.preventDefault()
    let CHATS_DivUser = document.getElementById("chats");
    // window.scrollTo(0, CHATS_DivUser.scrollHeight)
    let eleU = document.createElement("div");
    eleU.className +=
      "USER rm float-right self-end m-4 w-[40%] whitespace-break-spaces break-words bg-[#3FDD79] bordr-2 p-2 shadow-xl rounded-s-2xl rounded-se-2xl ";
    eleU.innerHTML = e;
    CHATS_DivUser.appendChild(eleU);
    u = e;

    setInput("");
    let eleA = document.createElement("div");
    eleA.className +=
      "AVAZ rm float-left self-start m-4  w-[40%] whitespace-break-spaces break-words shadow-xl border-2 p-2 rounded-e-2xl max-[768px]:p-3 rounded-ss-2xl ";
    // let a = AVAZ AI.......${input}
    // eleA.innerText += await fetchPost(u)
    eleA.innerText += "hh";
    // eleA.innerHTML += u
    CHATS_DivUser.appendChild(eleA);
  };

  // useEffect(()=>{
  //   // fetch()
  //   spRec.start()
  // },[])

  //get logic
  const fetchGet = async () => {
    try {
      setLoad(true);
      const res = await axios.get("http://localhost:3001/GET");
      setLoad(false);
      console.log(res);
      return res.data;
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };

  //post logic
  const fetchPost = async (query) => {
    try {
      setLoad(true);
      const res = await axios.post("http://localhost:3001/POST", { query });
      setLoad(false);
      console.log(res);
      return res.data;
    } catch (error) {
      setLoad(false);
      console.log(error);
      alert("server Error");
      return "server Error";
    }
  };

  const increaseHieght = (e) => {
    e.target.style.height = "auto";
    let key = e.key;

    e.target.style.height = `${e.target.scrollHeight}+px`;
    if (key === "Enter") {
      // e.target.style.overflowY='hidden'

      send();
      e.target.style.height = "auto";
    }
  };

  //.................Backend API's Codes SECTION End.....................................

  const [open, setopen] = useState(false);
  const [openHist, setopenHist] = useState(false);

  const menu = () => {
    console.log(open);
    setopen(!open);
    setopenHist(false);
  };

  const history = () => {
    setopenHist(!openHist);
    setopen(false);
  };

  const end = useRef(null);
  useEffect(() => {
    end.current.scrollIntoView();
  });




  const expand=()=>{
    // alert("done")
    // subMenu.current.classList.toggle('absolute')
    subMenu.current.classList.toggle('hidden')
    rotate1.current.classList.toggle('rotate-180')
  
  }
  
  
  
  
  const subMenu=useRef(null)
  const rotate1=useRef(null)

  return (
    <>
      {
        <div className=" bordr-4  border-red-800 flex w-full h-dvh overflow-hidden  bg-[rgb(249,249,249)]  ">
          {micon && (
            <div
              className="    absolute w-full h-full bg-black bg-opacity-40 justify-center items-center flex "
              style={{ zIndex: "99" }}
            >
              <div className=" p-4 rounded-lg w-96 h-96 border-2 bg-white flex flex-col ">
                <button className="w-full flex justify-end" onClick={micClose}>
                  <IoClose />
                </button>
                <div className=" flex flex-col items-center">
                  <p>Listening.... </p>
                  <img src="/googleVoice.gif" className=" w-20" />
                </div>
                <div className="bordr w-full p-2 flex justify-center">
                  <p className="bordr w-[70%] ">{speehc}</p>
                </div>
              </div>
            </div>
          )}

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
              <li className=' relative overflow-hidden gap-2  flex flex-col ' onClick={expand}>
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


          <div className=" w-full relative  flex flex-row m-4 max-sm:m-0 max-sm:rounded-none rounded-xl borer shadow-lg overflow-hidden">
            <div className="AI-CHAT bordr bg-white border-green-500 w-[80%] flex flex-col items-center h-full relative  m-auto overflow-auto max-[768px]:w-full  ">
              {/* {load && (
                <div className=" absolute flex top-[50%] ">
                  <Loader />
                </div>
              )} */}
              <div className=" text-center font-bold shadow-sm p-2 w-full  grid-cols-4 max-[768px]:grid grid-flow-row-dense   ">
                <button
                  className=" md:hidden  text-xl "
                  onClick={menu}
                >
                  <FiMenu />
                </button>
                <p className="col-span-2 text-neutral-400">
                  <div className="SWITCH_BTN   ">
                    <div className=" flex justify-center gap-2 text-lg items-center  ">
                      <div className="border  flex rounded-md overflow-hidden max-sm:text-base  ">
                      <p className=' p-1 px-4 cursor-pointer    max-sm:px-1'   ><Link to={'/chatbot'}>CHAT</Link> </p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer bg-black text-white max-sm:px-1' ><Link to={'/avaz'}>AVAZ</Link></p>
                      <p className=' border h-auto '></p>
                      <p className='p-1 px-4 cursor-pointer  max-sm:px-1' ><Link to={'/jarvis'}>Jarvis</Link></p>
                      </div>
                    </div>
                  </div>
                </p>
              </div>
              {/*relative* space-y-8  scroll-auto  p-4 flex flex-col px-[10%] pb-[4%]*/}
              <div
                className={`CHATS parent w-full h-full bordr-8  relative space-y-8  scroll-auto   flex flex-col overflow-auto ${!dis?" p-0 ":"px-[10%] pb-[4%] p-4  "} `}
                id="chats"
              >
                {!dis && <div
                  className=" After  realtive rounded-2xl p-0    "
                  style={{ position: "relative", display: "inline-block" }}
                  id="chats"
                >
                  {imageSrc && (
                    <img className='rounded-2xl border-3 border-yellow-300'
                      src={imageSrc}
                      alt="Uploaded"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  )}
                  {objects.map((object, index) => (
                    <div
                      key={index}
                      className="absolute border-2 border]transparent transition-colors duration-300 hover: border-red-500"
                      style={{
                        left: object.box.xmin,
                        top: object.box.ymin,
                        width: object.box.xmax - object.box.xmin,
                        height: object.box.ymax - object.box.ymin,
                        // pointerEvents: 'none', // Prevent the box from blocking mouse events on the image
                      }}
                      onMouseEnter={() => handleMouseOver(object)}
                      onMouseLeave={handleMouseOut}
                    >
                      {hoveredObject === object && (
                        <div className="absolute top-0 left-0 bg-white text-black p-1">
                          {object.label}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                }

                <div ref={end}></div>
              </div>
              {dis && (
                <div className="INPUT w-full h-36 p-4 border-t border-neutral-300 max-md:h-20 items-center flex  ">
                  <div className="INPUT-BAR max-h-24  border bg-white w-[80%] flex flex-row justify-between  items-center   px-2 space-x-1 rounded-xl  m-auto p-2 shadow-lg shadow-slate-200 max-sm:w-full   ">
                    <button
                      className=" text-xl max-sm:text-base   p-2 rounded-2xl hover:bg-gray-200 "
                      onClick={VoiceInputQuery}
                    >
                      <FaMicrophoneAlt />
                    </button>
                    {/* <input type='text' className=' w-[85%] h-60 text-xl text-neutral-400 outline-none bg-[rgb(22,23,25)]  ' onChange={inputQuery} value={input} placeholder='Ask Query' /> */}
                    <textarea

                      className="w-[85%]    max-h-20  text-lg max-sm:text-base  outline-none bg-white resize-none "
                      rows={1}
                      onChange={inputQuery}
                      value={input}
                      placeholder="Ask Query"
                      onKeyUp={increaseHieght}
                    ></textarea>
                    <button
                      className=" text-xl p-2 rounded-2xl hover:bg-neutral-200 max-sm:text-base cursor-pointer "
                      disabled={input.length == 0}
                      onClick={send}
                    >
                      <IoSend />
                    </button>
                  </div>
                </div>
              )}

            </div>
            <div
              className={`HISTORY relative bg-white  z-0 bordr bordr-blue-500 w-[25%] h-full p-6 border-l border-neutral-300 transition-all delay-100 duration-100 max-[768px]:w-[50%] max-sm:w-[90%]   max-[768px]:absolute right-0 max-[768px]:${openHist ? " translate-x-0" : "translate-x-full "
                }`}
            >
              <button
                className=" md:hidden absolute top-[50%] -left-4  "
                onClick={history}
              >
                <IoMdArrowDropleft />
              </button>
              <div className="DIFFERENT-AI-MODELS-BTNS flex flex-col gap-5 p-4  ">
                <h1 className="  text-xl text-center">ALL MODELS</h1>
                <hr/>
                <button
                  className={` text-black  rounded-xl text-base text-center h-12 ${timg} flex items-center justify-center gap-2 p-2 hover:opacity-80`}
                  onClick={texttoimg}
                >
                  {" "}
                  <RiImageEditLine />
                  Text to Image
                </button>
                <button
                  className={`  rounded-xl text-base text-center h-12  flex items-center justify-center gap-2 p-2 ${taudio} hover:opacity-80`}
                  onClick={texttoaudio}
                >
                  <MdAudiotrack />
                  Text To Audio
                </button>
                <button className={`rounded-xl text-base text-center h-12 ${obdetec} flex items-center justify-center gap-2 p-2 hover:opacity-80`} onClick={objdetect}>
                  <IoImageOutline />

                  Object Detect
                </button>

                {!dis && <div className=" absolute bottom-8 ">
                  <div className="relative w-44 ">
                    <label title="Click to upload" htmlFor="button2" className="cursor-pointer w-full py-4 px-3 flex items-center gap-4 before:border-gray-400/60 hover:before:border-gray-300 group dark:before:bg-darker dark:hover:before:border-gray-500 before:bg-gray-100 dark:before:border-gray-600 before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                      <div className="w-max relative">
                        <img className="w-10" src="https://www.svgrepo.com/show/485545/upload-cicle.svg" alt="file upload icon" width="450" height="450" />
                      </div>
                      <div className="relative">
                        <span className="block text-base font-semibold relative text-blue-900 dark:text-white group-hover:text-blue-500">
                          Upload a file
                        </span>
                        <span className="mt-0.5 block text-sm text-gray-500 dark:text-gray-400">Max 2 MB</span>
                      </div>
                    </label>
                    <input hidden type="file"
                      accept="image/*"
                      onChange={handleFileChange} name="button2" id="button2" />
                  </div>
                </div>
                }
              </div>
              <br />
            </div>
          </div>
        </div>
      }
    </>
  );
}
