import { useState } from "react";
import Editor from "./components/Editor/Editor";
import styles from "./Write.module.css";
import TypeSelect from "./components/TypeSelect";
import GenreSelect from "./components/GenreSelect";
import TagInput from "./components/TagInput";

function Write() {
  const [writingType, setWritingType] = useState("flashFiction");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const showEditor = writingType !== "collection";

  function updateWritingType(type: string) {
    setWritingType(type);
  }
  function updateTitle(t: string) {
    setTitle(t);
  }
  function updateDescription(d: string) {
    setDescription(d);
  }
  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
  }

  return (
    <div className={styles.write}>
      <TypeSelect
        writingType={writingType}
        updateWritingType={updateWritingType}
      />
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => updateTitle(e.target.value)}
      />
      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => updateDescription(e.target.value)}
      />
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
      <TagInput />
      {showEditor ? <Editor /> : null}
    </div>
  );
}

export default Write;
