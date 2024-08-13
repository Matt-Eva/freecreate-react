import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserInfoForm from "../../components/UserInfoForm/UserInfoForm";

import styles from "./Profile.module.css";

function Profile() {
  const [enableInfoEdit, setEnableInfoEdit] = useState(false);

  useEffect(() => {
    async function fetchUserCreators() {
      const res = await fetch("/api/user/creators");
      const data = await res.json();
      console.log(data);
    }
    fetchUserCreators();
  }, []);

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
      <section>
        <h2>User Info</h2>
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
      </section>
      <section>
        <h2>Creator Profiles</h2>
        <Link to="/new-creator-profile">Add Creator Profile</Link>
        <ul>
          <li>
            example profile
            <Link to="/edit-creator/1/1">edit</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Profile;
