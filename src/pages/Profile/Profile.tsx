import { useState } from "react";
import { Link } from "react-router-dom";
import UserInfoForm from "../../components/UserInfoForm/UserInfoForm";

import styles from "./Profile.module.css";

function Profile() {
  const [enableInfoEdit, setEnableInfoEdit] = useState(false);

  function enableEdit() {
    setEnableInfoEdit(true);
  }

  function disableEdit() {
    setEnableInfoEdit(false);
  }

  function saveUserInfo() {}

  return (
    <div className={styles.profile}>
      <Link to="/create-account">Create Account</Link>
      <Link to="/delete-account">Delete Account</Link>
      {enableInfoEdit ? (
        <button onClick={disableEdit} className={styles.toggleEdit}>
          cancel
        </button>
      ) : (
        <button onClick={enableEdit} className={styles.toggleEdit}>
          edit profile info
        </button>
      )}
      <UserInfoForm save={saveUserInfo} disabled={!enableInfoEdit} />
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
