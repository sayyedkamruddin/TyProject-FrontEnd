import React from "react";
import { FaCopy } from "react-icons/fa6";

    export default function Objcom(){
  const data = [
    {
      score: 0.9994643330574036,
      label: "sports ball",
      box: {
        xmin: 95,
        ymin: 444,
        xmax: 172,
        ymax: 515,
      },
    },
    {
      score: 0.9249405860900879,
      label: "person",
      box: {
        xmin: 109,
        ymin: 14,
        xmax: 497,
        ymax: 528,
      },
    },
    {
      score: 0.9990100860595703,
      label: "person",
      box: {
        xmin: 0,
        ymin: 47,
        xmax: 160,
        ymax: 373,
      },
    },
    {
      score: 0.9433854818344116,
      label: "person",
      box: {
        xmin: 537,
        ymin: 34,
        xmax: 643,
        ymax: 310,
      },
    },
    {
      score: 0.9989137649536133,
      label: "person",
      box: {
        xmin: 423,
        ymin: 67,
        xmax: 638,
        ymax: 493,
      },
    },
  ];
  function getColorForLabel(label) {
    switch (label) {
      case "sports ball":
        return "yellow";
      case "person":
        return "blue";
      default:
        return "white";
    }
  }
    return(<><div  className="flex max-[768px]:flex-col w-full overflow-hidden justify-between h-96 v max-[768px]:h-auto">
    <div className=" p-3  my-3 max-[768px]:my-2 min-[768px]:w-[59%]  ">
    <h1 className="text-xl font-bold">Response</h1>
    <p className="lead p-2 ">
     The provided response contains an array of objects, each representing a
     detected object in an image. Each object includes a score indicating the
     confidence of the detection, a label specifying the type of object 
     (e.g., "sports ball", "person"), and a box object defining the bounding 
     box coordinates of the detected object in the image.
    For example, the first object in the array indicates a "sports ball" with a
       high confidence score (score: 0.9994643330574036) and provides the bounding
       box coordinates (xmin, ymin, xmax, ymax) to locate the ball in the image.
       When integrating this response into your application, you can iterate over the array of detected objects, extract the label and bounding box coordinates, and use them to draw bounding boxes or apply colors to the detected objects in the image.
    </p>
    </div>
    <div className="min-[768px]:mb-6 min-[768px]:mt-16  h-80 overflow-hidden max-[768px]:m-3 overflow-y-scroll  min-[768px]:w-[38%] mx-4  min-[768px]:mx-3  min-[768px]:h-[87%] rounded-2xl bg-zinc-900 shadow-md  dark:ring-white/10">
      <div className="not-prose ">
        <div className="flex flex-col min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b  border-zinc-700 bg-zinc-800 py-2 px-4 dark:border-zinc-800 dark:bg-transparent">
          <h3 className="mr-auto  pt-1  font-semibold text-white">
            Object detector
          </h3>
          <h4 className="mr-auto  pb-1 text-xs font-semibold text-white/75  ">
            json
          </h4>
        </div>
        <div className="group dark:bg-white/2.5">
          <div className="relative">
            <pre className="overflow-x-auto text-lg p-4 t text-white">
              <code className="language-json">
                <span className="text-yellow-500">&#91;</span>
                <br />
                {data.map((item, index) => (
                  <>
                    <span>
                      <span className="text-white">&#123;</span>
                      <br />
                    </span>
                    <span>
                      <span className="text-white"></span>
                      <span className="text-blue-500">"score"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span className="text-green-500">{item.score}</span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-blue-500">"label"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span
                        className={`text-${getColorForLabel(
                          item.label
                        )}-500`}
                      >
                        {item.label}
                      </span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="  text-orange-500 ">"box"</span>
                      <span className="text-white ">:</span>
                      <br />
                      <span className="text-indigo-500">&#123;</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-red-500">"xmin"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span className="text-green-500">
                        {item.box.xmin}
                      </span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-red-500">"ymin"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span className="text-green-500">
                        {item.box.ymin}
                      </span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-red-500">"xmax"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span className="text-green-500">
                        {item.box.xmax}
                      </span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-red-500">"ymax"</span>
                      <span className="text-white">:</span>
                      <span className="text-white"> </span>
                      <span className="text-green-500">
                        {item.box.ymax}
                      </span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white"> </span>
                      <span className="text-indigo-500">&#125;</span>
                    </span>
                    <br />
                    <span>
                      <span className="text-white">&#125;</span>
                      <span className="text-white">,</span>
                    </span>
                    <br />
                  </>
                ))}
                <span className="text-yellow-500">&#93;</span>
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
     
    </>);
}