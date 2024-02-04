// react imports
import { useState } from "react";

// component imports
import QuoteGenerator from "./effects-promise/QuoteGenerator";
import ActivityGenerator from "./effects-promise/ActivityGenerator";
import CatFactGenerator from "./effects-promise/CatFactGenerator";

import QuoteGeneratorAsync from "./async-effect/QuoteGenerator-v2";
import ActivityGeneratorAsync from "./async-effect/ActivityGenerator-v2";
import CatFactGeneratorAsync from "./async-effect/CatFactGenerator-v2";

import ClockComponent from "./dependency-array/ClockComponent";
import DynamicTitleComponent from "./dependency-array/DynamicTitleComponent";
import {
  PokemonForm,
  FetchPokemonData,
} from "./dependency-array/PokemonFetcher";

import KeyboardShortcutCounter from "./keydown-events/KeyboardShortcutCounter";
import DisplayPressedKey from "./keydown-events/DisplayPressedKey";
import KeyLogger from "./keydown-events/KeyLogger";

import FetchStarWarsData from "./abort-cont/FetchStarWarsData";
import NewsFeedComponent from "./abort-cont/NewsFeedComponent";
import CoordinateFinder from "./abort-cont/CoordinateFinder";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      {/*introduction to useEffect with promise chaining*/}
      {/* <div>
        <QuoteGenerator />
        <ActivityGenerator />
        <CatFactGenerator />
      </div> */}
      {/*useEffect data fetching with async functions, loading state and error handling*/}
      {/* <div>
        <QuoteGeneratorAsync /> 
        <ActivityGeneratorAsync /> 
         <CatFactGeneratorAsync />
      </div> */}
      {/* practice of useEffect and the dependency array */}
      {/* <div>
        <ClockComponent /> 
        <DynamicTitleComponent />
        <>
          <PokemonForm setQuery={setQuery} />
          <FetchPokemonData query={query} setQuery={setQuery} />
        </>
      </div> */}
      {/* keypress events with useEffect */}
      {/* <div>
        <KeyboardShortcutCounter />
        <DisplayPressedKey />
        <KeyLogger />
      </div> */}
      {/* react cleanup using abort controller  */}
      <div>
        {/* <FetchStarWarsData /> */}
        {/* <CoordinateFinder /> */}
        {/* <NewsFeedComponent /> */}
      </div>
    </>
  );
}

export default App;
