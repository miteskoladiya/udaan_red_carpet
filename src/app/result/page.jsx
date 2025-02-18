"use client";
import ShiftingCountdown from "@/components/ShiftingCountdown";
import React from "react";
import SplitText from "../../../components/SplitText";

const page = () => {
  return (
    <div>
      <ShiftingCountdown />
      <div className="flex justify-center items-center my-[80px]">
        <SplitText
          text="Results will be Announced soon..."
          className="text-2xl font-semibold text-center   "
          delay={70}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
    </div>
  );
};

export default page;
