import React from "react";
import JourneyPlanner from "./components/JourneyPlaner";
import { Route, Routes } from "react-router-dom";
import UpcomingTripCard from "./components/UpcomingTripCard";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<JourneyPlanner />} />
        <Route path="/dashboard" element={<UpcomingTripCard />} />
      </Routes>
    </div>
  );
};

export default App;
