import { Link } from "react-router-dom";

function Published() {
  const displayCards = [];
  for (let i = 0; i < 10; i++) {
    displayCards.push(
      <div key={i}>
        Example
        <Link to="/edit-writing">edit</Link>
      </div>
    );
  }

  return (
    <div>
      Published
      {displayCards}
    </div>
  );
}

export default Published;
