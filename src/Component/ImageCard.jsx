import React from "react";

const ImageCard = (props) => {
 
 
  const { id, webformatURL, tags } = props.data;
  return (
    <div>
     
      <img className="w-[364.59px] h-[242.607px]" src={webformatURL} alt="Image" />
      <p>{tags}</p>
    </div>
  );
};

export default ImageCard;
