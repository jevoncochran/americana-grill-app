"use client";

import ReactCountdown from "react-countdown";
import { useIsClient } from "@/hooks/useIsClient";

const endingDate = new Date("2023-11-06");

const Countdown = () => {
  // This prevents hydration errors whereas
  // ReactCountdown (obviously) displays different value at time of server render
  // compared to time of client render
  return useIsClient() ? (
    <ReactCountdown
      date={endingDate}
      className="font-bold text-5xl text-yellow-300"
    />
  ) : null;
};

export default Countdown;
