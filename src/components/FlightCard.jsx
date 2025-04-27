import React from "react";
import img from "../assets/Aeroplane.png";
import { GoArrowRight } from "react-icons/go";

const FlightCard = () => {
  return (
    <div className="relative bg-[#2E41F0] text-white rounded-2xl p-2 overflow-hidden w-full max-w-md mx-auto shadow-lg mt-9">
      <div className="bg-[#2133d3] rounded-2xl p-1 -mx-0.5">
        {/* Top Row */}
        <div className="flex justify-between items-start relative z-10">
          <div>
            <div className="text-sm font-semibold">Flight Details</div>
            <div className="text-[10px] text-gray-200 mt-1 font-extralight">
              26.01.2025, 10:50 am
            </div>
          </div>
          <div className="text-xs text-yellow-400 font-semibold cursor-pointer border-b-1 ">
            See all
          </div>
        </div>

        {/* Middle Row - Flight Info */}
        <div className="flex items-center justify-start mt-5 space-x-2 relative z-10">
          <div className="text-start -space-y-1">
            <div className="text-lg font-medium">
              <p>DEL</p>
            </div>
            <div className="text-xs text-gray-300">
              <p>Delhi, India</p>
            </div>
          </div>

          <div className="text-2xl font-bold -ml-1">
            <span>
              <GoArrowRight />
            </span>
          </div>

          <div className="text-start -space-y-1">
            <div className="text-lg font-medium">
              <p>NRT</p>
            </div>
            <div className="text-xs text-gray-300">
              <p>Narita, Tokyo</p>
            </div>
          </div>
        </div>

        {/* Plane Image */}
        <div className="absolute right-0 bottom-0 w-[380px] sm:w-[200px] md:w-[230px] z-0">
          <img
            src={img}
            alt="Flight Plane"
            className="w-full h-auto object-contain translate-x-[158px] rotate-350 translate-y-[160px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
