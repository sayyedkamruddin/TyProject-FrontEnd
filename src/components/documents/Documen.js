import React from "react";
import { FaCopy } from "react-icons/fa6";
import YouTube from "react-youtube";
import Objcom from "./objcom";
import ImgTem from "./imgtem";
import CodeSnip from "./codesnip";

export default function Document() {
  const s = "http://localhost:3000/1.png";
  const avazd = {
    para: "Meet Avaz, the AI voice assistant tailored for Gen-Z. With Avaz, learning and researching become effortless. Need help with math or programming? Avaz has the answers, in any language you prefer. Break language barriers, gain knowledge, and ace your studies with Avaz, your ultimate learning companion. just type your query in input bar",
    title: "AVAZ",
  imgs:'/sct2.png'
  }
  const imgen = {
    para: "The innovative image generator that brings your ideas to life. Simply input your prompt, and watch as Imaginate creates a unique image tailored to your specifications. Whether you're a blogger, marketer, or creative enthusiast, Imaginate empowers you to visualize your concepts effortlessly. Say goodbye to generic stock photos and hello to personalized visuals with Imaginate. Try it today and unleash your creativity like never before!",
    title: "Imaginate",
  imgs:'/sct3.png'
  }
  const audible = {
    para: "the AI-powered music composer that creates personalized tracks tailored to your needs. Whether you need background music for videos or simply want to relax, GenAudio delivers. Just specify your preferences, and GenAudio generates the perfect melody in seconds. Say goodbye to generic tunes and hello to your unique soundtrack with GenAudio. Try it now and experience the magic of personalized music composition",
    title: "GenAudio",
  imgs:'/sct4.png'
  }
  const objdect= {
    para: "The revolutionary object detection tool. Hover over any object in an image, and instantly discover its name. Whether for curiosity, accessibility, or education, HoverVision makes identifying objects effortless. Powered by advanced machine learning, it continuously improves accuracy. Say goodbye to guessing and hello to instant knowledge with HoverVision. Try it now and see your images in a whole new light!",
    title: "HoverVision",
  imgs:'/sct5.png'
  }
  const imggenobj = {
    para: "This code snippet uses Axios to send a POST request to the Hugging Face model API for image generation. It sends a prompt as input and includes an authorization header with a bearer token for authentication. The response contains the generated image data as a Blob object, which is then converted into a URL using the `URL.createObjectURL` method. Finally, the URL is used to update the `src` attribute of an image element and store the URL for further use.",
    title: "image generator API",
    codeString: `
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        { inputs: prompt },
        {
          headers: {
            Authorization: "Bearer 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",
          },
          responseType: "blob", // Specify response type as blob
        }
      );
      
      const url = URL.createObjectURL(new Blob([response.data]));
      imgs.src += url;
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching image:", error);
    }
  `,
  };

  const audioobje = {
    type: "jxs",
    para: "The following code snippet uses the Axios library to send a POST request to the Hugging Face model API for audio generation. It sends a prompt as input and includes an authorization header with a bearer token for authentication. The response contains the generated audio data as an array buffer, which is then converted into a Blob object with the specified MIME type ('audio/mp3'). Finally, a new audio element is created and appended to a specified HTML element for playback.",
    title: "Audio Genrator API",
    codeString: `
    try {
      const response = await axios.post(
        "https://api-inference.huggingface.co/models/facebook/musicgen-small",
        { inputs: prompt },
        {
          headers: {
            Authorization: process.env.YOUR_API_KEY,
          },
          responseType: "arraybuffer",
        }
      );
      
      const blob = new Blob([response.data], { type: "audio/mp3" });
      var url = URL.createObjectURL(blob);
      eleA.innerHTML = ""; // Clear any previous content
      const audioPlayer = document.createElement("audio");
      audioPlayer.src = url;
      audioPlayer.controls = true;
      eleA.appendChild(audioPlayer);
    } catch (error) {
      console.error("Error generating audio:", error);
    }
  `,
  };

  const objdetect = {
    type: "javascript",
    para: "The following code defines an event handler for detecting objects in an image using the Hugging Face API's facebook/detr-resnet-101 model. It reads the image data using a file reader, sends a request to the API with the image data, and sets the detected objects in the state.",
    title: "Object Detection API",
    codeString: `
    reader.onload = async (event) => {
      console.log(event.target.result);
      setImageSrc(event.target.result);
      try {
        if (event.target.result) {
          const data = event.target.result.split(",")[1]; // Get base64 image data
          const response = await fetch(
            "https://api-inference.huggingface.co/models/facebook/detr-resnet-101",
            {
              headers: { Authorization: process.env.YOUR_API_KEY  },
              method: "POST",
              body: JSON.stringify({ inputs: data }),
            }
          );
          const result = await response.json();
          setObjects(result);
        }
      } catch (error) {
        console.error("Error detecting objects:", error);
      }
    };
  `,
  };

  const assistant = {
    type: "node.js",
    para: "The following code initializes an assistant using the OpenAI API. It first creates an assistant named 'AVAZ' with specific instructions and a chosen model. Then, it sets up an endpoint ('/POST') to handle incoming chat requests. Upon receiving a request, it creates a new thread, adds the user's query as a message to the thread, runs the assistant to generate a response, and sends the response back to the client. This code is designed for implementing a chat interface with the OpenAI assistant on a web server.",
    title: "AVAZ API",
    codeString: `
    const OpenAI = require("openai");
    const apiKey = process.env.OPENAI_API_KEY;
    const openai = new OpenAI(apiKey);
    
    let assistant_id;
    
    // Create an Assistant
    async function createAssistant() {
      const assistantResponse = await openai.beta.assistants.create({
        name: "AVAZ", // adjust name as per requirement
        instructions: "your name is avaz ai voice assistant who assist user you developed by shakib and kammo for BSC IT final year project. there studing in nktt college which located in thane   ",
        // tools: [{ type: "code_interpreter" }], // adjust tools as per requirement
        model: "gpt-3.5-turbo-0125", // or any other GPT-3.5 or GPT-4 model
      });
      assistant_id = assistantResponse.id;
    }
    
    createAssistant();
    
    // Endpoint to handle chat
    app.post("/POST", async (req, res) => {
      try {
        const { query } = req.body; // Extract the user's query from the request body
    
        // Create a Thread
        const threadResponse = await openai.beta.threads.create();
        const threadId = threadResponse.id;
    
        // Add a Message to a Thread
        await openai.beta.threads.messages.create(threadId, {
          role: "user",
          content: query,
        });
    
        // Run the Assistant
        const runResponse = await openai.beta.threads.runs.create(threadId, {
          assistant_id: assistant_id,
        });
    
        // Check the Run status
        let run = await openai.beta.threads.runs.retrieve(threadId, runResponse.id);
        while (run.status !== "completed") {
          await new Promise((resolve) => setTimeout(resolve, 1000));
          run = await openai.beta.threads.runs.retrieve(threadId, runResponse.id);
        }
    
        // Display the Assistant's Response
        const messagesResponse = await openai.beta.threads.messages.list(threadId);
        const assistantResponses = messagesResponse.data.filter(msg => msg.role === 'assistant');
        const response = assistantResponses.map(msg =>
          msg.content
            .filter(contentItem => contentItem.type === 'text')
            .map(textContent => textContent.text.value)
            .join('')).join('');
    
        res.send(response);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
      }
    });
  `,
  };

  return (
    <div className="w-full h-full">
      <div id="tutorial" className="flex-auto  dark:prose-invert mx-auto  ">
        <h1 className="text-[2.5rem] font-bold ml-8 mt-4">Tutorial</h1>
        <div className="w-full flex justify-center item-center">
          <div  className=" rounded-2xl   overflow-hidden m-2 " >
            <YouTube
              className="rounded-2xl min-[768px]:w-full w-[300px] aspect-video "
              videoId="-8efysshvvo"
            ></YouTube>
          </div>
        </div>
        <div id="avaz">
       
          <ImgTem  temd={avazd}></ImgTem>
        </div>
        <div id="imaginate">
       
          <ImgTem  temd={imgen}></ImgTem>
        </div>
        <div id="genaudio">
       
          <ImgTem  temd={audible}></ImgTem>
        </div>
        <div id="hovervision">
       
       <ImgTem  temd={objdect}></ImgTem>
     </div>
        <div id="jarvis">
          <h2 className="text-xl p-1 font-bold">AVAZ jarvis</h2>

          <p className="p-3">
            Introducing your new digital assistant, inspired by Jarvis! This
            sophisticated bot streamlines your online experience with simple
            voice commands. Say "play" to search and play YouTube videos, or
            "Write tweet on" to compose and post tweets. Need information? Just
            say "search for" followed by your query to search Google instantly.
            <br />
            <br />
            Stay organized by saying "open" followed by your desired website,
            like GitHub, Twitter, or Google. Want to know the time? Just ask,
            "what time it is," and your assistant will promptly respond. This
            intuitive bot makes accessing information and performing tasks
            easier and more efficient than ever.
            <div className="p-4 mt-0 pt-0 m-3">
              <ul className=" list-disc">
                <li>just say "play" and what you want to search on YouTube</li>
                <li>
                  just say "Write tweet on " and on which topic you want to
                  T0weet on X
                </li>
                <li>
                  just say "search for" and what you want to search on Google
                </li>
                <li>just say "what time it is" to know the time</li>
                <li>just say "opne " and which website you want to opne</li>
              </ul>
              <h3 className="mr-auto  p-1  font-semibold">For example</h3>
              <ul className="list-disc">
                <li>open GitHub</li>
                <li>open X (Twitter)</li>
                <li>open calendar</li>
                <li>open YouTube</li>
                <li>open Google</li>
                <li>open Amazon</li>
                <li>open Instagram</li>
                <li>open Facebook</li>
              </ul>
            </div>
          </p>
        </div>
        <div className=" p-3">
          <div>
            <h2 id="genimg" className="text-xl font-bold">
              Image Generator
            </h2>
            <p className="lead p-2">
              Groups are where communities live in Protocol — they are a
              collection of contacts you're talking to all at once. On this
              page, we'll dive into the different group endpoints you can use to
              manage groups programmatically. We'll look at how to query,
              create, update, and delete groups.
            </p>
          </div>
          
        </div>
        
        <h1 className="text-[2.5rem] font-bold ml-6 mt-4">How it's Work</h1>

        <div id="avazwork" >
          <CodeSnip codeObj={assistant}></CodeSnip>
        </div>
        <div id="imaginatework">
          <CodeSnip codeObj={imggenobj}></CodeSnip>
          <div className=" m-6  overflow-hidden    rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10">
            <div className="not-prose ">
              <div className="flex flex-col min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b  border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent">
                <h3 className="mr-auto  pt-1  font-semibold text-white">
                Response
                </h3>
                <h4 className="mr-auto  pb-1 text-xs font-semibold text-white/75  ">
                  json
                </h4>
              </div>
              <div className="group dark:bg-white/2.5">
                <div className="relative">
                  <pre className="overflow-x-auto text-lg p-4 t text-white">
                    <code className="language-json">
                      <span>
                        <span className="text-white"></span>
                        <span className="text-red-500">"url"</span>
                        <span className="text-white">: </span>
                        <span className="text-green-500">http//:url.com</span>
                      </span>
                      <br />
                    </code>
                  </pre>
                  <button
                    type="button"
                    className="group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100 bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"
                  >
                    <span
                      aria-hidden="false"
                      className="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
                    >
                      <FaCopy
                        aria-hidden="false"
                        className="pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300"
                      />
                      Copy
                    </span>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300 translate-y-1.5 opacity-0"
                    >
                      Copied!
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="objwork">
          <CodeSnip codeObj={objdetect}></CodeSnip>
          <Objcom></Objcom>
        </div>
        <div id="genaudiowork">
          <CodeSnip codeObj={audioobje}></CodeSnip>
        </div>
        
      
      </div>
    </div>
  );
}
