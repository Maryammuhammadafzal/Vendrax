import React from 'react'
import Navbar from '../components/Navbar'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slides from "../data/heroSliderData.js"
import Button2 from '../components/Button2.jsx';

const Home = () => {
        const settings = {
                dots: true,
                arrows: true,
                infinite: true,
                speed: 500,
                autoplay: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              };
  return (
    <div className='w-full h-screen'>
        <section className="relative w-full  h-screen text-white">
        <div className="navbar absolute  z-20 left-0 right-0">
                <Navbar/> 
        </div>
                  <Slider {...settings}>

                    {slides.map((slide, index) => (
                      <section
                        key={index}
                        className="h-screen bg-image flex items-center w-full "
                      >
                        <div className="w-full mx-auto items-center flex h-auto mt-10 px-8">
                          <div className="max-w-2xl h-screen flex items-center">
                            <div className=" bg-opacity-70 p-6 rounded-lg">
                              <h1 className="text-4xl md:text-5xl font-bold my-4 leading-tight">
                                {slide.title.split("<br>").map((line, i) => (
                                  <div key={i}>{line}</div>
                                ))}
                              </h1>
                              <h5 className="text-xl text-white font-bold italic tracking-wide mb-6">{slide.description}</h5>
            
                              {slide.listItems.length > 0 && (
                                <ul className="space-y-2 mb-6 grid grid-cols-2 max-md:grid-cols-1 px-4 ">
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
            
                              <Button2/>
                            </div>
                          </div>
                        </div>
                      </section>
                    ))}
                  </Slider>
                </section>
      
       
      
    </div>
  )
}

export default Home
