function SearchNav({ toggleSearch }: { toggleSearch: Function }) {
  return (
    <section id="searchNav">
      <button onClick={() => toggleSearch(true)}>Simple Search</button>
      <button onClick={() => toggleSearch(false)}>Advanced Search</button>
    </section>
  );
}

export default SearchNav;
