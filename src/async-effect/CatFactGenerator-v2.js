// react imports
import { useEffect, useState } from "react";

// React component using async function to fetch and display a cat fact from CatFact API.
function CatFactGeneratorAsync() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [catFact, setCatFact] = useState("");

  useEffect(() => {
    // Async function to fetch cat fact data.
    async function fetchFact() {
      try {
        setIsLoading(true);
        const res = await fetch("https://catfact.ninja/fact");

        // Check if the response is successful, otherwise throw an error.
        if (!res.ok) throw new Error("Failed to fetch data");

        const data = await res.json(); // Parse the JSON response.
        setCatFact(data.fact);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false); // Set loading to false after fetch completion.
      }
    }
    fetchFact(); // Call the fetch function when the component mounts.
  }, []); // Run this effect only once on component mount.

  return (
    <div>
      {isLoading && "Loading..."}
      {error && error}
      {!isLoading && !error && catFact}
      {/* Display the cat fact if no loading or error. */}
    </div>
  );
}

export default CatFactGeneratorAsync;
