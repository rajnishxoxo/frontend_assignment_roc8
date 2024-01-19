import React from "react";
import SearchBar from "../Component/SearchBar";

const LandingPage = () => {
  return (
    <>
      <div
        className="w-screen h-screen flex  justify-center"
        style={{
          background: `url('https://s3-alpha-sig.figma.com/img/4612/66c8/4c5ae5807660eb18152caeff2019dde6?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvX6cB-JOKiICE8vcy73FJVcapTGqunvcuXCt-Jfnxmrpdcc2ZM6k~kGi~eFmTLe69Tch0Fa-MjplyevZqCy9e0d7~vcbMtnvXITFP7VZ1IqGqHFV09wyviG8h06uxVMOxHmWOrEonpGD3gR~DKIAIfji7L36s54tVNfwrFOsM1Wa4f1OG3LHPxt1WeG7DRJqiXrKpIFdD~ypdjFk85WMaVFYGtiDsgNhY~G5EpCzKL3ogJqPEkWbbUjaGVOO5BuLPBepsxhDs30qvEJNVcO-B8kpTyisJtz5wwMbiDsK5Tjr9SmbZagKtJyPIMy96nOOdNHpF8pl-uzLQJIhsnPZg__') lightgray 50% / cover no-repeat`,
        }}
      >
        <div
          className=" absolute flex justify-between w-screen h-[50px] lg:w-[1217.484px] lg:h-[67.688px] items-center mt-10"
          style={{
            borderRadius: "8.906px",
            background: "rgba(217, 217, 217, 0.12)",
            boxShadow:
              "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
            backdropFilter: "blur(25.034873962402344px)",
          }}
        >
          <div className="mr-5">
            <h1 className=" ml-5 text-white font-euclid-circular-b text-[17.813px] font-semibold leading-[19.95px]">
              Homepage
            </h1>
          </div>
          <div className="w-[300px] flex justify-evenly">
            <button className="text-white font-euclid-circular-b text-[17.813px] font-semibold leading-[19.95px]">
              Login
            </button>
            <button className=" w-32 lg:w-52 text-white font-euclid-circular-b text-[15px] border-[2.672px] lg:text-[17.813px] font-semibold leading-19.95 rounded-[8.906px] lg:border-[2.672px] border-white">
              Create Account
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 left-1/2 lg:top-1/2 lg:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-shadow font-euclid-circular-b text-[30px] lg:text-[60px] font-bold lg:leading-[80px]">
          Discover over 2,000,000 free Stock Images
        </h1>

      <div className=" w-[350px] left-[-80px] lg:w-full lg:left-auto absolute mt-10">
          <SearchBar/>
        </div>
      </div>
    
    </>
  );
};

export default LandingPage;
