import { useEffect, useState } from "react";

// Component for counting how many times a keyboard shortcut has been pressed.
function KeyboardShortcutCounter() {
  const [shortcutCount, setShortcutCount] = useState(0);

  useEffect(
    function () {
      // Event handler for the keydown event.
      function callback(e) {
        if (e.code === "Space") {
          setShortcutCount((c) => c + 1); // Increment shortcut count by 1 when Space key is pressed.
          console.log(`You have clicked the Space key ${shortcutCount} times!`);
        }
      }

      // Event listener for keydown event.
      document.addEventListener("keydown", callback);

      // Cleanup function to remove event listener when the component unmounts or shortcutCount state changes.
      return () => {
        document.removeEventListener("keydown", callback);
      };
    },
    [shortcutCount] // Run this effect whenever shortcutCount changes.
  );

  return (
    <div>
      <h4>Press the Space key to increase the shortcut count!</h4>
      <p>Shortcut Count: {shortcutCount}</p>
    </div>
  );
}

export default KeyboardShortcutCounter;
