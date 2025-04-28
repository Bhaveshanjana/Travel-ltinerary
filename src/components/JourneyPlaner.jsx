import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown, MdFamilyRestroom } from "react-icons/md";
import { IoIosPeople, IoMdMan, IoMdWoman } from "react-icons/io";
import { Link } from "react-router-dom";
import LightMode from "./LightMode";

const JourneyPlanner = () => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelType, setTravelType] = useState("");

  return (
    <>
      <div className=" bg-gradient-to-r from-[var(--bg-primary)] to-[var(--bg-secondary)] min-h-screen transition-colors duration-500">
        <div className="mt-8 mx-5">
          <h1 className="text-[22px] md:text-3xl font-bold text-[var(--text-primary)] tracking-wider">
            Plan Your Journey, Your Way!
          </h1>
          <p className="text-[var(--text-primary)] mb-6 text-start">
            Let's create your personalised travel experience
          </p>
        </div>
        <LightMode />

        <div className="flex flex-col p-6">
          <div className="bg-transparent max-w-md w-full">
            {/* Destination Input */}
            <div className="mb-4">
              <label className="text-[var(--text-primary)] block mb-2">
                Where would you like to go?
              </label>
              <div className="flex items-center bg-[var(--input-bg)] rounded-lg px-4 py-3">
                <span className="text-[var(--text-primary)] mr-2 text-xl">
                  <GrLocation />
                </span>
                <input
                  type="text"
                  placeholder="Enter Destination"
                  className="bg-transparent outline-none text-[var(--text-primary)] w-full placeholder:text-[var(--text-primary)]"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
            </div>

            {/* Duration Dropdown */}
            <div className="mb-4">
              <label className="text-[var(--text-primary)] block mb-2">
                How long will you stay?
              </label>
              <div className="relative">
                <select
                  className="bg-[var(--input-bg)] text-[var(--text-primary)] w-full rounded-lg px-11 py-3 appearance-none"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="">Select Duration</option>
                  <option value="1-3 days">1-3 days</option>
                  <option value="4-7 days">4-7 days</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="More than 2 weeks">More than 2 weeks</option>
                </select>

                {/* Calendar Icon */}
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                  <LuCalendar className="text-[var(--text-primary)]" />
                </div>

                {/* Down Arrow Icon */}
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                  <MdOutlineKeyboardArrowDown className="text-[var(--text-primary)] text-2xl" />
                </div>
              </div>
            </div>

            {/* Travel Type Buttons */}
            <div className="mb-6">
              <label className="text-[var(--text-primary)] block mb-4">
                Who are you traveling with?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    type: "Solo",
                    icon: <IoMdMan size={20} className="mt-2 mr-2" />,
                  },
                  {
                    type: "Couple",
                    icon: (
                      <div className="flex mt-2 text-xl -space-x-3 mr-1">
                        <IoMdMan />
                        <IoMdWoman />
                      </div>
                    ),
                  },
                  {
                    type: "Family",
                    icon: <MdFamilyRestroom size={20} className="mt-2 mr-2" />,
                  },
                  {
                    type: "Friends",
                    icon: (
                      <div className="flex -space-x-3">
                        <IoMdMan size={24} className="mt-2" />
                        <IoMdMan size={24} className="mt-2" />
                      </div>
                    ),
                  },
                ].map(({ type, icon }) => (
                  <button
                    key={type}
                    className={`flex items-center justify-center bg-[var(--input-bg)] text-[var(--text-primary)] py-3 rounded-lg hover:bg-gray-300 ${
                      travelType === type
                        ? "border-2 border-[var(--highlight)]"
                        : ""
                    }`}
                    onClick={() => setTravelType(type)}
                  >
                    {icon}
                    <span className="mt-2">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Continue Button */}
            <Link
              to={"/dashboard"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3 rounded-lg mt-60 flex items-center justify-center"
              onClick={() => console.log({ destination, duration, travelType })}
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JourneyPlanner;
