import React from "react";

const imgTem=(props)=> {
  const {imgs ,title,para} = props.temd;
    return (
    <>
      <div className=" p-3">
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="lead p-2">
            {para}
          </p>
        </div>
        <div className=" my-2  overflow-hidden p-2    ">
     <img src={imgs} className="max-[768px]:h-52  rounded-2xl h-full shadow "   ></img></div>
      </div>
    </>
  );
}
export default  imgTem;