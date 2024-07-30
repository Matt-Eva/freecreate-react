function TypeSelect({
  writingType,
  updateWritingType,
}: {
  writingType: string;
  updateWritingType: Function;
}) {
  return (
    <div>
      <label>Writing Type</label>
      <select
        value={writingType}
        onChange={(e) => updateWritingType(e.target.value)}
      >
        <option value="flashFiction">Flash Fiction</option>
        <option value="shortStory">Short Story</option>
        <option value="novelette">Novelette</option>
        <option value="novella">Novella</option>
        <option value="novel">Novel</option>
        <option value="collection">Collection</option>
        <option value="universe">Fictional Universe</option>
      </select>
    </div>
  );
}

export default TypeSelect;
