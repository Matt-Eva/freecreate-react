import { useNavigate, Link } from "react-router-dom";
import Editor from "../components/Editor/Editor";

function Chapter() {
  const navigate = useNavigate();

  function saveChapter(e: React.FormEvent) {
    e.preventDefault();
    navigate("/edit-chapter");
  }
  return (
    <div>
      <Link to="/edit-writing">Back</Link>
      <form onSubmit={saveChapter}>
        <label>Chapter title</label>
        <input type="text" />
        <button onClick={saveChapter}>create</button>
      </form>
      <Editor font="Helvetica" readOnly={true} />
    </div>
  );
}

export default Chapter;
