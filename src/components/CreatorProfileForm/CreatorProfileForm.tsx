import styles from "./CreatorProfileForm.module.css";

function CreatorProfileForm({
  save,
  name,
  id,
  about,
  updateName,
  updateId,
  updateAbout,
}: {
  save: Function;
  name: string;
  id: string;
  about: string;
  updateName: Function;
  updateId: Function;
  updateAbout: Function;
}) {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    save();
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Creator name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => updateName(e.target.value)}
        />
        <label>Creator Id</label>
        <input
          type="text"
          value={id}
          onChange={(e) => updateId(e.target.value)}
        />
        <label>About</label>
        <input
          type="text"
          value={about}
          onChange={(e) => updateAbout(e.target.value)}
        />
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
