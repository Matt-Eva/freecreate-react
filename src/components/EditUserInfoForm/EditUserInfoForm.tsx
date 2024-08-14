import { useState } from "react";
import { useAppDispatch } from "../../store";
import { updateUser } from "../../state/userSlice";

import { User } from "../../types/user";

import styles from "./EditUserInfoForm.module.css";

function EditUserInfoForm({ user }: { user: User }) {
  const [frozen, setFrozen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [userInfo, setUserInfo] = useState(user);

  const dispatch = useAppDispatch();

  function enableEdit() {
    setDisabled(false);
  }

  function disableEdit() {
    setDisabled(true);
    setUserInfo(user);
  }

  function handleChange(e: React.FormEvent<HTMLFormElement>) {
    const target = e.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDisabled(true);
    setFrozen(true);
    try {
      const res = await fetch("/api/user", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });
      if (res.ok) {
        const data = await res.json();
        dispatch(updateUser(data));
        alert("info updated!");
      } else {
        const error = await res.json();
        console.error(error);
      }
      setFrozen(false);
    } catch (e) {
      console.error(e);
      setFrozen(false);
    }
  }

  return (
    <>
      {disabled ? (
        <button onClick={enableEdit} disabled={frozen}>
          edit info
        </button>
      ) : (
        <button onClick={disableEdit}>cancel</button>
      )}
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <fieldset disabled={disabled} className={styles.fieldset}>
          <label>Username</label>
          <input type="text" value={userInfo.username} name="username" />
          <label>UserId</label>
          <input type="text" value={userInfo.userId} name="userId" />
          <label>Email</label>
          <input type="text" value={userInfo.email} name="email" />
          <label>Birth Day</label>
          <input type="number" value={userInfo.birthDay} name="birthDay" />
          <label>Birth Month</label>
          <input type="number" value={userInfo.birthMonth} name="birthMonth" />
          <label>Birth Year</label>
          <input type="number" value={userInfo.birthYear} name="birthYear" />
          <input type="submit" value="save" className={styles.submit} />
        </fieldset>
      </form>
    </>
  );
}

export default EditUserInfoForm;
