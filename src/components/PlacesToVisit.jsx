import React from "react";
import img from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import { PiPersonSimpleHikeDuotone } from "react-icons/pi";

export default function TokyoItinerary() {
  return (
    <div className="p-1 h-[75vh]">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center my-6">
          <div className="bg-[var(--highlight)] text-[var(--bg-primary)] font-semibold text-sm py-0.5 px-0.5 rounded-lg mr-4 flex gap-3">
            <p>Day 1</p>
            <h2>27.01.2025</h2>
          </div>
          <h2 className="text-[var(--highlight)] flex items-center">
            <span>
              <PiPersonSimpleHikeDuotone />
            </span>
            3 Activities
          </h2>
        </div>

        {/* Activities Container */}
        <div className="border border-[var(--highlight)] rounded-xl p-2 space-y-4 bg-[var(--bg-primary)]">
          {/* Senso-ji Temple */}
          <div className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden h-28">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img3}
                  alt="Senso-ji Temple"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-1 ml-1 mt-2 space-y-0.5">
                <h2 className="text-[var(--text-primary)] text-xs font-semibold">
                  Senso-ji Temple & Nakamise Shopping Street Senso-ji
                </h2>
                <div className="mt-3 text-[var(--text-secondary)] text-xs">
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium ">Timing:</span> 8:15 am
                    Morning
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium ">Duration:</span> 3 hours
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium ">Pick up:</span> From Hotel
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tokyo Sky Tree */}
          <div className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img}
                  alt="Tokyo Sky Tree"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-1 ml-1 mt-1 mb-2">
                <h2 className="text-[var(--text-primary)] text-xs font-semibold">
                  Tokyo Sky Tree
                </h2>
                <div className="mt-5 text-[var(--text-secondary)] text-xs space-y-0.5">
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium">Timing:</span> 1:00 pm
                    Afternoon
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium">Duration:</span> 3 hours
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium">Pick up:</span> From Nakamise
                    Street
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kimono Wearing */}
          <div className="bg-[var(--bg-secondary)] rounded-lg overflow-hidden">
            <div className="flex">
              <div className="w-30">
                <img
                  src={img2}
                  alt="Kimono Wearing"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="w-2/3 p-1 ml-1 mt-2">
                <h2 className="text-[var(--text-primary)] text-xs font-semibold">
                  Kimono Wearing
                </h2>
                <div className="mt-4 text-[var(--text-secondary)] text-xs space-y-1">
                  <p className="text-xs text-[var(--text-primary)]">
                    <span className="font-medium ">Timing:</span> Anytime before
                    8:00pm
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium ">Duration:</span> 1-2 hours
                  </p>
                  <p className="text-[var(--text-primary)]">
                    <span className="font-medium ">Pick up:</span> From Hotel
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
