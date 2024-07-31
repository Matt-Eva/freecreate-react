function SearchResults() {
  const exampleDisplay = [];
  for (let i = 0; i < 100; i++) {
    exampleDisplay.push(<p key={i}>Example</p>);
  }
  return <div>{exampleDisplay}</div>;
}

export default SearchResults;
