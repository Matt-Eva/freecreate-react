import { useState } from "react";
import Tag from "./Tag";

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
    <div>
      <form onSubmit={addTag}>
        <label>Add Tag</label>
        <input
          type="text"
          value={tag}
          onChange={(e) => updateTag(e.target.value)}
          disabled={inputDisabled}
        />
        <input type="submit" value="add tag" />
      </form>
      <div>{displayTags}</div>
    </div>
  );
}

export default TagInput;
