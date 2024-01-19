import React from "react";

const ImageCard = (props) => {
 
 
  const { id, webformatURL, tags } = props.data;
  return (
    <div>
     
      <img src={webformatURL} alt="Image" />
      <p>{tags}</p>
    </div>
  );
};

export default ImageCard;
