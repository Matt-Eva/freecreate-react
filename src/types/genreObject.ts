interface GenreObject {
  [index: string]: {
    selected: boolean;
    disabled: boolean;
    value: string;
    display: string;
  };
}

export default GenreObject;
