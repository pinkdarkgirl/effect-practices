import { useEffect, useState } from "react";

// Component for entering a Pokemon name and triggering a search.
export function PokemonForm({ setQuery }) {
  // Handling the form submission by preventing default behaviour and updating the query state.
  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(e.target.querySelector("input").value.toLowerCase());
  };

  // Form for entering a Pokemon name for searching.
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pokemonName">
        Please enter a Pokemon name:
        <input id="pokemonName" type="text" />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

// Component for fetching and displaying Pokemon data based on the searched name of Pokemon.
export function FetchPokemonData({ setQuery, query }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        setIsLoading(true); // Set loading to true before the fetch.

        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`
        );

        // If the response is  not successful throw an error.
        if (!res.ok) throw new Error("There was no Pokémon by this name...");

        const data = await res.json(); // Parse the JSON response.
        setData(data); // Set the fetched Pokemon data.
      } catch (err) {
        setError(err);
        console.log(err.message);
      } finally {
        setIsLoading(false); // Set loading to false after fetch completion.
      }
    }
    // Fetch Pokemon data only if the query is not empty.
    if (query.trim() !== "") {
      fetchPokemonData();
    }
  }, [query]); // Run this effect whenever the query changes.

  return (
    <div>
      {isLoading && !error && <p>Please wait for it...</p>}
      {data && data.abilities ? (
        <div>
          <ul>
            The abilities this Pokémon may have are:
            {data.abilities.map((item) => (
              <li key={item.ability.name}>{item.ability.name}</li>
            ))}
          </ul>
          <p>
            The base experience gained for defeating this Pokémon is{" "}
            {data.base_experience}!
          </p>
        </div>
      ) : (
        <p>
          {error
            ? error.message
            : "Enter a valid Pokemon name and click Search."}
        </p>
      )}
    </div>
  );
}
