import { Link, useOutletContext } from "react-router-dom";

import Writing from "../../types/writing";

import styles from "./Drafts.module.css";

function Drafts() {
  const { drafts }: { drafts: Writing[] } = useOutletContext();
  const displayCards = drafts.map((d) => {
    return (
      <div key={d.uid}>
        <p>{d.title}</p>
        <p>{d.author}</p>
        <p>{d.uniqueAuthorName}</p>
        <Link to={`/edit-writing/${d.uid}`}>edit</Link>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      Drafts
      {displayCards}
    </div>
  );
}

export default Drafts;
