import { Link } from "react-router-dom";
import FullScreenButton from "../../components/FullScreenButton";
function ReadChapter() {
  return (
    <div>
      <Link to="/read">Back</Link>
      ReadChapter
      <div id="fullscreen-container">
        <FullScreenButton />
      </div>
    </div>
  );
}

export default ReadChapter;
