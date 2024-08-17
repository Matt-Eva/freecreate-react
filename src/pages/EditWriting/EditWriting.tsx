import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { populateUserCreators } from "../../state/userCreatorSlice";

import Info from "../../components/WritingInfo/WritingInfo";
import FontSelect from "../../components/FontSelect/FontSelect";

import { UserCreator } from "../../types/userCreator";

import styles from "./EditWriting.module.css";
import Writing from "../../types/Writing";
import { Link } from "react-router-dom";

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
          updateUserCreatorUid(data.creatorId);
          updateTitle(data.title);
          updateWritingType(data.writingType);
          updateDescription(data.description);
          updateSelectedGenres(data.genres);
          updateTags(data.tags);
          updateFont(data.font);
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

  if (!userState.authenticated) {
    alert("please login or create an account to view this page");
    return <Navigate to="/" />;
  }

  if (userCreatorState.isFetched && userCreatorState.creators.length === 0) {
    return (
      <div>
        <p>
          You haven't created any creator profiles yet. Please create a profile
          to start writing.
        </p>
        <Link to="/new-creator">create a profile</Link>
      </div>
    );
  }

  if (
    userCreatorState.isFetched &&
    userCreatorState.creators.length !== 0 &&
    userCreatorUid !== ""
  ) {
    const valid = userCreatorState.creators.find(
      (creator) => creator.uid === userCreatorUid
    );
    if (!valid) {
      alert("You are not authorized to edit this piece of writing");
      return <Navigate to="/" />;
    }
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
