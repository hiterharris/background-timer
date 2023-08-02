import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Clock = ({ seconds, isActive }) => {
  return (
    <CountdownCircleTimer
      isPlaying={isActive}
      duration={seconds}
      colors={["#2641d4", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      strokeWidth={20}
      trailStrokeWidth
    >
      {({ remainingTime }) => `${remainingTime}`}
    </CountdownCircleTimer>
  );
};

export default Clock;
