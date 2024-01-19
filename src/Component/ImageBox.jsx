import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);

  // Check if imageData is an array and if it has elements
  if (!Array.isArray(imageData) || imageData.length === 0) {
    return;
  }

  return (
    <div>
      {imageData &&
        imageData.flat().map((data) => {
          const { id, webformatURL, tags } = data;
          console.log(id, webformatURL, tags);
          return (
            <div key={id}>
              <ImageCard data={{ id, webformatURL, tags }} />
            </div>
          );
        })}
    </div>
  );
};

export default ImageBox;
