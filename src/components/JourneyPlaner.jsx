import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { LuCalendar } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const JourneyPlanner = () => {
  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [travelType, setTravelType] = useState("");

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-black p-6 ">
        <div className="mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Plan Your Journey, Your Way!
          </h1>
          <p className="text-gray-200 mb-6 ">
            Let's create your personalised travel experience
          </p>
        </div>

        <div className="bg-transparent max-w-md w-full">
          {/* Destination Input */}
          <div className="mb-4">
            <label className="text-white block mb-2">
              Where would you like to go?
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg px-4 py-3">
              <span className="text-white mr-2 text-xl">
                <GrLocation />
              </span>
              <input
                type="text"
                placeholder="Enter Destination"
                className="bg-transparent outline-none text-white w-full placeholder:text-white"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
          </div>

          {/* Duration Dropdown */}
          <div className="mb-4">
            <label className="text-white block mb-2">
              How long will you stay?
            </label>
            <div className="relative">
              <select
                className="bg-gray-800 text-white w-full rounded-lg px-11 py-3 appearance-none"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              >
                <option value="">Select Duration</option>
                <option value="1-3 days">1-3 days</option>
                <option value="4-7 days">4-7 days</option>
                <option value="1-2 weeks">1-2 weeks</option>
                <option value="More than 2 weeks">More than 2 weeks</option>
              </select>
              <div className="absolute inset-y-0 ml-4 flex items-center pointer-events-none">
                <div className="flex justify-between ">
                  <span className="text-white">
                    <LuCalendar />
                  </span>
                  <span>
                    <MdOutlineKeyboardArrowDown />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Travel Type Buttons */}
          <div className="mb-6">
            <label className="text-white block mb-4">
              Who are you traveling with?
            </label>
            <div className="grid grid-cols-2 gap-4">
              {["Solo", "Couple", "Family", "Friends"].map((type) => (
                <button
                  key={type}
                  className={`flex items-center justify-center bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 ${
                    travelType === type ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => setTravelType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Continue Button */}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full py-3 rounded-lg"
            onClick={() => console.log({ destination, duration, travelType })}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default JourneyPlanner;
