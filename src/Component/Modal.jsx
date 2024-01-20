import React from "react";
import { ImCross } from "react-icons/im";

const Modal = (props) => {
  console.log(props);
  const { onClose, data } = props;
  console.log(data);
  const { webformatURL, id } = data;
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
          Preview ID: {id}
        </h1>
        <button onClick={onClose} className="mr-10">
          <ImCross />
        </button>
      </div>
      <div className="w-full flex flex-row">
        {/* third div */}
        <div className="w-2/4 " style={{}}>
          <img className="rounded-md w-full object-" src={webformatURL} />
        </div>
        <div className="border border-red-600 w-2/4 flex flex-col">
          <h1
            style={{
              color: "#3B4043",
              fontFamily: "Euclid Circular B",
              fontSize: "21.325px",
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: "51.447px",
            }}
          >
            Download
          </h1>
          <div>
            <h1
              style={{
                color: "#3B4043",
                fontFamily: "Euclid Circular B",
                fontSize: "21.325px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "51.447px",
              }}
            >
              Information
            </h1>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Modal;
