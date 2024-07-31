function SearchLevelSelect({ toggleSearch }: { toggleSearch: Function }) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;

    target.value === "simple" ? toggleSearch(true) : toggleSearch(false);
  };

  return (
    <section>
      <label>Search Type: </label>
      <select onChange={handleChange}>
        <option value="simple">Simple</option>
        <option value="advanced">Advanced</option>
      </select>
    </section>
  );
}

export default SearchLevelSelect;
