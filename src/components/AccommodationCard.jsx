import React from "react";
import { VscStarFull } from "react-icons/vsc";
import { GiConfirmed } from "react-icons/gi";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import img from "../assets/Hotel.png";
import img2 from "../assets/Hotel2.png";

const AccommodationCard = () => {
  return (
    <div className="w-full mx-auto ">
      {/* Title */}
      <div className="flex justify-between mb-4 mt-9">
        <h2 className="text-lg font-semibold text-[var(--text-primary)] ">Accommodation</h2>
        <p className=" text-[var(--highlight)] underline underline-offset-4 text-sm font-semibold">
          See all
        </p>
      </div>

      {/* Card list horizontal */}
      <div className="flex overflow-x-scroll space-x-4 pb-4 scrollbar-hide ">
        {/* Card 1 */}
        <div className="min-w-[260px] accommodation-card text-[var(--text-primary)] border border-[var(--text-primary)] rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={img}
              alt="Hotel"
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="absolute top-[130px] left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-sm flex items-center space-x-1">
              <VscStarFull className="text-[17px]" />
              <span>4.0 Very Good</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Shinagawa Prince Hotel</h3>
            <div className="mt-2 text-sm text-[var(--text-primary)]">
              <p>
                <span className="font-semibold">Check in:</span> 26.01.2025,
                11:15 pm
              </p>
              <p className="mt-1">
                <span className="font-semibold">Check out:</span> 28.01.2025,
                11:15 am
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-semibold">2 Nights</span>
              <div className="flex items-center space-x-1 text-[#f3ff4d] text-sm font-semibold">
                <GiConfirmed className="text-xl" />
                <span>Confirmed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[260px]  accommodation-card text-[var(--text-primary)] border border-[var(--text-primary)] rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src={img2}
              alt="Hotel"
              className="w-full h-40 object-cover rounded-t-2xl"
            />
            <div className="absolute top-[130px] left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-sm flex items-center space-x-1">
              <VscStarFull className="text-[17px]" />
              <span>4.1 Very Good</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-lg">Mercure Tokyo Hotel</h3>
            <div className="mt-2 text-sm text-[var(--text-primary)]">
              <p>
                <span className="font-semibold">Check in:</span> 28.01.2025,
                6:00 pm
              </p>
              <p className="mt-1">
                <span className="font-semibold">Check out:</span> 30.01.2025,
                11:15 am
              </p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-semibold">2 Nights</span>
              <div className="flex items-center space-x-1 text-orange-400 text-sm font-semibold">
                <PiClockCounterClockwiseBold className="text-xl" />
                <span>Pending</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AccommodationCard;
