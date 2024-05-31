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
    } else {
      const oneLess = selectedGenres.filter(
        (genre) => genre !== genres[name].value
      );
      updateSelectedGenres(oneLess);

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
        <label htmlFor={key}>{genres[key].value}</label>
      </li>
    );
  }

  return <ul>{displayGenres}</ul>;
}

export default GenreSelect;
