import styles from "./WriterSearchInput.module.css";

function WriterSearchInput({
  writerName,
  updateWriterName,
}: {
  writerName: string;
  updateWriterName: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateWriterName(target.value.toLowerCase());
  };
  return (
    <section className={styles.container}>
      <label>Writer Name:</label>
      <input type="text" value={writerName} onChange={handleChange} />
    </section>
  );
}

export default WriterSearchInput;
