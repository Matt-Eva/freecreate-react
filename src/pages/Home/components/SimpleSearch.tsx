import { useState } from "react";
import WritingTypeSelect from "./GenreSelect/WritingTypeSelect";
import GenreSelect from "./GenreSelect/GenreSelect";

function SimpleSearch() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [writingType, setWritingType] = useState<string>("ShortStory");

  const updateWritingType = (newType: string) => {
    setWritingType(newType);
  };

  const updateSelectedGenres = (newGenres: string[]) => {
    setSelectedGenres(newGenres);
  };

  console.log(selectedGenres);
  return (
    <section>
      <WritingTypeSelect
        writingType={writingType}
        updateWritingType={updateWritingType}
      />
      <label>Date posted</label>
      <select>
        <option>All time</option>
        <option>Past Year</option>
        <option>Past Month</option>
        <option>Past Week</option>
        <option>Past Day</option>
        <option>Most Recent</option>
      </select>
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
    </section>
  );
}

export default SimpleSearch;
