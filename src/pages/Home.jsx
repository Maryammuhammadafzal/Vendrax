import React from "react";
import Navbar from "../components/Navbar";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slides from "../data/heroSliderData.js";
import Button2 from "../components/Button2.jsx";
import UserSection from "../components/UserSection.jsx";
import WhatWeOfferSection from "../components/WhatWeOfferSection.jsx";
import OurServicesSection from "../components/OurServicesSection.jsx";
import WhoWeAreSection from "../components/WhoWeAreSection.jsx";
import OurVendraxSection from "../components/OurVendraxSection.jsx";
import OurCTA2Section from "../components/OurCTA2Section.jsx";

const Home = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    lazyLoad: "ondemand",
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  
  return (
    <div className="w-full min-h-screen">
      <section className="relative w-full h-screen text-white">
        <div className="navbar absolute  z-20 left-0 right-0">
          <Navbar />
        </div>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <section
              key={index}
              className="h-screen bg-center bg-image flex items-center w-full"
            >
              <div className="w-full mx-auto items-center flex h-auto mt-10 min-md:px-8">
                <div className="max-w-2xl h-screen flex items-center">
                  <div className=" bg-opacity-70 min-md:p-6 p-3 rounded-lg">
                    <h1 className="text-4xl md:text-5xl max-sm:text-3xl max-md:text-3xl font-bold my-4 leading-tight">
                      {slide.title.split("<br>").map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </h1>
                    <h5 className="text-xl max-md:text-lg max-sm:text-md text-white font-bold italic tracking-wide my-4">
                      {slide.description}
                    </h5>

                    {slide.listItems.length > 0 && (
                      <ul className="space-y-2 mb-6 grid grid-cols-2 max-md:grid-cols-1 px-4 my-6 ">
                        {slide.listItems.map((item, idx) => (
                          <li key={idx} className="flex items-center">
                            <img
                              src="https://www.vendrax.com/assets/images/tick1.webp"
                              alt="tick"
                              className="w-5 h-5 mr-2"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                   
                    <div className="my-3">
                      <Button2 text={slide.button.text} textColor="text-white" arrowBtnBorder="border-[#222a28]" border="border-orange-600" hoverBg="hover:bg-teal-300" hoverBorderColor="hover:border-teal-300" hovertextColor="hover:text-black" btnBg="bg-orange-600" arrowBtnBg="bg-white" arrowBtnColor="text-black" textSize="text-xl" font="font-bold" />
                    </div>
                  </div>
                </div>
                {/* <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  <button
                    type="button"
                    className="w-3 h-3 bg-white rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 bg-white hover:bg-orange-600 active:bg-orange-600 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                </div> */}
              </div>
            </section>
          ))}
        </Slider>
      </section>
      <UserSection/>
      <WhatWeOfferSection/>
      <OurServicesSection/>
      <WhoWeAreSection/>
      <OurVendraxSection/>
      <OurCTA2Section/>
    </div>
  );
};

export default Home;
