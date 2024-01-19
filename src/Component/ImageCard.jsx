import React from "react";

const ImageCard = (props) => {
  const { id, webformatURL, tags } = props.data;
  // tags into array.

  const arrayOfTags = tags.split(",");
  
  return (
    <div className=" w-[300px] h-[150px] m-auto mt-2  lg:w-[350px] lg:h-[240px] lg:m-auto lg:mt-5  ">
      <img className="rounded-md w-full h-3/4 object-cover" src={webformatURL} alt="Image" />
      <div className="flex flex-row  justify-start  mt-2  items-center">
        {arrayOfTags.map((data) => {
          return (
            <div className="text-white  mr-4  px-2 py-1 font-helvetica-neue text-xs font-normal uppercase leading-5 bg-slate-400">
              <p>{data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
