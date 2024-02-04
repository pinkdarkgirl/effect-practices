// react imports
import { useEffect, useState } from "react";

// React component using hooks to fetch and display a cat fact from CatFact API.
function CatFactGenerator() {
  const [catFact, setCatFact] = useState("");

  useEffect(function () {
    // Fetch a cat fact from CatFact API when the component mounts.
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((data) => setCatFact(data.fact));
  }, []); // Run this effect only once on component mount.

  return <div>{catFact}</div>; // Display the fetched cat fact in a div.
}

export default CatFactGenerator;
