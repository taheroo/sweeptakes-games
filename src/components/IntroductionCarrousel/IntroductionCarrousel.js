import React from "react";
import "../IntroductionCarrousel/IntroductionCarrousel.css";
import Step0 from "../../assets/images/Step0.png";
import Step1 from "../../assets/images/Step1.png";

import Step2 from "../../assets/images/Step2.png";
import Step3 from "../../assets/images/Step3.png";

const IntroductionCarrousel = () => {
  return (
    <div className="carousel relative shadow-2xl bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        {/*Slide 1*/}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden
          defaultChecked="checked"
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "90vh" }}
        >
          <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
            Slide 1
            <img src={Step0} alt="" className="h-full w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-3"
          className="prev control-1 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-2"
          className="next control-1 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>
        {/*Slide 2*/}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "90vh" }}
        >
          <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
            Slide 2
            <img src={Step1} alt="" className="h-full w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "90vh" }}
        >
          <div className="block h-full w-full bg-orange-500 text-white text-5xl text-center">
            Slide 3
            <img src={Step2} alt="" className="h-full w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-1"
          className="prev control-2 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-3"
          className="next control-2 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>

        {/*Slide 3*/}
        <input
          className="carousel-open"
          type="radio"
          id="carousel-4"
          name="carousel"
          aria-hidden="true"
          hidden
        />
        <div
          className="carousel-item absolute opacity-0"
          style={{ height: "90vh", width: "120vh" }}
        >
          <div className="block h-full w-full bg-green-500 text-white text-5xl text-center">
            Slide 4
            <img src={Step3} alt="" className="h-full w-full" />
          </div>
        </div>
        <label
          htmlFor="carousel-4"
          className="prev control-3 w-10 h-10 ml-2 md:ml-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 left-0 my-auto"
        >
          ‹
        </label>
        <label
          htmlFor="carousel-1"
          className="next control-3 w-10 h-10 mr-2 md:mr-10 absolute cursor-pointer hidden text-3xl font-bold text-black hover:text-white rounded-full bg-white hover:bg-blue-700 leading-tight text-center z-10 inset-y-0 right-0 my-auto"
        >
          ›
        </label>
        {/* Add additional indicators for each slide*/}
        <ol className="carousel-indicators">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-3"
              className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default IntroductionCarrousel;
