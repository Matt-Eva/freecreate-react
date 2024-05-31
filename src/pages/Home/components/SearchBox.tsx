import { useState } from "react";
import SearchNav from "./SearchNav";
import WritingTypeSelect from "./WritingTypeSelect";
import DateSelect from "./DateSelect";
import GenreSelect from "./GenreSelect/GenreSelect";

function SearchBox() {
  const [simpleSearch, setSimpleSearch] = useState(true);
  const [writingType, setWritingType] = useState<string>("ShortStory");
  const [date, setDate] = useState<string>("All time");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const toggleSearch = (bool: boolean) => {
    setSimpleSearch(bool);
  };

  const updateWritingType = (newType: string) => {
    setWritingType(newType);
  };

  const updateDate = (newDate: string) => {
    setDate(newDate);
  };

  const updateSelectedGenres = (newGenres: string[]) => {
    setSelectedGenres(newGenres);
  };

  const search = async () => {
    const writingQuery = `?type=${writingType}`;
    const dateQuery = `&date=${date}`;
    let genreQuery = "";
    for (const genre of selectedGenres) {
      genreQuery += `&genre=${genre}`;
    }
    const query = writingQuery + dateQuery + genreQuery;
    const res = await fetch(`/api/search${query}`);
    const data = await res.json();
    console.log(data);
  };

  return (
    <section>
      <SearchNav toggleSearch={toggleSearch} />
      <WritingTypeSelect
        writingType={writingType}
        updateWritingType={updateWritingType}
      />
      <DateSelect date={date} updateDate={updateDate} />
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
      <button onClick={search} className="border border-solid border-black">
        search
      </button>
    </section>
  );
}

export default SearchBox;
