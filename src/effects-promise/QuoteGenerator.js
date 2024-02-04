// react imports
import { useEffect, useState } from "react";

// React component using hooks to fetch and display a random quote and its author.
function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(function () {
    // Fetch a quote from Quotable API when the component mounts.
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.author);
        setQuote(data.content);
      });
  }, []); // This effect will run only on the component mount

  return (
    <div>
      {quote} <br />-{author}
    </div>
  ); // Display the quote and author.
}

export default QuoteGenerator;
