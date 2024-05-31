import { useState } from "react";
import GenreSelect from "./GenreSelect/GenreSelect";

function SimpleSearch() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const updateSelectedGenres = (newGenres: string[]) => {
    setSelectedGenres(newGenres);
  };

  console.log(selectedGenres);
  return (
    <section>
      <label>Writing type</label>
      <select>
        <option>Short Story</option>
        <option>Novel</option>
      </select>
      <label>Date posted</label>
      <select>
        <option>All time</option>
        <option>Past Year</option>
        <option>Past Month</option>
        <option>Past Week</option>
        <option>Past Day</option>
        <option>Most Recent</option>
      </select>
      <label>Select up to 3 genres</label>
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
    </section>
  );
}

export default SimpleSearch;
