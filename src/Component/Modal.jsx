import React from "react";
import { ImCross } from "react-icons/im";

const Modal = (props) => {
  const { onClose, data } = props;

  const {
    webformatURL,
    id,
    user,
    user_id,
    type,
    view,
    downloads,
    tags,
    likes,
  } = data;

  const newTag = tags.split(",");
  console.log(newTag);

  return (
    <div
      className="w-[1000px] h-[550px] "
      style={{
        borderRadius: "8.886px",
        background: "#FFF",
        boxShadow: "0px 3.554px 3.554px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div
        className="w-full m-auto h-20 items-center  flex flex-row justify-between"
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
        <div className="w-2/4 ml-10 " style={{}}>
          <img className="rounded-md w-full object-" src={webformatURL} />
        </div>
        <div className=" w-2/5  mx-auto flex flex-col">
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
            <div className="flex flex-col">
              <div className="flex flex-row justify-between ">
                <p>User</p>
                <p>User ID</p>
                <p>Type</p>
              </div>
              <div
                className="flex flex-row justify-between items-center"
                style={{
                  color: "#3B4043",
                  fontFamily: "Euclid Circular B",
                  fontSize: "15.994px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "23.102px",
                  textTransform: "capitalize",
                }}
              >
                <p>{user}</p>
                <p>{user_id}</p>
                <p>{type}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between ">
                <p>Views</p>
                <p>Downloads</p>
                <p>Likes</p>
              </div>
              <div
                className="flex flex-row justify-between items-center"
                style={{
                  color: "#3B4043",
                  fontFamily: "Euclid Circular B",
                  fontSize: "15.994px",
                  fontStyle: "normal",
                  fontWeight: 600,
                  lineHeight: "23.102px",
                  textTransform: "capitalize",
                }}
              >
                <p>{view ? view : "10000"}</p>
                <p>{downloads}</p>
                <p>{likes}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex ml-10 flex-row w-2/4 items-center ">
        <div>Tags:</div>
        <div className="flex flex-row justify-between   w-full ">
          {newTag.map((data) => {
            return (
              <div className="  border-gray-400 rounded-md w-40 text-center  m-2">
                <p
                  style={{
                    borderRadius: "1.777px",
                    background: "#F5F5F5",
                  }}
                >
                  {data}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
