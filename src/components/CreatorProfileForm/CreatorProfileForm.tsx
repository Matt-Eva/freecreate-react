import styles from "./CreatorProfileForm.module.css";

function CreatorProfileForm() {
  return (
    <div>
      <form className={styles.form}>
        <label>Creator name</label>
        <input type="text" />
        <label>Creator Id</label>
        <input type="text" />
        <input type="submit" value="save" className={styles.submit} />
      </form>
      <p>
        The creator id serves as a unique identifier for this creator profile on
        the platform.
      </p>
      <p>
        Multiple creators can have the same creator name, but cannot have the
        same creator id.
      </p>
      <p>Both your creator name and creator id will be publicly visible.</p>
    </div>
  );
}

export default CreatorProfileForm;
