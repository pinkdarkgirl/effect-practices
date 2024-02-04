import { useEffect, useState } from "react";

// Component for showing the keys pressed in an input field.
function KeyLogger() {
  const [keyInput, setKeyInput] = useState("");
  const [keyLogs, setKeyLogs] = useState([]);

  useEffect(function () {
    // Event handler for keydown event.
    const handleLogKey = (e) => {
      setKeyLogs((prevKeyLogs) => [...prevKeyLogs, e.code]); // Log the pressed key to the array.
    };

    // Event listener for keydown event.
    window.addEventListener("keydown", handleLogKey);

    // Cleanup function to remove event listener when the component unmounts.
    return () => {
      window.removeEventListener("keydown", handleLogKey);
    };
  }, []); // Run this effect only once on component mount.

  return (
    <div>
      <input
        value={keyInput}
        maxLength={20}
        placeholder="press down a key.."
        onChange={(e) => setKeyInput(e.target.value)}
      />
      <p>{keyLogs.join(", ")}</p>
    </div>
  );
}

export default KeyLogger;
