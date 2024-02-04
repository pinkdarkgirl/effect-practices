// react imports
import { useEffect, useState } from "react";

// React component using async function to fetch and display a quote and its author.
function QuoteGeneratorAsync() {
  const [status, setStatus] = useState(""); // State to track fetch status.
  const [error, setError] = useState(null);

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    async function fetchQuotes() {
      try {
        setStatus("loading"); // Set status to loading before the fetch.
        const res = await fetch("https://api.quotable.io/random");

        // Check if the response is successful, otherwise throw an error.
        if (!res.ok) {
          setStatus("error");
          throw new Error("failed to fetch data");
        }
        const data = await res.json(); // Parse the JSON response.

        // Check if data is empty or not.
        if (!data) {
          setStatus("empty");
        } else {
          setAuthor(data.author);
          setQuote(data.content);
          setStatus("success");
        }
      } catch (error) {
        setError(error);
        console.error("Error in fetchQuotes:", error);
      }
    }
    fetchQuotes(); // Call the fetch function when the component mounts.
  }, []);

  if (status === "loading") return <div>Loading...</div>; // Display loading message.

  if (status === "error") return <div>{error.message}</div>; // Display error message.

  if (status === "empty") return <div>There was no data available</div>; // Display message for empty data.

  return (
    <div>
      {quote} <br /> -{author}
    </div> // Display the fetched quote and author.
  );
}
export default QuoteGeneratorAsync;
