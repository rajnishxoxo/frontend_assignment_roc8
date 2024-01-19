import React from "react";
import { useSelector } from "react-redux";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);

  // Check if imageData is an array and if it has elements
  if (!Array.isArray(imageData) || imageData.length === 0) {
    return;
  }

  console.log(imageData[0]);

  return (
    <div>
      {imageData &&
        imageData.flat().map((data) => {
          const { id, webformatURL, tags } = data;

          return <div key={id}>
            
          </div>;
        })}
    </div>
  );
};

export default ImageBox;
