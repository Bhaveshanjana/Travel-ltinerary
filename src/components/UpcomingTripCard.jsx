import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiUsers } from "react-icons/hi2";
import { LuNotebookPen } from "react-icons/lu";

import img from "../assets/City.png";
import FlightCard from "./FlightCard";
import AccommodationCard from "./AccommodationCard";
import ActivitiesCard from "./ActivitiyCard";
import PlacesToVisite from "./PlacesToVisit";
import { FaUser } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { GoSearch } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import LightMode from "./LightMode";

const UpcomingTripCard = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)] p-6 flex flex-col items-start">
        {/* Header */}
        <LightMode />
        <div className=" flex items-center justify-between w-full mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">
              Hello Chhavi!
            </h1>
            <p className="text-[var(--text-primary)]">Ready for the trip?</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
            C
          </div>
        </div>

        {/* Title Section  */}
        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
          Your Upcoming Trip
        </h2>

        {/* Trip Card */}
        <div className="relative w-full rounded-2xl overflow-hidden">
          {/* Background Image */}
          <img
            src={img}
            alt="Tokyo Trip"
            className="w-full h-60 object-cover"
          />

          {/* Top Content */}
          <div className="absolute top-4 left-4">
            <h1 className="text-4xl font-bold text-white tracking-wide">
              TOKYO
            </h1>
            <p className="text-white text-sm">27.01.2025 - 02.02.2025</p>
          </div>

          {/* Top Right Arrow */}
          <div className="absolute top-4 right-3">
            <FiArrowUpRight size={28} className="text-white" />
          </div>

          {/* Bottom items */}
          <div className="absolute bottom-0  flex justify-center text-white text-xs h-14 backdrop-blur-[0.9px] w-full">
            <div className="flex items-center gap-6">
              <MdOutlineWatchLater
                size={14}
                className="text-yellow-400 bg-gray-800 rounded-full size-8 p-1.5"
              />
              <div className="flex flex-col -space-y-0.5 -ml-5">
                <span className="text-[10px] font-medium">8 Days</span>
                <p className="text-[10px] font-extralight">Duration</p>
              </div>
              <HiUsers
                size={14}
                className="  text-yellow-400 bg-gray-800 rounded-full size-7 p-1.5"
              />
              <div className="flex flex-col -space-y-0.5 -ml-5">
                <span className="text-[10px] font-medium">4 (2M,2F)</span>
                <p className="text-[10px] font-extralight">Group Size</p>
              </div>
              <LuNotebookPen
                size={14}
                className="  text-yellow-200 bg-gray-800 rounded-full size-8 p-1.5"
              />
              <div className="flex flex-col -space-y-0.5 -ml-5">
                <span className="text-[10px] font-medium">14 </span>
                <span className="text-[10px] font-extralight">Activities</span>
              </div>
            </div>
          </div>
        </div>

        {/* All other components */}
        <FlightCard />
        <AccommodationCard />
        <ActivitiesCard />
        <PlacesToVisite />

        {/* bottom Tab Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-[var(--bg-primary)] border-t border-gray-800 h-14 flex items-center justify-around px-2 z-50">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-lime-400">
            <FiHome size={24} />
          </button>

          <button className="flex items-center justify-center w-12 h-12 text-gray-400">
            <GoSearch size={24} />
          </button>

          <Link
            to={"/"}
            className="flex items-center justify-center w-12 h-12 text-lime-400"
          >
            <FaPlus size={28} />
          </Link>

          <button className="flex items-center justify-center w-12 h-12 text-gray-400">
            <IoIosHeartEmpty size={24} />
          </button>

          <button className="flex items-center justify-center w-12 h-12 text-gray-400">
            <FiUser size={24} />
          </button>
        </div>
      </div>
    </>
  );
};

export default UpcomingTripCard;
