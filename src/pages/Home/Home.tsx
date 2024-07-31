// import { useState } from "react";

import SearchBox from "../../components/SearchBox/SearchBox";
import SearchResults from "../../components/SearchResults";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

import styles from "./Home.module.css";

function Home() {
  // const [searchResults, setSearchResults] = useState([]);

  // const updateSearchResults = (results: []) => {
  //   setSearchResults(results);
  // };

  return (
    <main className={styles.home}>
      <SearchBox />
      <SearchResults />
      <ScrollButton />
    </main>
  );
}

export default Home;
