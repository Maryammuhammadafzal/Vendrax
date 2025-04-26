import React from "react";
import StateImage from "../assets/images/stat-img.webp"
const UserSection = () => {
  return (
    <div className="w-full max-md:h-auto h-[450px]  max-[1200px]:h-[300px]">
      <div className="w-full gap-3 p-4 max-md:h-auto min-md:relative h-[450px] bg-teal-100 max-[1200px]:h-[300px] flex max-md:flex-col justify-center items-center">
        <div className="w-1/2 max-sm:w-full  max-[1200px]:w-[35%] flex items-center justify-center  ">
        <div className="image min-md:absolute  min-md:-bottom-8  max-[1200px]:bottom-3 max-[1000px]:bottom-10 flex justify-center items-center px-4 ">
        <img src={StateImage} alt="img" className="h-98 max-[1200px]:h-50 max-[1000px]:h-35 max-sm:h-50" /></div>
        </div>

        <div className="content flex flex-col max-sm:w-full w-1/2 max-[1200px]:w-[35%] max-[1000px]:w-[45%] max-md:w-[50%] justify-center  max-[1000px]:pr-0 items-start gap-3 pr-4">
          <div className="max-sm:w-full max-sm:mt-3">
            <h2 className="font-extrabold text-6xl tracking-tight max-[1200px]:text-3xl max-[1000px]:text-center">More Than 200K</h2>
            <h2 className="font-extrabold text-4xl max-[1200px]:text-2xl tracking-wide mt-2 max-[1000px]:text-center">
              Entrepreneurs Use Vendrax
            </h2>
          </div>
          <div>
           <div className="grid grid-cols-2 mt-2 gap-3 min-[1200px]:mt-6 max-sm:w-full">
           <div className="right  flex flex-col gap-3 items-start max-sm:text-center">
              <h2 className="font-extrabold text-6xl max-[1200px]:text-4xl text-orange-600 max-sm:text-center w-full">
                100%{" "}
              </h2>
              <p className="text-lg max-[1200px]:text-sm max-md:text-xs">Success rate in installing top-tier point-of-sale machines</p>
            </div>
            <div className="left flex flex-col gap-3 items-start pr-3 max-sm:text-center">
              <h2 className="font-extrabold text-6xl max-[1200px]:text-4xl text-orange-600 max-sm:text-center w-full">
                100k+{" "}
              </h2>
              <p className="text-lg max-[1200px]:text-sm max-md:text-xs">Businesses equipped with high-tech payment solutions</p>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
