"use client";

import ReactCountdown from "react-countdown";

const endingDate = new Date("2023-11-01");

const Countdown = () => {
  return (
    <ReactCountdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-300"
    />
  );
};

export default Countdown;
