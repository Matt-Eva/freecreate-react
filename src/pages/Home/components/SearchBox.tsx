import { useState } from "react";
import SearchNav from "./SearchNav";

function SearchBox() {
  const [simpleSearch, setSimpleSearch] = useState(true);

  return (
    <section>
      <SearchNav />
    </section>
  );
}

export default SearchBox;
