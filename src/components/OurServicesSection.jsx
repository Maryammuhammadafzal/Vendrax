import React from "react";
import Badge from "./Badge";

const OurServicesSection = () => {
  return (
    <section className="our-service relative flex justify-center items-center z-10">
      <div className="container relative  max-[1200px]:w-[75%] max-md:w-full max-md:flex max-md:flex-col max-md:items-center  w-full py-4 px-0">
        <div className="head my-30 max-[1200px]:mt-15 max-md:px-2 px-20 max-[1200px]:mb-0 ">
          <Badge text="POS System Service" color="text-[#ee5e2e]" bg="bg-[#553a29]" />
          <h2 className="text-6xl max-[1200px]:text-4xl  max-[1000px]:text-3xl max-[800px]:text-2xl tracking-wide text-white font-extrabold mb-9 max-[1200px]:mb-0">
            Get a POS System That Aligns <br />
            With Your Industry
          </h2>
        </div>
        <div className="row flex items-center justify-center w-full p-3 ">
          <div className="w-full flex gap-3 items-start max-md:justify-center justify-end">
            <div className="row grid w-[50%] max-sm:w-full max-md:grid-cols-1 grid-cols-2 text-white justify-between items-end">
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic2.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg">Ecommerce</h4>
                </div>
              </div>

              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic4.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg">Restaurant</h4>
                </div>
              </div>
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic5.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg">POS service</h4>
                </div>
              </div>
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic6.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg"> Pay at the table</h4>
                </div>
              </div>
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic7.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg"> Desktop Terminal</h4>
                </div>
              </div>
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic8.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg ">Mobile Payment</h4>
                </div>
              </div>
              <div className="col-md-6 flex flex-col p-5 max-[1200px]:p-2 max-md:p-5">
                <div className="info-ser justify-center items-center flex  flex-col p-2 gap-3">
                  <img
                   className="h-16 w-16 max-[1200px]:h-12 max-[1200px]:w-12 max-md:h-14 max-md:w-14"
                    src="https://www.vendrax.com/assets/images/ser-ic9.webp"
                    alt=""
                  />
                  <h4 className="text-lg font-bold max-[1200px]:text-sm max-[1200px]:font-semibold max-md:text-lg">Wireless Terminal</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="ser-bg1 absolute -top-20 right-10 h-80 max-[1200px]:h-35 max-[1200px]:-top-8 max-[1200px]:right-40 max-[1000px]:hidden"
          src="https://www.vendrax.com/assets/images/ser-bg1.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default OurServicesSection;
