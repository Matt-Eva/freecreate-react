import { Link } from "react-router-dom";

import styles from "./EditChapterCard.module.css";

function EditChapterCard({
  title,
  chapterNumber,
  uid,
}: {
  title: string;
  chapterNumber: number;
  uid: string;
}) {
  return (
    <article>
      <h4>{title}</h4>
      <p>{chapterNumber}</p>
      <Link to="/edit-chapter">edit</Link>
    </article>
  );
}

export default EditChapterCard;
