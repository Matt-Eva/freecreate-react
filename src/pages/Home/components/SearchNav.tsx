function SearchNav({ toggleSearch }: { toggleSearch: Function }) {
  return (
    <section className="flex justify-around w-full bg-red-50 divide-x divide-black">
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
