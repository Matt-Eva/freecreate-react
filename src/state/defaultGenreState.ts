import GenreObject from "../types/genreObject";

function getDefaultGenreState() {
  const defaultGenreState: GenreObject = {
    action: {
      selected: false,
      disabled: false,
      value: "Action",
      display: "Action",
    },
    adventure: {
      selected: false,
      disabled: false,
      value: "Adventure",
      display: "Adventure",
    },
    comedy: {
      selected: false,
      disabled: false,
      value: "Comedy",
      display: "Comedy",
    },
    drama: {
      selected: false,
      disabled: false,
      value: "Drama",
      display: "Drama",
    },
    historicalFiction: {
      selected: false,
      disabled: false,
      value: "HistoricalFiction",
      display: "Historical Fiction",
    },
    horror: {
      selected: false,
      disabled: false,
      value: "Horror",
      display: "Horror",
    },
    fantasy: {
      selected: false,
      disabled: false,
      value: "Fantasy",
      display: "Fantasy",
    },
    literaryFiction: {
      selected: false,
      disabled: false,
      value: "LiteraryFiction",
      display: "Literary Fiction",
    },
    magicalRealism: {
      selected: false,
      disabled: false,
      value: "MagicalRealism",
      display: "Magical Realism",
    },
    mystery: {
      selected: false,
      disabled: false,
      value: "Mystery",
      display: "Mystery",
    },
    realism: {
      selected: false,
      disabled: false,
      value: "Realism",
      display: "Realism",
    },
    romance: {
      selected: false,
      disabled: false,
      value: "Romance",
      display: "Romance",
    },
    sciFi: {
      selected: false,
      disabled: false,
      value: "ScienceFiction",
      display: "Science Fiction",
    },
    sliceOfLife: {
      selected: false,
      disabled: false,
      value: "SliceOfLife",
      display: "Slice of Life",
    },
    socialFiction: {
      selected: false,
      disabled: false,
      value: "SocialFiction",
      display: "Social Fiction",
    },
    superhero: {
      selected: false,
      disabled: false,
      value: "Superhero",
      display: "Superhero",
    },
    thriller: {
      selected: false,
      disabled: false,
      value: "Thriller",
      display: "Thriller",
    },
  };

  return defaultGenreState;
}

export default getDefaultGenreState;
