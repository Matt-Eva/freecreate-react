import styles from "./FontSelect.module.css";

function FontSelect({
  font,
  updateFont,
}: {
  font: string;
  updateFont: Function;
}) {
  function handleUpdate(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    updateFont(target.value);
  }

  return (
    <div className={styles.container}>
      <label>Font</label>
      <select value={font} onChange={handleUpdate}>
        <option>Helvetica</option>
        <option>Verdana</option>
        <option>Lora</option>
        <option>Times New Roman</option>
        {/* <option>IM Fell English</option> */}
        <option>Georgia</option>
      </select>
    </div>
  );
}

export default FontSelect;
