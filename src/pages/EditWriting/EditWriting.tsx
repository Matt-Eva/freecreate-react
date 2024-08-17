import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { populateUserCreators } from "../../state/userCreatorSlice";

import Info from "../../components/WritingInfo/WritingInfo";
import FontSelect from "../../components/FontSelect/FontSelect";

import { UserCreator } from "../../types/userCreator";

import styles from "./EditWriting.module.css";
import Writing from "../../types/Writing";

function EditWriting() {
  const userState = useAppSelector((state) => state.user.value);
  const userCreatorState = useAppSelector((state) => state.userCreators.value);

  const [loadingCreators, setLoadingCreators] = useState(true);
  const [loadingWriting, setLoadingWriting] = useState(true);
  const [writingType, setWritingType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [font, setFont] = useState("Helvetica");
  const [userCreatorUid, setUserCreatorUid] = useState("");

  const writingId = useParams().writingId;
  const creatorId = useParams().creatorId;
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchUserCreators() {
      try {
        const res = await fetch("/api/user/creators");
        if (res.ok) {
          const creators: UserCreator[] = await res.json();
          dispatch(populateUserCreators(creators));
        } else {
          const error = await res.text();
          console.error(error);
        }
        setLoadingCreators(false);
      } catch (e) {
        console.error(e);
        setLoadingCreators(false);
      }
    }

    if (!userCreatorState.isFetched) {
      fetchUserCreators();
    } else {
      setLoadingCreators(false);
      if (userCreatorState.creators.length > 0) {
        setUserCreatorUid(userCreatorState.creators[0].uid);
      }
    }
  }, []);

  useEffect(() => {
    async function loadWriting() {
      try {
        const res = await fetch(
          `/api/writing?creatorId=${creatorId}&writingId=${writingId}`
        );
        if (res.ok) {
          const data: Writing = await res.json();
          console.log(data);
        } else {
          const err = await res.text();
          console.error(err);
        }
        setLoadingWriting(false);
      } catch (e) {
        setLoadingWriting(false);
        console.error(e);
      }
    }
    loadWriting();
  }, []);

  function updateUserCreatorUid(i: string) {
    setUserCreatorUid(i);
  }

  function updateWritingType(type: string) {
    setWritingType(type);
  }
  function updateTitle(t: string) {
    setTitle(t);
  }
  function updateDescription(d: string) {
    setDescription(d);
  }
  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
  }
  function updateTags(tags: string[]) {
    setTags(tags);
  }
  function updateFont(f: string) {
    setFont(f);
  }

  function handleInfoSave() {
    console.log("saving");
  }

  function addNewChapter() {}

  if (!userState.isFetched || loadingCreators || loadingWriting) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Info
        userCreators={userCreatorState.creators}
        userCreatorUid={userCreatorUid}
        updateUserCreatorUid={updateUserCreatorUid}
        font={font}
        updateFont={updateFont}
        writingType={writingType}
        updateWritingType={updateWritingType}
        title={title}
        updateTitle={updateTitle}
        description={description}
        updateDescription={updateDescription}
        selectedGenres={selectedGenres}
        updateSelectedGenres={updateSelectedGenres}
        tags={tags}
        updateTags={updateTags}
        isNew={false}
        save={handleInfoSave}
        editable={false}
      />
      <button onClick={handleInfoSave}>Save changes</button>
      <button onClick={addNewChapter}>New Chapter</button>
      <FontSelect font={font} updateFont={updateFont} />
    </div>
  );
}

export default EditWriting;
