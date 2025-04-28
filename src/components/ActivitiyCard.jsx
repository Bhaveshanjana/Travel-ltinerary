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
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Activities
        </h2>
        <p className="text-[var(--highlight)] text-sm border-b-2 ">
          See all
        </p>
      </div>
      <div className="bg-[var(--bg-secondary)] text-[var(--text-primary)] p-4 rounded-xl overflow-x-scroll w-full mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <button className="bg-[var(--highlight)] text-[var(--bg-primary)] px-3 py-1 rounded-lg text-sm font-semibold">
            Day Plan
          </button>
          <button className="border border-[var(--highlight)] text-[var(--highlight)] px-3 py-1 rounded-lg text-sm font-semibold bg-[var(--bg-primary)]">
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
                  ? "border border-[var(--highlight)]"
                  : "bg-[var(--bg-primary)] text-[var(--text-secondary)]"
              }`}
            >
              {day.active ? (
                <>
                  <div className="bg-[var(--highlight)] text-[var(--bg-primary)] flex flex-col justify-center py-2 h-full">
                    <span className="text-[15px] font-semibold rotate-[-90deg]">
                      {day.month}
                    </span>
                  </div>
                  <div className="text-[var(--text-primary)] flex flex-col justify-center items-center px-1 mr-2 bg-[var(--bg-primary)] h-full">
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
