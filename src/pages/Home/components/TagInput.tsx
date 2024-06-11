import { useState } from "react";
import TagButton from "./TagButton";

function TagInput({
  tags,
  updateTags,
}: {
  tags: string[];
  updateTags: Function;
}) {
  const [tagInput, setTagInput] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const wordArray = target.value.toLowerCase().split(" ");
    const tag = wordArray.join("-");
    setTagInput(tag);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tagEntered = tags.find((tag) => tag === tagInput);
    if (!tagEntered) {
      const newTags = [...tags, tagInput];
      if (newTags.length === 5) {
        setDisabled(true);
      }
      updateTags(newTags);
    }
    setTagInput("");
  };

  const removeTag = (tag: string) => {
    const oneLess = tags.filter((t) => t !== tag);
    updateTags(oneLess);
    setDisabled(false);
  };

  const tagButtons = tags.map((tag) => (
    <TagButton key={tag} tag={tag} removeTag={removeTag} />
  ));

  return (
    <section className="col-start-1 grid">
      <form onSubmit={handleSubmit} className="grid w-40">
        <label>Add up to 5 tags:</label>
        <input
          type="text"
          value={tagInput}
          onChange={handleChange}
          disabled={disabled}
          className="row-start-2 w-28"
        />
        <input
          type="submit"
          value="add"
          disabled={disabled}
          className="row-start-2 border border-solid border-black px-0.5"
        />
      </form>
      <section className="w-40 h-12 bg-gray-100 mt-1 rounded-lg overflow-auto">
        {tagButtons}
      </section>
    </section>
  );
}

export default TagInput;
