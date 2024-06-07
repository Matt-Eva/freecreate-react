import { useState } from "react";

import SearchBox from "./components/SearchBox/SearchBox";
import SearchResults from "./components/SearchResults";
import ScrollButton from "./components/ScrollButton";

function Home() {
  const [searchResults, setSearchResults] = useState([]);

  const updateSearchResults = (results: []) => {
    setSearchResults(results);
  };

  return (
    <main className="h-full w-full overflow-auto">
      <SearchBox />
      <SearchResults />
      <ScrollButton />
    </main>
  );
}

export default Home;
