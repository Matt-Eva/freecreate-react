import styles from "./NewChapterForm.module.css";

function NewChapterForm({
  creatorId,
  writingId,
  disabled,
}: {
  creatorId: string;
  writingId: string;
  disabled: boolean;
}) {
  function addNewChapter(e: React.FormEvent) {
    e.preventDefault();
    console.log(creatorId);
    console.log(writingId);
  }

  return (
    <section>
      <h3>Add Chapter</h3>
      <form className={styles.chapterForm} onSubmit={addNewChapter}>
        <label>Chapter Title</label>
        <input type="text" disabled={disabled} />
        <label>Chapter Number</label>
        <input type="text" placeholder="chapter number" disabled={disabled} />
        <input type="submit" value="create" disabled={disabled} />
      </form>
    </section>
  );
}

export default NewChapterForm;
