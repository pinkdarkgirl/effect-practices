//react imports
import React, { useState } from "react";

// News API key for authentication.
const KEY = "5e39e55a60b94008b3f848fb319cb867";

// Component for fetching and displaying news data.
function NewsFeedComponent() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false); // State to track whether data has been successfully fetched.

  // Create an abort controller for handling cleanup.
  const controller = new AbortController();

  // Function to fetch news data from the API.
  const fetchNewsData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=federal&sortBy=publishedAt&apiKey=${KEY}`,
        { signal: controller.signal }
      );
      const data = await res.json(); // Parse the JSON response.

      // Update state with the fetched articles and set isFetched to true.
      setArticles(data.articles);
      setIsFetched(true);
    } catch (error) {
      setIsFetched(false);
      if (error.name === "AbortError") {
        console.log("Request aborted.");
      } else {
        console.log(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Event handler for fetching data.
  const handleFetchClick = () => fetchNewsData();

  // Event handler for aborting data fetch.
  const handleAbortClick = () => {
    controller.abort();
    setIsFetched(false);
  };

  return (
    <>
      {isLoading && <p>Data is loading...</p>}

      <button onClick={handleFetchClick}>Fetch Data</button>
      <button onClick={handleAbortClick}>Abort Data</button>

      {isFetched && articles && articles.length > 0 ? (
        <ul>
          {articles.map(({ title, content, description }, index) => (
            <li key={index}>
              <h3>{title}</h3>
              <p>
                {content}
                {description}
              </p>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default NewsFeedComponent;
