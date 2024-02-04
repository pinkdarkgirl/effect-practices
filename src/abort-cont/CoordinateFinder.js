// react imports
import { useEffect, useState } from "react";

// Component for finding and displaying coordinates on click.
function CoordinateFinder() {
  const [horizontalCoordinate, setHorizontalCoordinate] = useState(0);
  const [verticalCoordinate, setVerticalCoordinate] = useState(0);

  useEffect(function () {
    // Create an abort controller to handle cleanup.
    const controller = new AbortController();

    // Event handler for the click event.
    const handleClick = (e) => {
      setHorizontalCoordinate(e.clientX);
      setVerticalCoordinate(e.clientY);
    };

    // Event listener for click event.
    document.addEventListener("click", handleClick);

    // Cleanup function to abort controller and remove event listener when the component unmounts.
    return () => {
      controller.abort();
      document.removeEventListener("click", handleClick);
    };
  }, []); // Run this effect only once on component mount.

  return (
    <div>
      <h2>Click anywhere on the page to see the coordinates!</h2>
      <p>
        Coordinates Client X/Y are: {horizontalCoordinate} {verticalCoordinate}
      </p>
    </div>
  );
}

export default CoordinateFinder;
