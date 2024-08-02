import styles from "./WritingTypeSelect.module.css";

function WritingTypeSelect({
  writingType,
  updateWritingType,
}: {
  writingType: string;
  updateWritingType: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    console.log(target.value);
    updateWritingType(target.value);
  };
  return (
    <section className={styles.container}>
      <label>Writing type</label>
      <select value={writingType} onChange={handleChange}>
        {/* <option value="flashFiction">Flash Fiction</option> */}
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
