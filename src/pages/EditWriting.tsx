import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/WritingInfo";

import FontSelect from "../components/FontSelect";

function EditWriting() {
  const [writingType, setWritingType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [font, setFont] = useState("Helvetica");

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
  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
  }
  function updateTags(tags: string[]) {
    setTags(tags);
  }
  function updateFont(f: string) {
    setFont(f);
  }

  function handleInfoSave() {
    console.log("saving");
  }

  function addNewChapter() {
    navigate("/new-chapter");
  }

  return (
    <div>
      <Info
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
      />
      <button onClick={handleInfoSave}>Save changes</button>
      <button onClick={addNewChapter}>New Chapter</button>
      <FontSelect font={font} updateFont={updateFont} />
    </div>
  );
}

export default EditWriting;
