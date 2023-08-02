import React, { useState, useEffect } from "react";
import Clock from "./Clock";

const Timer = () => {
  const [seconds, setSeconds] = useState(60);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => setIsActive(!isActive);

  const reset = () => {
    setSeconds(60);
    setIsActive(false);
  };

  return (
    <div className="Timer">
      <Clock seconds={seconds} isActive={isActive} />
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
