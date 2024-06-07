import { useState } from "react";
import SearchNav from "../SearchNav";
import SearchTypeSelect from "../SearchTypeSelect";
import WritingTypeSelect from "../WritingTypeSelect";
import DateSelect from "../DateSelect";
import WriterSearchInput from "../WriterSearchInput";
import WritingSearchInput from "../WritingSearchInput";
import GenreSelect from "../GenreSelect/GenreSelect";
import TagInput from "../TagInput";

import styles from "./SearchBox.module.css";

function SearchBox() {
  const [simpleSearch, setSimpleSearch] = useState(true);
  const [searchType, setSearchType] = useState("writing");
  const [writerName, setWriterName] = useState("");
  const [writingType, setWritingType] = useState<string>("ShortStory");
  const [writingTitle, setWritingTitle] = useState("");
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

  const updateWritingTitle = (newTitle: string) => {
    setWritingTitle(newTitle);
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
    const searchTypeQuery = `?searchType=${searchType}`;
    let genreQuery = "";
    for (const genre of selectedGenres) {
      genreQuery += `&genre=${genre}`;
    }
    let tagQuery = "";
    for (const tag of tags) {
      tagQuery += `&tag=${tag}`;
    }
    if (searchType === "writing") {
      const writingTypeQuery = `&writingType=${writingType}`;
      const writingTitleQuery = `&writingTitle=${writingTitle}`;
      const dateQuery = `&date=${date}`;
      const query =
        searchTypeQuery +
        writingTypeQuery +
        writingTitleQuery +
        dateQuery +
        genreQuery +
        tagQuery;
      const res = await fetch(`/api/search${query}`);
      const data = await res.json();
      console.log(data);
    } else {
      const writerNameQuery = `&writerName=${writerName}`;
      const query = searchTypeQuery + genreQuery + tagQuery + writerNameQuery;
      const res = await fetch(`/api/search${query}`);
      const data = await res.json();
      console.log(data);
    }
  };

  return (
    <section className={`${styles.grid} border-b border-black`}>
      <SearchNav toggleSearch={toggleSearch} />
      <section>
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
        {!simpleSearch && searchType === "writing" ? (
          <WritingSearchInput
            writingTitle={writingTitle}
            updateWritingTitle={updateWritingTitle}
          />
        ) : null}
        {simpleSearch ? null : <TagInput tags={tags} updateTags={updateTags} />}
      </section>
      <section>
        <GenreSelect
          selectedGenres={selectedGenres}
          updateSelectedGenres={updateSelectedGenres}
        />
      </section>
      <button
        onClick={search}
        className="col-span-2 justify-self-end m-4 border border-solid border-black"
      >
        search
      </button>
    </section>
  );
}

export default SearchBox;
