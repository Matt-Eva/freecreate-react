import { useState } from "react";

import GenreObject from "../../types/genreObject";

import styles from "./GenreSelect.module.css";

function GenreSelect({
  selectedGenres,
  updateSelectedGenres,
  genres,
  updateGenres,
  disabled,
}: {
  selectedGenres: string[];
  updateSelectedGenres: Function;
  genres: GenreObject;
  updateGenres: Function;
  disabled: boolean;
}) {
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

    updateGenres(updated);
  };

  const displayGenres: React.ReactElement[] = [];
  for (const key in genres) {
    const isDisabled = disabled ? disabled : genres[key].disabled;
    displayGenres.push(
      <li key={key}>
        <input
          onChange={handleSelection}
          type="checkbox"
          name={key}
          checked={genres[key].selected}
          disabled={isDisabled}
          className={styles.checkbox}
        />
        <label htmlFor={key} className={styles.genreLabel}>
          {genres[key].display}
        </label>
      </li>
    );
  }

  const selectedGenresString = selectedGenres.join(", ");

  return (
    <div className={styles.container}>
      <label className={styles.label}>Select up to 3 Genres</label>
      <ul>{displayGenres}</ul>
      <div className={styles.selectedGenres}>{selectedGenresString}</div>
    </div>
  );
}

export default GenreSelect;
