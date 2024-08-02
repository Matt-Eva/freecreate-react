import WritingTypeSelect from "../WritingTypeSelect/WritingTypeSelect";
import GenreSelect from "../GenreSelect/GenreSelect";
import TitleInput from "../TitleInput/TitleInput";
import TagInput from "../TagInput/TagInput";
import FontSelect from "../FontSelect";

import styles from "./WritingInfo.module.css";

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
          <label>Pick Creator Profile</label>
          <select></select>
        </section>
        <WritingTypeSelect
          writingType={writingType}
          updateWritingType={updateWritingType}
        />
        <TitleInput writingTitle={title} updateWritingTitle={updateTitle} />
        <section className={styles.description}>
          <label>Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
          />
        </section>
        <TagInput tags={tags} updateTags={updateTags} />
      </section>
      <GenreSelect
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
      />
    </section>
  );
}

export default WritingInfo;
