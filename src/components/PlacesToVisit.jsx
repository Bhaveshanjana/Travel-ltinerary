import React from "react";
import img from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { PiPersonSimpleHikeDuotone } from "react-icons/pi";

export default function TokyoItinerary() {
  return (
    <div className="bg-black  p-1">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center my-6">
          <div className="bg-yellow-300 text-black font-semibold text-sm py-0.5 px-0.5 rounded-lg mr-4 flex gap-3">
            <p>Day 1</p>
            <h2> 27.01.2025</h2>
          </div>
          <h2 className="text-yellow-300 flex items-center">
            {" "}
            <span>
              <PiPersonSimpleHikeDuotone />
            </span>{" "}
            3 Activities
          </h2>
        </div>

        {/* Activities Container */}
        <div className="border border-yellow-300 rounded-xl p-2 space-y-4 ">
          {/* Senso-ji Temple */}
          <div className="bg-gray-800 rounded-lg overflow-hidden h-28 ">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img3}
                  alt="Senso-ji Temple"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3  ml-1 mt-2 space-y-0.5">
                <h2 className="text-white text-xs font-semibold">
                  Senso-ji Temple & Nakamise Shopping Street Senso-ji
                </h2>
                <div className="mt-3 text-gray-400 text-xs">
                  <p>
                    <span className="font-medium text-white ">Timing:</span>{" "}
                    8:15 am Morning
                  </p>
                  <p>
                    <span className="font-medium text-white">Duration:</span> 3
                    hours
                  </p>
                  <p>
                    <span className="font-medium text-white ">Pick up:</span>{" "}
                    From Hotel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tokyo Sky Tree */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img}
                  alt="Tokyo Sky Tree"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-1 ml-1 mt-1 mb-2">
                <h2 className="text-white text-xs font-semibold">
                  Tokyo Sky Tree
                </h2>
                <div className="mt-5 text-gray-400 text-xs space-y-0.5">
                  <p>
                    <span className="font-medium text-white">Timing:</span> 1:00
                    pm Afternoon
                  </p>
                  <p>
                    <span className="font-medium text-white">Duration:</span> 3
                    hours
                  </p>
                  <p>
                    <span className="font-medium text-white">Pick up:</span>{" "}
                    From Nakamise Street
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kimono Wearing */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img2}
                  alt="Kimono Wearing"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-1 ml-1 mt-2">
                <h2 className="text-white text-xs font-semibold">
                  Kimono Wearing
                </h2>
                <div className="mt-4 text-gray-400 text-xs space-y-1">
                  <p className="text-xs">
                    <span className="font-medium text-white ">Timing:</span>{" "}
                    Anytime before 8:00pm
                  </p>
                  <p>
                    <span className="font-medium text-white">Duration:</span>{" "}
                    1-2 hours
                  </p>
                  <p>
                    <span className="font-medium text-white">Pick up:</span>{" "}
                    From Hotel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
