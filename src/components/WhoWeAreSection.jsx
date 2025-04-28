import React from "react";
import Badge from "./Badge";
import Image1 from "../assets/images/need-ic1.webp"
import Image2 from "../assets/images/need-ic2.webp"
import Image3 from "../assets/images/need-ic3.webp"
import Image4 from "../assets/images/need-ic4.webp"
import Image5 from "../assets/images/need-ic5.webp"
import Image6 from "../assets/images/need-ic6.webp"

import Button2 from "./Button2";


const WhoWeAreSection = () => {
  return (
    <div className="w-full min-h-screen h-auto mt-10 px-2">
      <div className="flex w-[95%] h-screen max-sm:w-[98%] justify-center mx-auto items-center max-[1200px]:w-[70%] max-[1000px]:w-[75%] max-[800px]:w-[80%] max-md:flex-col max-md:h-auto gap-3 max-[1200px]:h-screen">
        <div className="content flex w-[50%] max-md:w-[70%] max-sm:w-full flex-col gap-3 justify-center items-start p-2">
          <div className="flex flex-col gap-4  w-auto">
            <Badge />
            <h2 className="font-extrabold text-5xl tracking-tight max-[1200px]:text-3xl max-[400px]:text-2xl">
            Adhering To the Consistency, Excellence, And Innovation
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-[1200px]:text-sm max-sm:text-xs my-5 max-[400px]:text-[10px]">
            Your business deserves access to convenience; hence, our all-in-one
            POS system is designed to provide you with every feature you need in
            a single platform. Allow your business to make informed decisions
            and optimize performance in order to achieve the desired objective.
          </p>


<div className="mt-3 p-2 ">
<Button2 text="Get Started" textColor="white" arrowBtnBorder="white" border="orange-600" hoverBg="teal-300" hoverBorderColor="teal-300" hovertextColor="black" btnBg="orange-600" arrowBtnBg="gray-100" arrowBtnColor="black" textSize="xl" font="bold" />
</div>
        </div>

        {/* <div className="image flex justify-center w-[40%] max-md:w-[70%] max-md:mt-4 max-sm:w-full items-end max-md:p-4 max-[400px]:p-0">
                <img src={WhatWeOfferImage} alt="img" className="h-[500px] max-[1200px]:h-[350px] max-md:w-full max-md:h-[400px] max-[400px]:h-[250px]" />
        </div> */}

<div className="relative min-h-screen h-[50%] flex items-center justify-center ">


<div className="absolute top-47 left-15 w-58 h-32 bg-red-500 rounded-[50%] z-50 translate-x-[-50%] -rotate-45 translate-y-[-50%]"></div>
<div className="absolute bottom-25 -right-5 w-100 h-100 bg-yellow-400 max-[1200px]:w-70 max-[1200px]:h-70 max-[1200px]:bottom  rounded-2xl -z-10"></div>
<div className="absolute bottom-0 right-0 w-60 h-60 -z-10">
  <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,200 C150,100 250,300 400,200" stroke="url(#grad)" fill="transparent" stroke-width="5"/>
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor:"red" , stopOpacity :1}} />
        <stop offset="50%" style={{stopColor:"yellow" , stopOpacity :1}} />
        <stop offset="100%" style={{stopColor:"cyan" , stopOpacity :1}} />
      </linearGradient>
    </defs>
  </svg>
</div>


<div className="bg-teal-500 w-[450px] h-[500px] text-white rounded-2xl p-8 max-[1200px]:w-[300px] max-[1200px]:h-[350px] space-y-6 shadow-lg relative z-50">
  
  
  <div className="flex items-center space-x-4">
    <div className="text-2xl">
      <img src={Image1} alt="" />
    </div>
    <div className="font-semibold">
      High-Speed, Secure & Multi Store Scalable
    </div>
  </div>

  <div className="flex items-center space-x-4">
    <div className="text-2xl">
    <img src={Image2} alt="" />
    </div>
    <div className="font-semibold">
      Leverage Latest Technology Such As AI, PWA
    </div>
  </div>

 
  <div className="flex items-center space-x-4">
    <div className="text-2xl">
      <img src={Image3} alt="" />
    </div>
    <div className="font-semibold">
      Leading Industry Integration
    </div>
  </div>


  <div className="flex items-center space-x-4">
    <div className="text-2xl">
    <img src={Image4} alt="" />
    </div>
    <div className="font-semibold">
      Real-Time Monitoring and Alerts
    </div>
  </div>


  <div className="flex items-center space-x-4">
    <div className="text-2xl">
    <img src={Image5} alt="" />
    </div>
    <div className="font-semibold">
      Secure Transaction Processing
    </div>
  </div>

 
  <div className="flex items-center space-x-4">
    <div className="text-2xl">
    <img src={Image6} alt="" />
    </div>
    <div className="font-semibold">
      An All-In-One Solution for Instore POS
    </div>
  </div>

</div>

</div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
