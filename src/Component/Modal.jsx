import React from "react";
import { ImCross } from "react-icons/im";

const Modal = () => {
  return (
    <div
      className="w-[1000px] h-[550px] border border-black"
      style={{
        borderRadius: "8.886px",
        background: "#FFF",
        boxShadow: "0px 3.554px 3.554px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        className="w-full m-auto h-20 items-center border border-green-600 flex flex-row justify-between"
        style={{
          borderRadius: "8.886px 8.886px 0px 0px",
          background: "#F5F5F5",
        }}
      >
        <h1
          className="ml-10"
          style={{
            color: "#3B4043",
            fontFamily: "Euclid Circular B",
            fontSize: "21.325px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "51.447px",
          }}
        >
          Preview ID :
        </h1>
        <button className="mr-10">
          <ImCross />
        </button>
      </div>
      <div className="w-full flex flex-row">
        {/* third div */}
        <div className="w-2/4 " style={{  }}>
          <img className="rounded-md" src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        </div>
        <div>
          <h1>download</h1>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Modal;
