import { Link } from "react-router-dom";

import styles from "./ChapterCard.module.css";

function ChapterCard() {
  return (
    <div>
      ChapterCard
      <Link to="/read-chapter">Read Chapter</Link>
    </div>
  );
}

export default ChapterCard;
