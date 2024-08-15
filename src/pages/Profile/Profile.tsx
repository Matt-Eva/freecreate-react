import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { populateUserCreators } from "../../state/userCreatorSlice";

import UserInfoForm from "../../components/EditUserInfoForm/EditUserInfoForm";
import UserCreatorCard from "../../components/UserCreatorCard/UserCreatorCard";

import styles from "./Profile.module.css";

function Profile() {
  const userCreatorState = useAppSelector((state) => state.userCreators.value);
  const userState = useAppSelector((state) => state.user.value);

  const dispatch = useAppDispatch();

  const displayCreators = userCreatorState.creators.map((creator) => {
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
      if (res.ok) {
        const data = await res.json();
        dispatch(populateUserCreators(data));
      } else {
        const err = await res.text();
        console.error(err);
      }
    }
    if (!userCreatorState.isFetched) {
      fetchUserCreators();
    }
  }, [userState]);

  async function logout() {
    try {
      await fetch("/api/logout", { method: "DELETE" });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className={styles.profile}>
      {userState.isFetched ? (
        <>
          <button onClick={logout} disabled={false}>
            logout
          </button>
          <Link to="/delete-account">Delete Account</Link>
          <section>
            <h2>User Info</h2>
            <UserInfoForm user={userState.user} />
          </section>
          <section>
            <h2>Creator Profiles</h2>
            <Link to="/new-creator-profile">Add Creator Profile</Link>
            {displayCreators}
          </section>
        </>
      ) : (
        <Link to="/create-account">Create Account</Link>
      )}
    </div>
  );
}

export default Profile;
