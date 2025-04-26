import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CrossIcon, MenuIcon } from "./Icons";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = ()=> {
        setMenuOpen(!menuOpen)
  }
  console.log(menuOpen);
  

  return (
    <div className="w-full bg-transparent h-auto flex justify-between items-center max-[980px]:relative">
      <div className="w-full mx-auto flex  items-center justify-between py-4 px-4">
        {/* Logo */}
        <div className="w-1/3 ">
          <Link to="/">
            <img
              src="https://www.vendrax.com/assets/images/logo.webp"
              alt="Vendrax Logo"
              className="h-10"
            />
          </Link>
        </div>

        <nav className="w-full ">
          {/* Desktop Navigation */}

          <ul className="flex max-[980px]:hidden min-[980px]:flex-row items-start min-[980px]:items-center justify-end gap-4 min-[980px]:gap-6 text-sm min-[980px]:text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <Link to="/">Services</Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md z-10">
                <ul className="flex flex-col w-48 text-sm gap-2">
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Ecommerce
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      POS service
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Restaurant
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Desktop Terminal
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Pay at the table
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Wireless Terminal
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Mobile Payment
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/">Features</Link>
            </li>

            {/* Partnership Dropdown */}
            <li className="relative group">
              <Link to="/">Partnership</Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 rounded-md z-10">
                <ul className="flex flex-col text-sm gap-2 w-52">
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Referral Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      ISO Reseller Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Agent Revenue Share
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="px-2 py-2 hover:bg-gray-100">
                      Submit Referral
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link to="/">Contact</Link>
            </li>

            {/* Get Started Button */}
            <li>
              {/* <button>Get Started</button> */}
              <Button
                text="Get Started"
                bg="transparent"
                color="[#00c6c0]"
                border="[#00c6c0]"
              />
            </li>
          </ul>

          <ul className="flex justify-end min-[980px]:hidden" >
            <li className="px-4 py-2 text-2xl font-bold" onClick={toggleMenu}>
              <MenuIcon />
            </li>
          </ul>

          {/* Mobile Navigation */}
{
         menuOpen === true ?(
          <ul className={`fixed top-0 right-0 h-screen w-full bg-gradient-to-br from-red-500 via-red-500 to-orange-700 text-white flex flex-col items-start justify-start gap-3  tracking-wider z-50 transition-all duration-500 ease-in-out transform ${
                menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}>
            {/* Cross Button */}

            <li className="w-full  px-5 text-lg uppercase border-b flex justify-between items-end mt-10 border-white">
              <Link href="https://www.vendrax.com/">Home</Link>
              <button className="px-4 py-2 text-3xl font-bold" onClick={toggleMenu}>
              <CrossIcon />
            </button>
            </li>
            <li className="w-full  px-5 text-lg uppercase border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">About</Link>
            </li>

            {/* Services Dropdown */}
            <li className="w-full  px-5 text-lg uppercase border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">Services</Link>
            </li>

            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">Ecommerce</Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">POS Service</Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">Restaurant</Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Desktop Terminal
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Pay At the table
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Wireless Terminal
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Mobile payment
              </Link>
            </li>

            <li className="w-full  px-5 text-lg uppercase border-b  border-white">
              <Link href="https://www.vendrax.com/features/">Partnership</Link>
            </li>

            {/* Partnership Dropdown */}
            <li className="w-full  px-5 text-lg uppercase border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">Features</Link>
            </li>

            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Referral Program
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                IOS Reseller Program
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Agent Revenue Share
              </Link>
            </li>
            <li className="w-full  px-8 text-sm border-b  border-white">
              <Link href="https://www.vendrax.com/about-us/">
                Submit Referrel
              </Link>
            </li>

            <li className="w-full  px-5 text-lg uppercase border-b  border-white">
              <Link href="https://www.vendrax.com/contact-us/">Contact</Link>
            </li>

               {/* Get Started Button */}
            <li className="w-full  px-4 text-lg uppercase py-2 ">
              <Button
                text="Get Started"
                bg="transparent"
                color="white"
                border="white"
              />
         
            </li>
          </ul>
         ) : null

}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
