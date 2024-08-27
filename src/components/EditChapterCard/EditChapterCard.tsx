import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "./EditChapterCard.module.css";

function EditChapterCard({
  title,
  chapterNumber,
  uid,
  writingId,
}: {
  title: string;
  chapterNumber: number;
  uid: string;
  writingId: string;
}) {
  const [number, setNumber] = useState(chapterNumber);
  const [inputNumber, setInputNumber] = useState("");

  function updateInputNumber(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    const intVal = parseInt(target.value);
    if (intVal > 0) {
      setInputNumber(target.value);
    }
  }

  async function updateChapterNumber(e: React.FormEvent) {
    e.preventDefault();
    const patchBody = {
      chapterId: uid,
      writingId: writingId,
      newNumber: parseInt(inputNumber),
    };

    try {
      const res = await fetch("/api/chapter/number", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchBody),
      });
      if (res.ok) {
        const data = await res.json();
        setNumber(data.newNumber);
      } else {
        const err = await res.text();
        throw new Error(err);
      }
    } catch (e) {
      console.error(e);
    }
    setInputNumber("");
  }

  return (
    <article>
      <h4>{title}</h4>
      <p>chapter number: {number}</p>
      <form onSubmit={updateChapterNumber}>
        <label>edit chapter number</label>
        <input type="number" value={inputNumber} onChange={updateInputNumber} />
        <input type="submit" value="save" />
      </form>
      <Link to="/edit-chapter">edit</Link>
    </article>
  );
}

export default EditChapterCard;
