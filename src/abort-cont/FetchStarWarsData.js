// react imports
import { useEffect, useState } from "react";

// Base URL for Star Wars API.
const BASE_URL = "https://swapi.dev/api/";

// Component for fetching and displaying information about random Star Wars planets.
function FetchStarWarsData() {
  const [planetId, setPlanetId] = useState(5);
  const [isLoading, setIsLoading] = useState(false);
  const [planetData, setPlanetData] = useState({});

  // Function to handle button click and set a planet ID by random.
  const handleClick = () => setPlanetId(Math.floor(Math.random() * 60) + 1);

  useEffect(
    function () {
      // Create an abort controller to handle cleanup.
      const abortController = new AbortController();

      async function fetchPlanets() {
        try {
          setIsLoading(true);

          // Fetch planet data based on the current planet ID.
          const res = await fetch(`${BASE_URL}/planets/${planetId}`, {
            signal: abortController.signal,
          });

          const data = await res.json(); // Parse the JSON response.

          // Check if the request was not aborted and update the state with the fetched data.
          if (!abortController.signal.aborted) {
            setPlanetData(data);
            console.log(data);
            console.log(planetId);
          }
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("aborted request by the user");
          } else {
            console.log(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }

      fetchPlanets();

      // Cleanup function to abort controller when the component unmounts or planetId changes.
      return () => abortController.abort();
    },
    [planetId] // Run this effect whenever the planetId changes.
  );

  return (
    <div>
      <h2>
        Click to button to get information about a random Star Wars planet!
      </h2>
      <button onClick={handleClick}>CLICK</button>

      {isLoading || !planetData ? (
        <p>Please wait for data to load...</p>
      ) : (
        <div>
          <h3>{planetData.name}</h3>
          <p>
            {planetData.name}'s climate is {planetData.climate} and the
            landscape is {planetData.terrain}.
          </p>
        </div>
      )}
    </div>
  );
}

export default FetchStarWarsData;
