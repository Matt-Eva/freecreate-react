import { Link } from "react-router-dom";
import Editor from "../components/Editor/Editor";

function EditChapter() {
  return (
    <div>
      <Link to="/edit-writing">Back</Link>
      <label>Chapter title</label>
      <input type="text" />
      <button>Publish</button>
      <Editor font="Helvetica" readOnly={false} />
    </div>
  );
}

export default EditChapter;
