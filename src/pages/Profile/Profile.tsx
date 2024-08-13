import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserInfoForm from "../../components/UserInfoForm/UserInfoForm";
import UserCreatorCard from "../../components/UserCreatorCard/UserCreatorCard";

import { UserCreator } from "../../types/userCreator";

import styles from "./Profile.module.css";

function Profile() {
  const [enableInfoEdit, setEnableInfoEdit] = useState(false);
  const [creators, setCreators] = useState<UserCreator[]>([]);

  const displayCreators = creators.map((creator) => {
    return (
      <UserCreatorCard
        key={creator.uid}
        uid={creator.uid}
        name={creator.name}
        creatorId={creator.creatorId}
      />
    );
  });

  useEffect(() => {
    async function fetchUserCreators() {
      const res = await fetch("/api/user/creators");
      const data = await res.json();
      setCreators(data);
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
        {displayCreators}
      </section>
    </div>
  );
}

export default Profile;
