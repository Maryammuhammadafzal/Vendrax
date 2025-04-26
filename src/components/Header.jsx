import React from "react";
import locationIcon from "../assets/images/location.png";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  PhoneCallIcon,
} from "../components/Icons.jsx";
const Header = () => {
  return (
    <header className="w-full h-[60px] lg:block hidden lg:h-[50px] bg-white p-2">
      <div className="w-full h-auto flex justify-between items-center text-md">
        <div className="location w-auto flex gap-2 items-center justify-center">
          <img src={locationIcon} alt="icon" className="w-5 h-5 " />
          <p className="text-[10px]">
            15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601 United States
          </p>
        </div>
        <div className="socialIcon w-auto flex gap-2 items-center justify-center text-lg ">
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          <LinkedinIcon />
          <PinterestIcon />
        </div>
        <div className="phoneNumber w-auto flex gap-2 items-center justify-center text-lg p-2">
          <PhoneCallIcon />
          <p className="text-[10px]">833-604-8051</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
