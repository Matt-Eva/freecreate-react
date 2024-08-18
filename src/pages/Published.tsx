import { Link, useOutletContext } from "react-router-dom";

import Writing from "../types/writing";

function Published() {
  const { published }: { published: Writing[] } = useOutletContext();
  const displayCards = published.map((p) => {
    return (
      <div key={p.uid}>
        {p.title}
        <Link to={`/edit-writing/${p.creatorId}/${p.uid}`}>edit</Link>
      </div>
    );
  });

  return (
    <div>
      Published
      {displayCards}
    </div>
  );
}

export default Published;
