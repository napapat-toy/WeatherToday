"use client";

import { useEffect, useState } from "react";

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      setCurrentDate(new Date().toDateString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <p className="mt-2">
      {currentDate ? currentDate : "Date"} {currentTime ? currentTime : "Time"}
    </p>
  );
};

export default CurrentTime;
