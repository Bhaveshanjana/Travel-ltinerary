import React from "react";

const ActivitiesCard = () => {
  const days = [
    { month: "JAN", day: "27", weekday: "MON", active: true },
    { month: "JAN", day: "28", weekday: "TUE", active: false },
    { month: "JAN", day: "29", weekday: "WED", active: false },
    { month: "JAN", day: "30", weekday: "THU", active: false },
    { month: "JAN", day: "31", weekday: "FRI", active: false },
    { month: "FEB", day: "1", weekday: "SAT", active: false },
  ];

  return (
    <>
      <div className="flex w-full justify-between mx-auto items-center mt-5 mb-4">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">Activities</h2>
        <p className="text-[var(--text-secondary)] text-sm border-b-2 text-[var(--text-secondary)]">
          See all
        </p>
      </div>
      <div className="bg-[#4b554df9]  text-white p-4 rounded-xl overflow-x-scroll w-full mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <button className="bg-lime-400 text-black px-3 py-1 rounded-lg text-sm font-semibold">
            Day Plan
          </button>
          <button className="border border-lime-400 text-lime-400 px-3 py-1 rounded-lg text-sm font-semibold bg-[#2a2a2a]">
            14 Activities
          </button>
        </div>

        <div className="flex gap-2 overflow-x-scroll scrollbar-hide">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex ${
                day.active ? "flex-row" : "flex-col"
              } items-center justify-center rounded-lg min-w-[60px] overflow-hidden ${
                day.active
                  ? "border border-lime-400"
                  : "bg-[#2a2a2a] text-gray-400"
              }`}
            >
              {day.active ? (
                <>
                  <div className="bg-lime-400 text-black flex flex-col justify-center py-2 h-full ">
                    <span className="text-[15px] font-semibold rotate-[-90deg] ">
                      {day.month}
                    </span>
                  </div>
                  <div className=" text-white flex flex-col justify-center items-center px-1 mr-2 bg-[#2a2a2a] h-full">
                    <span className="text-xs font-light">{day.weekday}</span>
                    <span className="text-xs font-bold">{day.day}</span>
                  </div>
                </>
              ) : (
                <>
                  <span className="text-sm font-light">{day.weekday}</span>
                  <span className="text-lg font-bold">{day.day}</span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ActivitiesCard;
