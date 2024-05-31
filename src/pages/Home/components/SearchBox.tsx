import { useState } from "react";
import SearchNav from "./SearchNav";
import SearchTypeSelect from "./SearchTypeSelect";
import WritingTypeSelect from "./WritingTypeSelect";
import DateSelect from "./DateSelect";
import WriterSearchInput from "./WriterSearchInput";
import GenreSelect from "./GenreSelect/GenreSelect";
import TagInput from "./TagInput";

function SearchBox() {
  const [simpleSearch, setSimpleSearch] = useState(true);
  const [searchType, setSearchType] = useState("writing");
  const [writerName, setWriterName] = useState("");
  const [writingType, setWritingType] = useState<string>("ShortStory");
  const [date, setDate] = useState<string>("All time");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const toggleSearch = (bool: boolean) => {
    setSimpleSearch(bool);
    if (bool) {
      setSearchType("writing");
    }
  };

  const updateSearchType = (newType: string) => {
    setSearchType(newType);
  };

  const updateWriterName = (newName: string) => {
    setWriterName(newName);
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

  const updateTags = (newTags: string[]) => {
    setTags(newTags);
  };

  const search = async () => {
    const searchTypeQuery = `?type=${searchType}`;
    const writingQuery = `&writing=${writingType}`;
    const dateQuery = `&date=${date}`;
    let genreQuery = "";
    for (const genre of selectedGenres) {
      genreQuery += `&genre=${genre}`;
    }
    const query = writingQuery + dateQuery + genreQuery;
    // const res = await fetch(`/api/search${query}`);
    // const data = await res.json();
    // console.log(data);
  };

  return (
    <section>
      <SearchNav toggleSearch={toggleSearch} />
      {simpleSearch ? null : (
        <SearchTypeSelect
          searchType={searchType}
          updateSearchType={updateSearchType}
        />
      )}
      {searchType === "writing" ? (
        <WritingTypeSelect
          writingType={writingType}
          updateWritingType={updateWritingType}
        />
      ) : null}
      {searchType === "writing" ? (
        <DateSelect date={date} updateDate={updateDate} />
      ) : null}
      {searchType === "writers" ? (
        <WriterSearchInput
          writerName={writerName}
          updateWriterName={updateWriterName}
        />
      ) : null}
      {simpleSearch ? null : <TagInput tags={tags} updateTags={updateTags} />}
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
