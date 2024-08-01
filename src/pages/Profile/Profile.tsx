import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <p>username</p>
      <p>displayName</p>
      <label>Creator Profiles</label>
      <ul>
        <li>
          example profile
          <Link to="/edit-creator/1/1">edit</Link>
        </li>
      </ul>
      <Link to="/new-creator-profile">Add Creator Profile</Link>
    </div>
  );
}

export default Profile;
