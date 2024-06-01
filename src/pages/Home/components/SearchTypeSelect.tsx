function SearchTypeSelect({
  searchType,
  updateSearchType,
}: {
  searchType: string;
  updateSearchType: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    updateSearchType(target.value);
  };
  return (
    <section className="col-start-1 grid w-20">
      <label>Search for: </label>
      <select value={searchType} onChange={handleChange}>
        <option value="writing">Writing</option>
        <option value="writers">Writers</option>
      </select>
    </section>
  );
}

export default SearchTypeSelect;
