import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);
  const flatArray = imageData.flat(Infinity);
  const selectedData = flatArray.slice(0, 6);

  // Check if imageData is an array and if it has elements
  if (!Array.isArray(imageData) || imageData.length === 0) {
    return;
  }

  return (
    <div className="w-[1287px] h-[911px] flex-shrink-0 rounded-[8.878px] bg-white border border-black">
      {selectedData &&
        selectedData.flat().map((data) => {
          const { id, webformatURL, tags } = data;

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
