import { useState } from "react";

import { defaultGenreState } from "./UtilsGenreSelect";

function GenreSelect({
  selectedGenres,
  updateSelectedGenres,
}: {
  selectedGenres: string[];
  updateSelectedGenres: Function;
}) {
  const [genres, setGenres] = useState(defaultGenreState);
  const [displaySelectedGenres, setDisplaySelectedGenres] = useState<string[]>(
    []
  );

  const handleSelection = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const name: string = target.name;
    const selected = !genres[name].selected;
    const updated = {
      ...genres,
      [name]: { ...genres[name], selected: selected },
    };

    if (selected && selectedGenres.length < 3) {
      const updatedSelectedGenres = [...selectedGenres, genres[name].value];
      const updatedDisplaySelectedGenres = [
        ...displaySelectedGenres,
        genres[name].display,
      ];

      if (updatedSelectedGenres.length === 3) {
        for (const key in updated) {
          const value = updated[key].value;
          let isSelected = false;
          for (const genre of updatedSelectedGenres) {
            if (value === genre) {
              isSelected = true;
            }
          }
          updated[key].disabled = !isSelected;
        }
      }

      updateSelectedGenres(updatedSelectedGenres);
      setDisplaySelectedGenres(updatedDisplaySelectedGenres);
    } else {
      const oneLess = selectedGenres.filter(
        (genre) => genre !== genres[name].value
      );
      const oneLessDisplay = displaySelectedGenres.filter(
        (genre) => genre !== genres[name].value
      );

      updateSelectedGenres(oneLess);
      setDisplaySelectedGenres(oneLessDisplay);

      for (const key in updated) {
        updated[key].disabled = false;
      }
    }

    setGenres(updated);
  };

  const displayGenres: React.ReactElement[] = [];
  for (const key in genres) {
    displayGenres.push(
      <li key={key}>
        <input
          onChange={handleSelection}
          type="checkbox"
          name={key}
          checked={genres[key].selected}
          disabled={genres[key].disabled}
        />
        <label htmlFor={key}>{genres[key].display}</label>
      </li>
    );
  }

  const selectedGenresString = displaySelectedGenres.join(", ");

  return (
    <section>
      <label>Select up to 3 Genres</label>
      <ul className="h-[237px] mt-1 px-3 overflow-auto bg-gray-100 rounded-lg">
        {displayGenres}
      </ul>
      <section className="h-8 mt-2 px-3 bg-gray-200 rounded-lg overflow-auto">
        {selectedGenresString}
      </section>
    </section>
  );
}

export default GenreSelect;
