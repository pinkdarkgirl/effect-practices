// react imports
import { useEffect, useState } from "react";

// React component using hooks to fetch and display a random activity from BoredAPI.
function ActivityGenerator() {
  const [activity, setActivity] = useState("");

  useEffect(function () {
    // Fetch a random activity from BoredAPI when the component mounts.
    fetch("https://www.boredapi.com/api/activity")
      .then((res) => res.json())
      .then((data) => setActivity(data.activity));
  }, []); // Run this effect only once on component mount.

  return <div>{activity}</div>; // Display the fetched activity in a div.
}

export default ActivityGenerator;
