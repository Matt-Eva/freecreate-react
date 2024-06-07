function SearchNav({ toggleSearch }: { toggleSearch: Function }) {
  return (
    <section
      id="searchNav"
      className="cols-start-1 col-span-2 flex justify-around h-10 w-full "
    >
      <button onClick={() => toggleSearch(true)} className="w-full ">
        Simple Search
      </button>
      <button onClick={() => toggleSearch(false)} className="w-full ">
        Advanced Search
      </button>
    </section>
  );
}

export default SearchNav;
