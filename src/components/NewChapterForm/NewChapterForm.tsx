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
        <input type="text" />
        <label>Chapter Number</label>
        <input type="text" placeholder="chapter number" />
        <input type="submit" value="create" />
      </form>
    </section>
  );
}

export default NewChapterForm;
