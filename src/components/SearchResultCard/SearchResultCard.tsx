import { Link } from "react-router-dom";

function SearchResultCard() {
  return (
    <div>
      <p>Title</p>
      <p>Author</p>
      <p>Genres</p>
      <p>Description</p>
      <button>Add to reading list</button>
      <Link to="/read">read</Link>
    </div>
  );
}

export default SearchResultCard;
