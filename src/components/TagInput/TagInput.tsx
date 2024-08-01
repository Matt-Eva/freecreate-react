import { useState } from "react";
import Tag from "../Tag";

import styles from "./TagInput.module.css";

function TagInput({
  tags,
  updateTags,
}: {
  tags: string[];
  updateTags: Function;
}) {
  const [tag, setTag] = useState("");

  const displayTags = tags.map((tag) => {
    return <Tag key={tag} tag={tag} deleteTag={deleteTag} />;
  });

  const inputDisabled = tags.length >= 20;

  function updateTag(t: string) {
    const lower = t.toLocaleLowerCase();
    const split = lower.split(" ");
    const joined = split.join("-");
    setTag(joined);
  }

  function addTag(e: React.FormEvent) {
    e.preventDefault();

    const exists = tags.find((t) => t === tag);
    if (!exists) {
      const newTags = [...tags, tag];
      updateTags(newTags);
    }

    setTag("");
  }

  function deleteTag(t: string) {
    const less = tags.filter((tag) => tag !== t);
    updateTags(less);
  }

  return (
    <section className={styles.container}>
      <form onSubmit={addTag} className={styles.form}>
        <label>Add Tag</label>
        <div className={styles.inputBox}>
          <input
            type="text"
            value={tag}
            onChange={(e) => updateTag(e.target.value)}
            disabled={inputDisabled}
            className={styles.textInput}
          />
          <input type="submit" value="add tag" className={styles.submit} />
        </div>
      </form>
      <div className={styles.tagBox}>{displayTags}</div>
    </section>
  );
}

export default TagInput;
