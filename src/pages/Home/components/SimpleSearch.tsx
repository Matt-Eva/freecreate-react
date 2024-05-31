import { useState } from "react";
import WritingTypeSelect from "./WritingTypeSelect";
import DateSelect from "./DateSelect";
import GenreSelect from "./GenreSelect/GenreSelect";

// all api queries from this component can be run periodically and cached
function SimpleSearch() {
  const [writingType, setWritingType] = useState<string>("ShortStory");
  const [date, setDate] = useState<string>("All time");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

  const updateWritingType = (newType: string) => {
    setWritingType(newType);
  };

  const updateDate = (newDate: string) => {
    setDate(newDate);
  };

  const updateSelectedGenres = (newGenres: string[]) => {
    setSelectedGenres(newGenres);
  };

  return (
    <section>
      <WritingTypeSelect
        writingType={writingType}
        updateWritingType={updateWritingType}
      />
      <DateSelect date={date} updateDate={updateDate} />
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
    </section>
  );
}

export default SimpleSearch;
