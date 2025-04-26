import React from "react";
import Badge from "./Badge";
import WhatWeOfferImage from "../assets/images/who-img.webp"

import Icon1 from "../assets/images/who-ic1.webp"
import Icon2 from "../assets/images/who-ic2.webp"
import Icon3 from "../assets/images/who-ic3.webp"
import Icon4 from "../assets/images/who-ic4.webp"
import Icon5 from "../assets/images/who-ic5.webp"
import Icon6 from "../assets/images/who-ic6.webp"

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
    <div className="w-full h-screen px-2">
      <div className="flex w-[95%] h-screen justify-center mx-auto items-center">
        <div className="content flex w-[50%] flex-col gap-3 justify-center items-start">
          <div className="flex flex-col gap-3 w-auto">
            <Badge />
            <h2 className="font-extrabold text-5xl tracking-tight ">
              Get All The Features You Need In Your POS
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-md:text-md max-sm:text-xs my-5">
            Your business deserves access to convenience; hence, our all-in-one
            POS system is designed to provide you with every feature you need in
            a single platform. Allow your business to make informed decisions
            and optimize performance in order to achieve the desired objective.
          </p>

<div className="grid grid-cols-2 gap-3">
{offers && offers.map((offer , index) => (
        
        <div key={index} className="text-sm py-3 px-3 bg-cyan-100 rounded-lg flex items-center  gap-2 ">
                {console.log(offer.icon)}
                <img src={offer.icon} alt="icon" />
                <p>{offer.title}</p>
        </div>
))}
</div>
        </div>

        <div className="image flex justify-center w-[40%] items-end">
                <img src={WhatWeOfferImage} alt="img" className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default WhatWeOfferSection;
