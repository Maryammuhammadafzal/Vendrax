import React from "react";
import Button2 from "./Button2";
import phoneImage from "../assets/images/phone2.webp";
import mapImage from "../assets/images/map2.webp";
import footerImage from "../assets/images/foot-bg1.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-bg w-full min-h-screen">
      <div className="container relative mx-auto max-[1200px]:w-[80%] max-md:w-full max-md:flex max-md:flex-col max-md:items-center  w-full py-4 px-0">
        <div className="head mt-15 bg-amber-800 flex max-lg:flex-wrap items-center max-[1200px]:mt-15 max-md:px-2 xl:pl-20 mb-10 gap-3 max-[1200px]:mb-0 w-full md:w-[90%]">
          <div className="content w-2/3 max-lg:w-auto pl-3">
            <h2 className="text-4xl max-[1200px]:text-2xl  max-[1000px]:text-xl max-[800px]:text-lg tracking-wide text-white font-extrabold mb-9 max-[1200px]:mb-0">
              Ready To Clutch The Growth Curve For The Success Of Your{" "}
              <span className="text-orange-600">Bussiness</span>
            </h2>
            <div className="flex gap-3 w-3/4">
              <p className="text-gray-400 text-md max-[1200px]:text-xs max-sm:text-[10px] my-5 max-[400px]:text-[8px]">
                Maximize the potential of your business with our growth-driven
                solutions. Let’s together achieve your goals in an innovative
                and thriving dynamics.
              </p>
              <div className="mt-3 inline-block p-2 w-1/4">
                <Button2
                  text="Get Started"
                  textColor="text-white"
                  arrowBtnBorder="border-gray-950"
                  border="border-orange-600"
                  hoverBg="hover:bg-teal-300"
                  hoverBorderColor="hover:border-teal-300"
                  hovertextColor="hover:text-black"
                  btnBg="bg-orange-600"
                  arrowBtnBg="bg-teal-700"
                  arrowBtnColor="text-black"
                  textSize="text-sm"
                  font="font-semibold"
                />
              </div>
            </div>
          </div>
          <div className="contact w-1/3 flex  max-lg:w-auto  text-white mt-5 justify-center bg-amber-200 items-start h-fit ">
            <div className=" flex flex-col max-[1200px]:p-2 w-1/3 bg-amber-200  max-md:p-5">
              <div className="info-ser  flex-col ">
                <img
                  className="h-10 w-10 max-[1200px]:h-7 max-[1200px]:w-7 max-md:h-8 max-md:w-8"
                  src={phoneImage}
                  alt=""
                />
                <h4 className="max-[1200px]:text-xs text-sm font-semibold my-4  ">Call Us</h4>
              </div>
              <a
                href="tel:833-604-8051"
                className="font-bold max-[1200px]:text-xs text-base text-teal-500 "
              >
                833-604-8051
              </a>
            </div>
            <div className=" flex w-2/3 flex-col max-[1200px]:p-2  max-md:p-5">
              <div className="info-ser flex  flex-col  gap-3">
                <img
                  className="h-10 w-10 max-[1200px]:h-7 max-[1200px]:w-7 max-md:h-8 max-md:w-8"
                  src={mapImage}
                  alt=""
                />
                <h4 className="max-[1200px]:text-xs text-sm font-semibold">Address</h4>
                <p className="font-bold max-[1200px]:text-xs text-base text-teal-500 ">
                  15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United
                  States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="middle flex w-full md:w-[90%] mx-auto mb-10 justify-center items-center p-3">
          <div className="w-1/6 h-3 bg-teal-500"></div>
          <div className="w-5/6 h-[1px] bg-teal-500"></div>
        </div>

        <div className="sm:w-[90%] w-full h-auto grid lg:grid-cols-4 grid-cols-2 sm:px-6 px-3 md:px-10 mb-10 mx-auto justify-center items-center">

          <div className="flex flex-col p-2 gap-3 items-start justify-center text-white">
            <h3 className="text-2xl font-bold ">Quick Links</h3>
            <ul className="flex flex-col gap-3 p-2">
              <li className="text-md"> Home</li>
              <li className="text-md"> About</li>
              <li className="text-md"> Features</li>
              <li className="text-md"> Referrel Program</li>
              <li className="text-md"> ISO Reseller Program</li>
              <li className="text-md"> Agent Revenue Share</li>
              <li className="text-md"> Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col p-2 gap-3 items-start justify-center text-white">
            <h3 className="text-2xl font-bold ">Services</h3>
            <ul className="flex flex-col gap-3 p-2">
              <li className="text-md"> Ecommerce</li>
              <li className="text-md"> Restaurant</li>
              <li className="text-md"> Pay At The Table</li>
              <li className="text-md"> Mobile Payment</li>
            </ul>
          </div>
          <div className="flex flex-col p-2 gap-3 items-start justify-center text-white">
            <h3 className="text-2xl font-bold "></h3>
            <ul className="flex flex-col gap-3 p-2">
              <li className="text-md"> POS Service </li>
              <li className="text-md"> Desktop Terminal</li>
              <li className="text-md"> Wireless Terminal</li>
            </ul>
          </div>
          <div className="flex flex-col p-2 gap-3 items-start justify-center text-white">
            <h3 className="text-2xl font-bold ">Quick Links</h3>
            <ul className="flex flex-col gap-3 p-2">
              <li className="text-md"><Link to="https://www.facebook.com/vendrax0/" target="_blank">Facebook</Link> </li>
              <li className="text-md"> <Link to="https://twitter.com/Vendrax0" target="_blank">Twitter</Link></li>
              <li className="text-md"> <Link to="https://www.instagram.com/vendrax0/" target="_blank">Instagram</Link></li>
              <li className="text-md"> <Link to="https://www.linkedin.com/company/vendrax/" target="_blank">LinkedIn</Link></li>
              <li className="text-md"> <Link to="https://pin.it/20IhDj8O4/" target="_blank">Pinterest</Link></li>
            </ul>
          </div>
        </div>

        <div className="copyright w-[90%] px-10 text-white items-center mx-auto grid grid-cols-2">
          <div className="flex justify-start">
                   <Link to="/">
                     <img
                       src="https://www.vendrax.com/assets/images/logo.webp"
                       alt="Vendrax Logo"
                       className="h-10 "
                     />
                   </Link>
                 </div>
          <div className="flex justify-end">
                  <p className="text-xs "> Copyright © 2025 Vendrax. All rights reserved.</p>
                 </div>
        </div>
       
        <img
          className="ser-bg1 absolute z-50 -top-20 right-10 h-70 max-[1200px]:h-35 max-[1200px]:-top-8 max-[1200px]:right-40 max-[1000px]:hidden"
          src={footerImage}
          alt=""
        />
      </div>
      
    </footer>
  );
};

export default Footer;
