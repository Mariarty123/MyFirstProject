import "./Tick.css";
import { useState, useEffect } from "react";

const Tick = () => {
  const [nowTime, setNowTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(new Date());
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  let second = "rotate(" + Math.round(nowTime.getSeconds() * 6) + "deg)";
  let minute = "rotate(" + Math.round(nowTime.getMinutes() * 6) + "deg)";
  let hour = "rotate(" + Math.round(nowTime.getHours() * 30) + "deg)";
  return (
    <div className="wrap">
      <span className="hour" style={{ transform: hour }}></span>
      <span className="minute" style={{ transform: minute }}></span>
      <span className="second" style={{ transform: second }}></span>
      <span className="dot"></span>
    </div>
  );
};
export default Tick;
