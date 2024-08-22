import { useState } from "react";

import Chapter from "../../types/chapter";

import styles from "./NewChapterForm.module.css";

function NewChapterForm({
  writingId,
  disabled,
  addChapter,
}: {
  writingId: string;
  disabled: boolean;
  addChapter: Function;
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

  async function createChapter(e: React.FormEvent) {
    e.preventDefault();

    if (title === "") {
      setErrors([...errors, "title cannot be empty"]);
    }

    if (number === "") {
      setErrors([...errors, "chapter number cannot be empty"]);
    }

    if (title && number) {
      try {
        const postBody = {
          writingId: writingId,
          title: title,
          chapterNumber: parseInt(number),
        };
        const res = await fetch("/api/chapter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postBody),
        });

        if (res.ok) {
          const data: Chapter = await res.json();
          console.log(data);
          addChapter({
            title: data.title,
            writingId: data.writingId,
            chapterNumber: data.chapterNumber,
            uid: data.uid,
            content: {},
          });
          alert("chapter created!");
          setNumber("");
          setTitle("");
        } else {
          const err = await res.text();
          console.error(err);
          if (res.status === 422) {
            setErrors([...errors, err]);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  const displayErrors = errors.map((e) => <span key={e}>{e}</span>);

  return (
    <section>
      <h2>Add Chapter</h2>
      <form className={styles.chapterForm} onSubmit={createChapter}>
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
