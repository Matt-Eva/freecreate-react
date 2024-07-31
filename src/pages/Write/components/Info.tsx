import { useState } from "react";
import Editor from "./Editor/Editor";
import TypeSelect from "./TypeSelect";
import GenreSelect from "./GenreSelect/GenreSelect";
import TagInput from "./TagInput";
import FontSelect from "./FontSelect";

function Info({
  writingType,
  updateWritingType,
  title,
  updateTitle,
  description,
  updateDescription,
  selectedGenres,
  updateSelectedGenres,
  tags,
  updateTags,
}: {
  writingType: string;
  updateWritingType: Function;
  title: string;
  updateTitle: Function;
  description: string;
  updateDescription: Function;
  selectedGenres: string[];
  updateSelectedGenres: Function;
  tags: string[];
  updateTags: Function;
}) {
  return (
    <div>
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
      <TagInput tags={tags} updateTags={updateTags} />
    </div>
  );
}

export default Info;
