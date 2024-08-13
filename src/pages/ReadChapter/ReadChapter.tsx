import { Link } from "react-router-dom";
import FullScreenButton from "../../components/FullScreenButton";
function ReadChapter() {
  return (
    <div>
      <Link to="/read">Back</Link>

      <h2>Book title</h2>
      <button>previous chapter</button>
      <button>like</button>
      <button>add to library</button>
      <button>add to reading list</button>
      <button>follow</button>
      <button>subscribe</button>
      <button>next chapter</button>
      <div id="fullscreen-container">
        <FullScreenButton />
        <h3>Chapter Title</h3>
      </div>
    </div>
  );
}

export default ReadChapter;
