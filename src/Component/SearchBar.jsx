import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem } from "../reduxStore/imageSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const ref = useRef("");
  const dispatch = useDispatch();

  const handleSearchClick = () => {
    setSearchText(ref.current.value);
  };

  // we will call the api
  // console.log data for now.
  // create and store data in redux store as of now.

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchText.trim() === "") {
          return;
        }
        const apiUrl = `https://pixabay.com/api/?key=41897696-f0fa39266ff07f46707935fba&q=${searchText}`;
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data.hits);
        dispatch(addItem(data.hits));
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchText]);

  return (
    <div className="">
      <div
        className="flex items-center"
        style={{
          borderRadius: "8.906px",
          background: "rgba(217, 217, 217, 0.12)",
          boxShadow:
            "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
          backdropFilter: "blur(25.034873962402344px)",
        }}
      >
        <div className="ml-2">
          <FaSearch style={{ color: "white", fontSize: "1em" }} />
        </div>
        <div className="border-l-2 border-white h-6 mx-2"></div>
        <input
          type="text"
          ref={ref}
          // onChange={(e)=>{setSearchText(e.target.value)}}
          className="w-4/5 ml-5 text-white border-none"
          style={{
            background: "rgba(217, 217, 217, 0.012)",
            padding: "0.8rem",
          }}
          placeholder="Search"
        />
        <button
          className="w-[70.359px] h-[34.734px] flex-shrink-0 text-white"
          style={{
            borderRadius: "8.906px",
            border: "2.672px solid #FFF",
          }}
          onClick={handleSearchClick}
        >
          Go!
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
