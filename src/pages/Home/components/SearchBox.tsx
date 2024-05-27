import { useState } from "react";
import SearchNav from "./SearchNav";
import SimpleSearch from "./SimpleSearch";
import AdvancedSearch from "./AdvancedSearch";

function SearchBox() {
  const [simpleSearch, setSimpleSearch] = useState(true);

  const toggleSearch = (bool: boolean) => {
    setSimpleSearch(bool);
  };

  const search = simpleSearch ? <SimpleSearch /> : <AdvancedSearch />;

  return (
    <section>
      <SearchNav toggleSearch={toggleSearch} />
      {search}
    </section>
  );
}

export default SearchBox;
