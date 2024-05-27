function SearchNav({ toggleSearch }: { toggleSearch: Function }) {
  return (
    <section className="flex justify-around w-full bg-red-50">
      <button
        onClick={() => toggleSearch(true)}
        className="border-solid border-2 w-full"
      >
        Simple Search
      </button>
      <button
        onClick={() => toggleSearch(false)}
        className="border-solid border-2 w-full"
      >
        Advanced Search
      </button>
    </section>
  );
}

export default SearchNav;
