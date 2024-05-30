import { useState } from "react";

function GenreSelect() {
  interface GenreObject {
    [index: string]: {
      selected: boolean;
      disabled: boolean;
      value: string;
    };
  }
  const defaultGenreState: GenreObject = {
    none: {
      selected: false,
      disabled: false,
      value: "None",
    },
    action: {
      selected: false,
      disabled: false,
      value: "Action",
    },
    adventure: {
      selected: false,
      disabled: false,
      value: "Adventure",
    },
    fantasy: {
      selected: false,
      disabled: false,
      value: "Fantasy",
    },
    sciFi: {
      selected: false,
      disabled: false,
      value: "ScienceFiction",
    },
    literary: {
      selected: false,
      disabled: false,
      value: "Literary",
    },
    romance: {
      selected: false,
      disabled: false,
      value: "Romance",
    },
    historical: {
      selected: false,
      disabled: false,
      value: "HistoricalFiction",
    },
    drama: {
      selected: false,
      disabled: false,
      value: "Drama",
    },
    magicalRealism: {
      selected: false,
      disabled: false,
      value: "MagicalRealism",
    },
    mystery: {
      selected: false,
      disabled: false,
      value: "Mystery",
    },
    thriller: {
      selected: false,
      disabled: false,
      value: "Thriller",
    },
    horror: {
      selected: false,
      disabled: false,
      value: "Horror",
    },
    comedy: {
      selected: false,
      disabled: false,
      value: "Comedy",
    },
    sliceOfLife: {
      selected: false,
      disabled: false,
      value: "SliceOfLife",
    },
    realism: {
      selected: false,
      disabled: false,
      value: "Realism",
    },
    social: {
      selected: false,
      disabled: false,
      value: "SocialFiction",
    },
    superhero: {
      selected: false,
      disabled: false,
      value: "Superhero",
    },
  };
  const [genres, setGenres] = useState(defaultGenreState);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);

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
      setSelectedGenres(updatedSelectedGenres);
    } else {
      const oneLess = selectedGenres.filter(
        (genre) => genre !== genres[name].value
      );
      setSelectedGenres(oneLess);
      for (const key in updated) {
        updated[key].disabled = false;
      }
    }

    setGenres(updated);
  };

  const displayGenres: React.ReactElement[] = [];

  for (const key in genres) {
    console.log(typeof key);
  }

  return (
    <ul>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="action"
          checked={genres.action.selected}
          disabled={genres.action.disabled}
        />
        Action
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="adventure"
          checked={genres.adventure.selected}
          disabled={genres.adventure.disabled}
        />
        Adventure
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="comedy"
          checked={genres.comedy.selected}
          disabled={genres.comedy.disabled}
        />
        Comedy
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="drama"
          checked={genres.drama.selected}
          disabled={genres.drama.disabled}
        />
        Drama
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="fantasy"
          checked={genres.fantasy.selected}
          disabled={genres.fantasy.disabled}
        />
        Fantasy
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="historical"
          checked={genres.historical.selected}
          disabled={genres.historical.disabled}
        />
        Historical Fiction
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="horror"
          checked={genres.horror.selected}
          disabled={genres.horror.disabled}
        />
        Horror
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="literary"
          checked={genres["literary"].selected}
          disabled={genres.literary.disabled}
        />
        Literary Fiction
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="magicalRealism"
          checked={genres.magicalRealism.selected}
          disabled={genres.magicalRealism.disabled}
        />
        Magical Realism
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="mystery"
          checked={genres.mystery.selected}
          disabled={genres.mystery.disabled}
        />
        Mystery
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="realism"
          checked={genres.realism.selected}
          disabled={genres.realism.disabled}
        />
        Realism
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="romance"
          checked={genres.romance.selected}
          disabled={genres.romance.disabled}
        />
        Romance
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="sciFi"
          checked={genres.sciFi.selected}
          disabled={genres.sciFi.disabled}
        />
        Science Fiction
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="sliceOfLife"
          checked={genres.sliceOfLife.selected}
          disabled={genres.sliceOfLife.disabled}
        />
        Slice of Life
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="social"
          checked={genres.social.selected}
          disabled={genres.social.disabled}
        />
        Social Fiction
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="superhero"
          checked={genres.superhero.selected}
          disabled={genres.superhero.disabled}
        />
        Superhero
      </li>
      <li>
        <input
          onChange={handleSelection}
          type="checkbox"
          name="thriller"
          checked={genres.thriller.selected}
          disabled={genres.thriller.disabled}
        />
        Thriller
      </li>
    </ul>
  );
}

export default GenreSelect;
