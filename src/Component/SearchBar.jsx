import React, { useState, useRef, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, clearItems } from "../reduxStore/imageSlice";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");

  const [makeApiCall, setMakeApiCall] = useState(false);

  const dispatch = useDispatch();
  const [lastSearchText, setLastSearchText] = useState(""); 

  const [result, setResult] = useState(false);

  const handleSearchClick = () => {
    setMakeApiCall(!makeApiCall);
  };

  const ref = useRef(null);


  useEffect(() => {
    console.log(lastSearchText)
    const fetchData = async () => {
      try {
        dispatch(clearItems());
        if (searchText.trim() === "") {
          setResult(false);
          return;
        }
        const apiUrl = `https://pixabay.com/api/?key=41897696-f0fa39266ff07f46707935fba&q=${searchText}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        
        dispatch(addItem(data.hits));
        setResult(true);
        setLastSearchText(searchText);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, [makeApiCall]);

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
        <div>
          <FaSearch
            className="ml-4"
            style={{ color: "white", fontSize: "1em" }}
          />
        </div>
        <div className="border-l-2 border-white h-6 ml-4 "></div>
        <input
          ref={ref}
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
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
      {result && (
        <div>
          <h1
            className="absolute top-3/4 mt-10 left-1/3 text-white text-4xl"
            style={{
              color: "#FFF",
              textAlign: "center",
              textShadow: "0px 3.551px 3.551px rgba(0, 0, 0, 0.25)",
              fontFamily: "Euclid Circular B",
              fontSize: "42.614px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "87.359px",
            }}
          >
            Result: {lastSearchText}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
