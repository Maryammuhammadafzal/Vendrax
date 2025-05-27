import React from "react";
import Badge from "./Badge";
import Button2 from "./Button2";
import device from "../assets/images/cta2-device.png"

const OurCTA2Section = () => {
  return (
    <section className="our-cta2 h-[600px] max-[1200px]:h-[450px] max-[1000px]:h-[350px] max-md:h-auto overflow-y-hidden relative flex justify-center items-center z-10">
      <div className="container relative  max-[1200px]:w-[75%] max-md:w-full max-md:flex max-md:flex-col max-md:items-center  w-full py-4 px-0">
        <div className="row flex items-center justify-center w-full ">
          <div className="w-[80%] flex-col flex gap-3 items-center justify-center ">
            <h2 className="text-4xl max-[1200px]:text-2xl text-center max-[1000px]:text-xl max-[800px]:text-xl  text-white font-extrabold  ">
              Partner with Vendrax:
            </h2>
            <h2 className="text-6xl max-[1200px]:text-4xl text-center max-[1000px]:text-4xl max-[800px]:text-3xl tracking-wide text-white font-extrabold  max-[1200px]:mb-0">
              Earn Rewards and Revenue
            </h2>
            <p className="text-white text-center text-lg max-[1200px]:text-sm max-sm:text-xs my-5 max-[400px]:text-[10px]">
              Join our partnership programs and start earning today! Whether you
              refer clients, become an authorized agent, or partner as an ISO
              reseller, Vendrax offers lucrative opportunities for you to earn
              incentives and revenue shares. Explore our flexible partnership
              options tailored to maximize your earnings and grow your business
              with us.
            </p>
            <div className="mt-3 p-2 ">
              <Button2
                text="Submit Referral"
                textColor="text-white"
                arrowBtnBorder="border-[#072c32]"
                border="border-[#072c32]"
                hoverBg="hover:bg-white"
                hoverBorderColor="hover:border-white"
                hovertextColor="hover:text-black"
                btnBg="bg-[#072c32]"
                arrowBtnBg="bg-white"
                arrowBtnColor="text-black"
                textSize="text-xl"
                font="font-bold"
              />
            </div>
          </div>
        </div>
        <img
          className="ser-bg1 absolute -bottom-35  -left-10 h-60 max-[1200px]:h-35 max-[1200px]:-bottom-20 max-[1200px]:-left-15 max-[1000px]:hidden"
          src={device}
          alt=""
        />
      </div>
    </section>
  );
};

export default OurCTA2Section;
