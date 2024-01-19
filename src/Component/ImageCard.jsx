import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  const { id, webformatURL, tags } = props.data;
  // tags into array.
  const arrayOfTags = tags.split(",");

  return (
    <div className="w-[300px] h-[150px] m-auto mt-2 lg:w-[350px] lg:h-[240px] lg:m-auto lg:mt-5">
      <img
        className="rounded-md w-full h-3/4 object-cover"
        src={webformatURL}
        alt="Image"
      />
      <div className="flex flex-row  justify-between mt-2 items-center">
        {arrayOfTags.map((data) => (
          <div
            key={data}
            className="text-white w-20  mr-2 px-2 py-1 font-helvetica-neue text-xs font-normal uppercase leading-5 bg-slate-400"
          >
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
