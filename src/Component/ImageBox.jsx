import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);
  const flatArray = imageData.flat(Infinity);
  const shuffledArray = flatArray.sort(() => Math.random() - 0.5);
  const selectedData = shuffledArray.slice(0, 6);

  // Check if imageData is an array and if it has elements
  if (!Array.isArray(imageData) || imageData.length === 0) {
    return;
  }

  return (
    <div className=" w-full flex flex-col  lg:w-[1287px] lg:h-[950px] lg:grid grid-cols-3 gap-4 lg:m-auto rounded-[8.878px] bg-white">
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
