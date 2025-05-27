import React from "react";
import OurVendraxImage from "../assets/images/ven-img.webp";
import Button2 from "./Button2";
import Badge from "./Badge";

const OurVendraxSection = () => {
  return (
    <div className="w-full min-h-screen h-auto mt-10 px-2">
      <div className="flex w-[95%] h-screen max-sm:w-[98%] justify-center mx-auto items-center max-[1200px]:w-[70%] max-[1000px]:w-[75%] max-[800px]:w-[80%] max-md:flex-col max-md:h-auto gap-3 max-[1200px]:h-screen">
        <div className="content flex w-[50%] max-md:w-[70%] max-sm:w-full flex-col gap-3 justify-center items-start ">
          <div className="flex flex-col gap-4  w-auto">
            <Badge
              text="Explore Vendrax"
              color="text-red-500"
              bg="bg-red-100"
            />
            <h2 className="font-extrabold text-5xl tracking-tight max-[1200px]:text-3xl max-[400px]:text-2xl">
            Achieve The Desired Objective With Our Custom POS Solution
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-[1200px]:text-sm max-sm:text-xs my-5 max-[400px]:text-[10px]">
            With the increasingly competitive landscape, POS solutions have
            become efficient and effective technology for business in any
            industry. With the custom solutions, your business eliminates the
            risk of bottleneck, ultimately improving the overall efficiency.
          </p>

          <div className="grid grid-cols-2 justify-between mt-2 gap-3 min-[1200px]:mt-6 max-sm:w-full border-t border-gray-300 p-6 max-md:p-1 max-md:pt-3 max-[1200px]:pt-5 ">
            <div className="right border-r border-gray-300 flex flex-col gap-3 items-start max-sm:text-center ">
              <h2 className="font-extrabold text-6xl max-[1200px]:text-4xl text-teal-400 max-sm:text-center w-full">
                25%{" "}
              </h2>
              <p className="text-lg max-[1200px]:text-[12px] max-[1000px]:text-[10px]">
                Reduced errors to improve customer satisfaction
              </p>
            </div>
            <div className="left flex flex-col gap-3 items-start pr-3 max-sm:text-center">
              <h2 className="font-extrabold text-6xl max-[1200px]:text-4xl text-teal-400 max-sm:text-center w-full">
                40%
              </h2>
              <p className="text-lg max-[1200px]:text-[12px] max-[1000px]:text-[10px] ">
                Improved transactions due to the accuracy of inventory and
                financial transactions
              </p>
            </div>
          </div>
        </div>

        <div className="image flex justify-center w-[45%] max-[1200px]:w-[50%] max-md:w-[70%] max-md:mt-4 max-sm:w-full items-end max-md:p-4 max-[400px]:p-0">
          <img
            src={OurVendraxImage}
            alt="img"
            className="h-auto w-auto  max-[1200px]:h-[350px] max-md:w-full max-md:h-auto max-[400px]:h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OurVendraxSection;
