import React from "react";
import { Link } from "react-router-dom";

const ImageCard = (props) => {
  const { id, webformatURL, tags ,pageURL } = props.data;
  console.log(pageURL)
  // tags into array.
  const arrayOfTags = tags.split(",");

  return (
    <div className="w-[300px] h-[150px] m-auto mt-2 lg:w-[350px] lg:h-[240px] lg:m-auto lg:mt-5">
      <Link to={pageURL}>
        <img
          className="rounded-md w-full h-3/4 object-cover"
          src={webformatURL}
          alt="Image"
        />
      </Link>
      <div className="flex flex-row  justify-between mt-2 items-center">
        {arrayOfTags.map((data) => (
          <div
            key={data}
            className="text-black font-normal  text-center w-28  mr-2 px-2 py-1 font-helvetica-neue text-xs  uppercase leading-5 bg-slate-100"
          >
            <p>{data}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
