import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor/Editor";

function Chapter() {
  const navigate = useNavigate();

  function saveChapter() {
    navigate("/edit-chapter");
  }
  return (
    <div>
      <label>Chapter title</label>
      <input type="text" />
      <button onClick={saveChapter}>create</button>
      <Editor font="Helvetica" readOnly={true} />
    </div>
  );
}

export default Chapter;