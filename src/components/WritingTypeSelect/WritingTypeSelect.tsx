import styles from "./WritingTypeSelect.module.css";

function WritingTypeSelect({
  writingType,
  updateWritingType,
  disabled,
  allowAny,
}: {
  writingType: string;
  updateWritingType: Function;
  disabled: boolean;
  allowAny: boolean;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    updateWritingType(target.value);
  };
  return (
    <section className={styles.container}>
      <label>Writing type</label>
      <select value={writingType} onChange={handleChange} disabled={disabled}>
        {/* <option value="flashFiction">Flash Fiction</option> */}
        {allowAny ? <option value="">Any</option> : null}
        <option value="shortStory">Short Story</option>
        <option value="novelette">Novelette</option>
        <option value="novella">Novella</option>
        <option value="novel">Novel</option>
        {/* <option value="series">Series</option>
        <option value="collection">Collection</option>
        <option value="universe">Fictional Universe</option> */}
      </select>
    </section>
  );
}

export default WritingTypeSelect;
