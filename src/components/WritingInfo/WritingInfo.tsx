import { useState } from "react";
import { Link } from "react-router-dom";
import WritingTypeSelect from "../WritingTypeSelect/WritingTypeSelect";
import GenreSelect from "../GenreSelect/GenreSelect";
import TitleInput from "../TitleInput/TitleInput";
import TagInput from "../TagInput/TagInput";
import FontSelect from "../FontSelect/FontSelect";
import Editor from "../Editor/Editor";
import UserCreatorSelect from "../UserCreatorSelect/UserCreatorSelect";

import { UserCreator } from "../../types/userCreator";

import styles from "./WritingInfo.module.css";
import GenreObject from "../../types/genreObject";

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
  save,
  isNew,
  editable,
  updateFont,
  font,
  userCreators,
  userCreatorUid,
  updateUserCreatorUid,
  genres,
  updateGenres,
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
  save: Function;
  isNew: boolean;
  editable: boolean;
  updateFont: Function;
  font: string;
  userCreators: UserCreator[];
  userCreatorUid: string;
  updateUserCreatorUid: Function;
  genres: GenreObject;
  updateGenres: Function;
}) {
  const [isEditable, setIsEditable] = useState(editable);

  function makeEditable() {
    setIsEditable(true);
  }

  function disableEdit() {
    setIsEditable(false);
  }

  function handleSave() {
    save();
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Writing Info</h2>
      <div>
        <div className={styles.creatorSelect}>
          <UserCreatorSelect
            disabled={!editable}
            userCreatorUid={userCreatorUid}
            updateUserCreatorUid={updateUserCreatorUid}
            userCreators={userCreators}
          />
        </div>
        <div className={styles.writingSelect}>
          <WritingTypeSelect
            allowAny={false}
            writingType={writingType}
            updateWritingType={updateWritingType}
            disabled={!isEditable}
          />
        </div>
        <div className={styles.titleInput}>
          <TitleInput
            writingTitle={title}
            updateWritingTitle={updateTitle}
            disabled={!isEditable}
          />
        </div>
        <div className={styles.description}>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
          />
        </div>
        <div className={styles.fontSelect}>
          <FontSelect font={font} updateFont={updateFont} />
        </div>
        <div className={styles.editor}>
          <Editor
            font={font}
            readOnly={false}
            displayFullscreen={false}
            placeHolder="Test out font"
          />
        </div>
      </div>
      <div>
        <div className={styles.genreSelect}>
          <GenreSelect
            updateGenres={updateGenres}
            genres={genres}
            selectedGenres={selectedGenres}
            updateSelectedGenres={updateSelectedGenres}
          />
        </div>
        <div className={styles.tagInput}>
          <TagInput tags={tags} updateTags={updateTags} tagLimit={20} />
        </div>
      </div>
      <div className={styles.buttonBox}>
        <button onClick={handleSave} className={styles.saveButton}>
          save
        </button>
        {isNew ? null : isEditable ? (
          <button onClick={disableEdit}>cancel</button>
        ) : (
          <button onClick={makeEditable}>edit</button>
        )}
      </div>
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
