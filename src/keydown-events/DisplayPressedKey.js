import { useEffect, useState } from "react";

// Component for displaying the currently pressed key.
function DisplayPressedKey() {
  const [pressedKey, setPressedKey] = useState("");

  useEffect(function () {
    // Event handler for keydown event.
    const handleKey = (e) => {
      setPressedKey(e.key);
    };

    // Event handler for keyup event.
    const clearKey = (e) => {
      setPressedKey("");
    };
    // Event listeners for keydown and keyup events.
    window.addEventListener("keydown", handleKey);
    window.addEventListener("keyup", clearKey);

    // Cleanup function to remove event listeners when the component unmounts.
    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("keyup", clearKey);
    };
  }, []); // Run this effect only once on component mount.

  return (
    <div>
      <p>The key you are pressing right now is {pressedKey}.</p>
    </div>
  );
}

export default DisplayPressedKey;
