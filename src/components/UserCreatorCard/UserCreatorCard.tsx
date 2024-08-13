import { Link } from "react-router-dom";

import styles from "./UserCreatorCard.module.css";

function UserCreatorCard({
  name,
  creatorId,
  uid,
}: {
  name: string;
  creatorId: string;
  uid: string;
}) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{creatorId}</p>
      <Link to={`/edit-creator/${uid}`}>edit</Link>
    </article>
  );
}

export default UserCreatorCard;
