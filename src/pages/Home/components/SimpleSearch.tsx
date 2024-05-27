import { useState } from "react";

function SimpleSearch() {
  const defaultGenreState = {
    none: {
      selected: false,
      disabled: false,
      value: "None",
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
      value: "Historical",
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
  };
  const [genres, setGenres] = useState(defaultGenreState);

  const handleSelection = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    console.log(target.name);
  };

  return (
    <section>
      <ul>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
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
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
        <li>
          <input
            onChange={handleSelection}
            type="checkbox"
            name="none"
            checked={genres.none.selected}
            disabled={genres.none.disabled}
          />
          None
        </li>
      </ul>
    </section>
  );
}

export default SimpleSearch;
