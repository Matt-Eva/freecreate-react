import WritingTypeSelect from "../WritingTypeSelect/WritingTypeSelect";
import GenreSelect from "../GenreSelect/GenreSelect";
import TitleInput from "../TitleInput/TitleInput";
import TagInput from "../TagInput/TagInput";
import FontSelect from "../FontSelect";

import styles from "./WritingInfo.module.css";
import Editor from "../Editor/Editor";

function WritingInfo({
  writingType,
  updateWritingType,
  title,
  updateTitle,
  description,
  updateDescription,
  selectedGenres,
  updateSelectedGenres,
  tags,
  updateTags,
}: {
  writingType: string;
  updateWritingType: Function;
  title: string;
  updateTitle: Function;
  description: string;
  updateDescription: Function;
  selectedGenres: string[];
  updateSelectedGenres: Function;
  tags: string[];
  updateTags: Function;
}) {
  return (
    <section className={styles.container}>
      <section className={styles.allButGenre}>
        <section className={styles.creatorSelect}>
          <label>Creator Profile</label>
          <select></select>
        </section>
        <WritingTypeSelect
          writingType={writingType}
          updateWritingType={updateWritingType}
        />
        <TitleInput writingTitle={title} updateWritingTitle={updateTitle} />
        <section className={styles.description}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
            style={{ padding: "5px" }}
          />
        </section>
        <TagInput tags={tags} updateTags={updateTags} />
      </section>
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
      <button>save</button>
      <form>
        <label>Add chapter</label>
        <input type="text" placeholder="chapter title" disabled={true} />
        <input type="text" placeholder="chapter number" disabled={true} />
        <input type="submit" value="start writing!" disabled={true} />
      </form>
      <FontSelect font="Helvetica" updateFont={() => {}} />
      <label>Test out font</label>
      <Editor font="Helvetica" readOnly={false} />
    </section>
  );
}

export default WritingInfo;
