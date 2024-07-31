import SearchResultCard from "./SearchResultCard/SearchResultCard";
function SearchResults() {
  const exampleDisplay = [];
  for (let i = 0; i < 100; i++) {
    exampleDisplay.push(<SearchResultCard key={i} />);
  }
  return <div>{exampleDisplay}</div>;
}

export default SearchResults;
