import React from "react";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);
  const flatArray = imageData.flat(Infinity);
  const shuffledArray = flatArray.sort(() => Math.random() - 0.5);
  const selectedData = shuffledArray.slice(0, 6);
  //HardCoded Data
  const shortCutArray = [
    "Digital",
    "Computer",
    "Codierung",
    "Tech",
    "Netz",
    "Code",
    "Finanzieren",
    "Marketing",
  ];

  if (!Array.isArray(imageData) || imageData.length === 0) {
    return;
  }

  return (
    <div className="m-auto border bg-gray-200 items-center">
      <div
        className=" w-full py-3 m-auto flex flex-row justify-between  lg:w-[1287px]"
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
        {shortCutArray.map((data) => {
          return (
            <div>
              <button className=" border border-gray-400  px-6 rounded-md py-2 m-2">
                {data}
              </button>
            </div>
          );
        })}
      </div>
      <div className=" w-full  flex flex-col  lg:w-[1287px]  lg:grid lg:grid-cols-3 gap-2   lg:m-auto rounded-[8.878px] bg-white">
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
    </div>
  );
};

export default ImageBox;
