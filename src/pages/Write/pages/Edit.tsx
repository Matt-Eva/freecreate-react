import { useState, useRef } from "react";
import Info from "../components/Info";
import Editor from "../components/Editor/Editor";
import FontSelect from "../components/FontSelect";

function Edit() {
  const [writingType, setWritingType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [font, setFont] = useState("Helvetica");
  const timeoutRef = useRef(0);

  function handleSave() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = 0;
    } else {
      const id = window.setTimeout(() => {
        console.log("saved!");
      }, 3000);
      timeoutRef.current = id;
    }
  }

  function updateWritingType(type: string) {
    setWritingType(type);
    handleSave();
  }
  function updateTitle(t: string) {
    setTitle(t);
    handleSave();
  }
  function updateDescription(d: string) {
    setDescription(d);
    handleSave();
  }
  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
    handleSave();
  }
  function updateTags(tags: string[]) {
    setTags(tags);
    handleSave();
  }
  function updateFont(f: string) {
    setFont(f);
    handleSave();
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
      <FontSelect font={font} updateFont={updateFont} />
      <Editor font={font} />
    </div>
  );
}

export default Edit;
