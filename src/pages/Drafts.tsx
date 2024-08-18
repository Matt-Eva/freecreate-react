import { Link, useOutletContext } from "react-router-dom";

import Writing from "../types/writing";

function Drafts() {
  const drafts: Writing[] = useOutletContext();
  console.log(drafts);
  const displayCards = drafts.map((d) => {
    return (
      <div key={d.uid}>
        {d.title}
        <Link to={`/edit-writing/${d.creatorId}/${d.uid}`}>edit</Link>
      </div>
    );
  });

  return (
    <div>
      Drafts
      {displayCards}
    </div>
  );
}

export default Drafts;
