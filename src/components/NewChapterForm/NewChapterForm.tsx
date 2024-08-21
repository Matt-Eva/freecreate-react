import { useState } from "react";

import styles from "./NewChapterForm.module.css";

function NewChapterForm({
  writingId,
  disabled,
}: {
  writingId: string;
  disabled: boolean;
}) {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  function updateTitle(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
    setErrors([]);
  }

  function updateNumber(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const intVal = parseInt(target.value);
    setErrors([]);
    if (intVal > 0) {
      setNumber(target.value);
    }
  }

  function addNewChapter(e: React.FormEvent) {
    e.preventDefault();
    console.log(writingId);
    if (title === "") {
      setErrors([...errors, "title cannot be empty"]);
    }
    if (number === "") {
      setErrors([...errors, "chapter number cannot be empty"]);
    }
    if (title && number) {
    }
  }

  const displayErrors = errors.map((e) => <span key={e}>{e}</span>);

  return (
    <section>
      <h3>Add Chapter</h3>
      <form className={styles.chapterForm} onSubmit={addNewChapter}>
        <label>Chapter Title</label>
        <input
          type="text"
          value={title}
          onChange={updateTitle}
          disabled={disabled}
        />
        <label>Chapter Number</label>
        <input
          type="number"
          value={number}
          onChange={updateNumber}
          disabled={disabled}
        />
        <input type="submit" value="create" disabled={disabled} />
      </form>
      {displayErrors}
    </section>
  );
}

export default NewChapterForm;
