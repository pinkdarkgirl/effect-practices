// react imports
import { useEffect, useState } from "react";

// React component using hooks to create a clock component.
function ClockComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(
    function () {
      // Set up an interval to increment seconds every second.
      const intervalId = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
        console.log(`${seconds} seconds have passed...`); // Log how many seconds have passed.
      }, 1000);

      // Clean up the interval on component unmount to avoid memory leaks.
      return () => clearInterval(intervalId);
    },
    [seconds] // This effect will run whenever the "seconds" state changes.
  );

  return <div></div>;
}

export default ClockComponent;
