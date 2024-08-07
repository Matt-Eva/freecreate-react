import styles from "./UserInfoForm.module.css";

function UserInfoForm({
  disabled,
  save,
}: {
  disabled: boolean;
  save: Function;
}) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save();
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={disabled} className={styles.fieldset}>
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
        <input type="submit" value="save" className={styles.submit} />
      </fieldset>
    </form>
  );
}

export default UserInfoForm;
