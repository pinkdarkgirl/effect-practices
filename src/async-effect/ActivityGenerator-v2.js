// react imports
import { useEffect, useState } from "react";

function ActivityGeneratorAsync() {
  const [activity, setActivity] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect hook to fetch activity data when the component mounts
  useEffect(() => {
    async function fetchActivity() {
      try {
        // Start loading
        setIsLoading(true);

        // Fetch activity data from the API
        const res = await fetch("https://www.boredapi.com/api/activity");
        const data = await res.json();

        // Update the  state with the fetched data
        setActivity(data.activity);
      } catch (err) {
        // Handle errors during data fetching
        console.log("Error fetching activity data.", err.message);
        setError("Failed to fetch the data. Please try again later...");
      } finally {
        // Stop loading, regardless of success or failure
        setIsLoading(false);
      }
    }
    // Call the fetchActivity function when the component mounts
    fetchActivity();
  }, []);

  return (
    <div>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        error
      ) : (
        <p>
          <span>🎉</span>Here's an activity idea if you're bored: {activity}!
        </p>
      )}
    </div>
  );
}

export default ActivityGeneratorAsync;
