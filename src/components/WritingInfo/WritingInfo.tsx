import WritingTypeSelect from "../WritingTypeSelect/WritingTypeSelect";
import GenreSelect from "../GenreSelect/GenreSelect";
import TitleInput from "../TitleInput/TitleInput";
import TagInput from "../TagInput/TagInput";
import FontSelect from "../FontSelect/FontSelect";

import styles from "./WritingInfo.module.css";
import Editor from "../Editor/Editor";
import { Link } from "react-router-dom";

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
      <h2 className={styles.header}>Writing Info</h2>
      <div>
        <div className={styles.creatorSelect}>
          <label>Creator Profile</label>
          <select></select>
        </div>
        <div className={styles.writingSelect}>
          <WritingTypeSelect
            writingType={writingType}
            updateWritingType={updateWritingType}
          />
        </div>
        <div className={styles.titleInput}>
          <TitleInput writingTitle={title} updateWritingTitle={updateTitle} />
        </div>
        <div className={styles.description}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
          />
        </div>
        <div className={styles.fontSelect}>
          <FontSelect font="Helvetica" updateFont={() => {}} />
        </div>
        <div className={styles.editor}>
          <Editor
            font="Helvetica"
            readOnly={false}
            displayFullscreen={false}
            placeHolder="Test out font"
          />
        </div>
      </div>
      <div>
        <div className={styles.genreSelect}>
          <GenreSelect
            selectedGenres={selectedGenres}
            updateSelectedGenres={updateSelectedGenres}
          />
        </div>
        <div className={styles.tagInput}>
          <TagInput tags={tags} updateTags={updateTags} />
        </div>
      </div>
      <button className={styles.saveButton}>save</button>
      <div className={styles.chapterSection}>
        <h2>Chapters</h2>
        <section>
          <h3>Add Chapter</h3>
          <form className={styles.chapterForm}>
            <label>Chapter Title</label>
            <input type="text" disabled={true} />
            <label>Chapter Number</label>
            <input type="text" placeholder="chapter number" disabled={true} />
            <input type="submit" value="create" disabled={true} />
          </form>
        </section>
        <div>
          <div>
            <h3>Chapter title</h3>
            <p>Chapter number</p>
            <Link to="/edit-chapter">Edit</Link>
            <form>
              <label>Edit chapter number</label>
              <input type="number" />
              <input type="submit" value="save" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WritingInfo;
