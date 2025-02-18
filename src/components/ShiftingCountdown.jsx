"use client";

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const COUNTDOWN_FROM = "2025-03-09";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-pink-500  mt-10 justify-self-center w-[90vw] md:w-[600px] p-1 rounded-2xl shadow-lg">
      <div className="mx-auto flex rounded-xl overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        <CountdownItem unit="Day" text="days" />
        <VerticalDivider />
        <CountdownItem unit="Hour" text="hours" />
        <VerticalDivider />
        <CountdownItem unit="Minute" text="minutes" />
        <VerticalDivider />
        <CountdownItem unit="Second" text="seconds" />
      </div>
    </div>
  );
};

const CountdownItem = ({ unit, text }) => {
  const { ref, time } = useTimer(unit);

  return (
    <div className="flex h-16 w-1/4 flex-col items-center justify-center gap-1 font-mono md:h-24 md:gap-2 relative">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-xl font-bold md:text-3xl lg:text-4xl text-white"
        >
          {time}
        </span>
      </div>
      <span className="text-[10px] font-medium text-orange-300 uppercase tracking-wider md:text-xs lg:text-sm">
        {text}
      </span>
    </div>
  );
};

// Vertical Divider Component
const VerticalDivider = () => (
  <div className="h-12 md:h-20 w-[2px]  mt-2 bg-orange-500 opacity-75 mx-1"></div>
);

const useTimer = (unit) => {
  const [ref, animate] = useAnimate();
  const intervalRef = useRef(null);
  const timeRef = useRef(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);
    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;
    if (unit === "Day") newTime = Math.floor(distance / DAY);
    else if (unit === "Hour") newTime = Math.floor((distance % DAY) / HOUR);
    else if (unit === "Minute") newTime = Math.floor((distance % HOUR) / MINUTE);
    else newTime = Math.floor((distance % MINUTE) / SECOND);

    if (newTime !== timeRef.current) {
      await animate(ref.current, { y: ["0%", "-50%"], opacity: [1, 0] }, { duration: 0.3 });
      timeRef.current = newTime;
      setTime(newTime);
      await animate(ref.current, { y: ["50%", "0%"], opacity: [0, 1] }, { duration: 0.3 });
    }
  };

  return { ref, time };
};

export default ShiftingCountdown;