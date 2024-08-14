import UserInfoForm from "../../components/EditUserInfoForm/EditUserInfoForm";

import styles from "./CreateAccount.module.css";

function CreateAccount() {
  function save(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div>
      <h2 className={styles.header}>Create Account</h2>
      <form onSubmit={save}>
        <fieldset className={styles.fieldset}>
          <label>Username</label>
          <input type="text" />
          <label>UserId</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Birth Day</label>
          <input type="number" />
          <label>Birth Month</label>
          <input type="number" />
          <label>Birth Year</label>
          <input type="number" />
          <label>Password</label>
          <input type="password" />
          <label>Confirm Password</label>
          <input type="password" />
          <input type="submit" value="save" className={styles.submit} />
        </fieldset>
      </form>
    </div>
  );
}

export default CreateAccount;
