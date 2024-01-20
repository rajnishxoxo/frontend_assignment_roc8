// ImageCard.jsx

import React, { useState } from "react";
import Modal from "./Modal";

const ImageCard = (props) => {
  const {
    id,
    webformatURL,
    tags,
    pageURL,
    comments,
    downloads,
    likes,
    previewHeight,
    previewURL,
    previewWidth,
    user,
    user_id,
    view,
    type,
    webformatHeight,
  } = props.data;


  // tags into array.
  const arrayOfTags = tags.split(",");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[300px] h-[150px] m-auto mt-2 lg:w-[350px] lg:h-[240px] lg:m-auto lg:mt-5 relative">
      <img
        onClick={openModal}
        className="rounded-md w-full h-3/4 object-cover cursor-pointer"
        src={webformatURL}
        alt="Image"
      />

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
       <Modal
  onClose={closeModal}
  data={{
    id,
    webformatURL,
    tags,
    pageURL,
    comments,
    downloads,
    likes,
    previewHeight,
    previewURL,
    previewWidth,
    user,
    user_id,
    view,
    type,
    webformatHeight,
  }}
/>

        </div>
      )}

      <div className="flex flex-row justify-between mt-2 items-center">
        {arrayOfTags.map((data) => (
          <div
            key={data}
            className="text-black font-normal text-center w-28 mr-2 px-2 py-1 font-helvetica-neue text-xs uppercase leading-5 bg-slate-100"
          >
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
