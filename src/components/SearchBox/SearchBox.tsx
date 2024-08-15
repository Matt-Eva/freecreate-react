import { useState } from "react";
import SearchNav from "../SearchNav/SearchNav";
import SearchLevelSelect from "../SearchLevelSelect";
import SearchTypeSelect from "../SearchTypeSelect/SearchTypeSelect";
import WritingTypeSelect from "../WritingTypeSelect/WritingTypeSelect";
import DateSelect from "../DateSelect/DateSelect";
import WriterSearchInput from "../WriterSearchInput/WriterSearchInput";
import WritingSearchInput from "../TitleInput/TitleInput";
import GenreSelect from "../GenreSelect/GenreSelect";
import TagInput from "../TagInput/TagInput";

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
      let writingTitleQuery = "";
      if (writingTitle !== "") {
        writingTitleQuery += `&writingTitle=${writingTitle}`;
      }
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
    <section id="searchBox" className={styles.grid}>
      <SearchNav toggleSearch={toggleSearch} />
      <section className={styles.allButGenre}>
        {/* <SearchLevelSelect toggleSearch={toggleSearch} /> */}
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
            disabled={false}
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
            disabled={false}
          />
        ) : null}
        {simpleSearch ? null : (
          <TagInput tags={tags} updateTags={updateTags} tagLimit={5} />
        )}
      </section>
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
      <button onClick={search} className={styles.searchButton}>
        search
      </button>
    </section>
  );
}

export default SearchBox;
