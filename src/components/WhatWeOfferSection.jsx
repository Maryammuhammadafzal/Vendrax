import React from "react";
import Badge from "./Badge";
import WhatWeOfferImage from "../assets/images/who-img.webp"

import Icon1 from "../assets/images/who-ic1.webp"
import Icon2 from "../assets/images/who-ic2.webp"
import Icon3 from "../assets/images/who-ic3.webp"
import Icon4 from "../assets/images/who-ic4.webp"
import Icon5 from "../assets/images/who-ic5.webp"
import Icon6 from "../assets/images/who-ic6.webp"
import Button2 from "./Button2";

const offers = [
        {
                icon: Icon1,
                title: "Barcode Scanner"
        },
        {
                icon: Icon2,
                title: "Reward Program "
        },
        {
                icon: Icon3,
                title: "Customer Management"
        },
        {
                icon: Icon4,
                title: "Multiple Payment Methods"
        },
        {
                icon: Icon5,
                title: "Inventory Management"
        },
        {
                icon: Icon6,
                title: "User Accounts"
        },
];

const WhatWeOfferSection = () => {
  return (
    <div className="w-full min-h-screen h-auto mt-10 px-2">
      <div className="flex w-[95%] h-screen max-sm:w-[98%] justify-center mx-auto items-center max-[1200px]:w-[70%] max-[1000px]:w-[75%] max-[800px]:w-[80%] max-md:flex-col max-md:h-auto gap-3 max-[1200px]:h-screen">
        <div className="content flex w-[50%] max-md:w-[70%] max-sm:w-full flex-col gap-3 justify-center items-start ">
          <div className="flex flex-col gap-4  w-auto">
            <Badge text="What We Offer" color="text-red-500" bg="bg-red-100" />
            <h2 className="font-extrabold text-5xl tracking-tight max-[1200px]:text-3xl max-[400px]:text-2xl">
              Get All The Features You Need In Your POS
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-[1200px]:text-sm max-sm:text-xs my-5 max-[400px]:text-[10px]">
            Your business deserves access to convenience; hence, our all-in-one
            POS system is designed to provide you with every feature you need in
            a single platform. Allow your business to make informed decisions
            and optimize performance in order to achieve the desired objective.
          </p>

<div className="grid grid-cols-2 max-[400px]:grid-cols-1 gap-3">
{offers && offers.map((offer , index) => (
        
        <div key={index} className="text-lg max-[400px]:text-[10px] font-bold py-3 px-3 bg-cyan-50 rounded-lg flex  max-[1200px]:text-[10px] max-md:text-[12px] items-center  gap-3 ">
                {console.log(offer.icon)}
                <img src={offer.icon} alt="icon" className="h-14 w-14 max-[1200px]:h-6 max-[1200px]:w-6  max-[400px]:h-6 max-[400px]:w-6  max-md:w-8 max-md:h-8" />
                <p>{offer.title}</p>
        </div>
))}
</div>

<div className="mt-3 p-2 ">
                      <Button2 text="Get Started" textSize="text-lg" font="font-bold" textColor="text-black" arrowBtnBorder="border-white" border="border-black" hoverBg="hover:bg-black" hoverBorderColor="hover:border-black" hovertextColor="hover:text-white"  btnBg="bg-white" arrowBtnBg="bg-orange-600" arrowBtnColor="text-white"/>
                    </div>
        </div>

        <div className="image flex justify-center w-[40%] max-md:w-[70%] max-md:mt-4 max-sm:w-full items-end max-md:p-4 max-[400px]:p-0">
                <img src={WhatWeOfferImage} alt="img" className="h-[500px] max-[1200px]:h-[350px] max-md:w-full max-md:h-[400px] max-[400px]:h-[250px]" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
