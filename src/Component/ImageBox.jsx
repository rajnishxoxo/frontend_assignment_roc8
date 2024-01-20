import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import { addItem, clearItems } from "../reduxStore/imageSlice";

const ImageBox = () => {
  const imageData = useSelector((state) => state.image.images);
  const flatArray = imageData.flat(Infinity);
  console.log(flatArray);
  const shuffledArray = flatArray.sort(() => Math.random() - 0.5);
  const selectedData = shuffledArray.slice(0, 6);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (data) => {
    setSelectedCategory(data);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(clearItems());
        if (selectedCategory.trim() === "") {
          return;
        }
        const apiUrl = `https://pixabay.com/api/?key=41897696-f0fa39266ff07f46707935fba&q=${selectedCategory}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        dispatch(addItem(data.hits));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [selectedCategory]);

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
              <button
                onClick={() => handleCategoryChange(data)}
                className=" border border-gray-400  px-6 rounded-md py-2 m-2"
              >
                {data}
              </button>
            </div>
          );
        })}
      </div>
      <div className=" w-full  flex flex-col  lg:w-[1287px]  lg:grid lg:grid-cols-3 gap-2   lg:m-auto rounded-[8.878px] bg-white">
        {selectedData &&
          selectedData.flat().map((data) => {
            const {
              id,
              webformatURL,
              tags,
              pageURL,
              comments,
              downloads,
              likes,
              previewHeight,
              previewURL,
              previewWidth,
              user,
              user_id,
              view,
              webformatHeight,
            } = data;
            console.log(
              id,
              webformatURL,
              tags,
              pageURL,
              comments,
              downloads,
              likes,
              previewHeight,
              previewURL,
              previewWidth,
              user,
              user_id,
              view,
              webformatHeight
            );
            return (
              <div key={id}>
                <ImageCard
                  data={{
                    id,
                    webformatURL,
                    tags,
                    pageURL,
                    comments,
                    downloads,
                    likes,
                    previewHeight,
                    previewURL,
                    previewWidth,
                    user,
                    user_id,
                    view,
                    webformatHeight,
                  }}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ImageBox;
