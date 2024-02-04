import { useEffect, useState } from "react";

// React component for dynamically updating the document title based on user input.
function DynamicTitleComponent() {
  const [showTitleInput, setShowTitleInput] = useState(false); // State for toggling title input
  const [userInput, setUserInput] = useState(""); // State for storing the user input for title

  useEffect(() => {
    // Update document title if showTitleInput is true and userInput is not an empty string.
    if (showTitleInput && userInput !== "") {
      document.title = userInput;
    }

    // Cleanup function to reset document title.
    return () => {
      document.title = "Practice App";
    };
  }, [userInput, showTitleInput]); // This effect will run whenever userInput or showTitleInput changes.

  // Toggle showTitleInput state when the button is clicked.
  const handleClick = () => setShowTitleInput(!showTitleInput);

  return (
    <>
      <button onClick={handleClick}>
        {showTitleInput ? "Hide Title Input" : "Show Title Input"}
      </button>
      {showTitleInput ? (
        <input
          value={userInput}
          placeholder="please enter a title for the page"
          onChange={(e) => setUserInput(e.target.value)}
        />
      ) : null}
    </>
  );
}

export default DynamicTitleComponent;
