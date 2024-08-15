import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WritingInfo from "../../components/WritingInfo/WritingInfo";

import styles from "./NewWriting.module.css";

function NewWriting() {
  const [writingType, setWritingType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [font, setFont] = useState("Helvetica");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();

  function updateWritingType(type: string) {
    setWritingType(type);
  }

  function updateTitle(t: string) {
    setTitle(t);
  }

  function updateDescription(d: string) {
    setDescription(d);
  }

  function updateFont(f: string) {
    setFont(f);
  }

  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
  }

  function updateTags(tags: string[]) {
    setTags(tags);
  }

  function save() {
    // navigate("/edit-writing");
  }

  return (
    <div className={styles.container}>
      <WritingInfo
        updateFont={updateFont}
        font={font}
        writingType={writingType}
        updateWritingType={updateWritingType}
        title={title}
        updateTitle={updateTitle}
        description={description}
        updateDescription={updateDescription}
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
        tags={tags}
        updateTags={updateTags}
        save={save}
        isNew={true}
        editable={true}
      />
    </div>
  );
}

export default NewWriting;
