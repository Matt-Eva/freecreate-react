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
import GenreObject from "../../types/genreObject";
import getDefaultGenreState from "../../state/defaultGenreState";

function EditWriting() {
  const userState = useAppSelector((state) => state.user.value);
  const userCreatorState = useAppSelector((state) => state.userCreators.value);
  const editWritingState = useAppSelector((state) => state.editWriting.value);

  const defaultGenreState: GenreObject = getDefaultGenreState();
  const [genres, setGenres] = useState<GenreObject>({ ...defaultGenreState });
  const [loadingCreators, setLoadingCreators] = useState(true);
  const [loadingWriting, setLoadingWriting] = useState(true);
  const [writingType, setWritingType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [font, setFont] = useState("Helvetica");
  const [userCreatorUid, setUserCreatorUid] = useState("");
  console.log(selectedGenres);

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
          console.log(defaultGenreState);
          const data: Writing = await res.json();
          console.log(data);
          updateUserCreatorUid(data.creatorId);
          updateTitle(data.title);
          updateWritingType(data.writingType);
          updateDescription(data.description);
          updateSelectedGenres(data.genres);
          updateTags(data.tags);
          updateFont(data.font);
          setExistingGenres(data.genres);
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
    if (!editWritingState.isFetched) {
      loadWriting();
    } else {
      setLoadingWriting(false);
      const genres = editWritingState.editWriting.genres;
      updateUserCreatorUid(editWritingState.editWriting.creatorId);
      updateTitle(editWritingState.editWriting.title);
      updateWritingType(editWritingState.editWriting.writingType);
      updateDescription(editWritingState.editWriting.description);
      updateSelectedGenres(editWritingState.editWriting.genres);
      console.log(editWritingState.editWriting.genres);
      updateTags(editWritingState.editWriting.tags);
      updateFont(editWritingState.editWriting.font);
      setExistingGenres(genres);
    }
  }, []);

  function setExistingGenres(g: string[]) {
    console.log(genres);
    const defaultGenres = { ...genres };
    g.forEach((genre) => {
      const lower = genre.charAt(0).toLowerCase() + genre.slice(1);
      console.log(lower);
      defaultGenres[lower].selected = true;
    });

    if (g.length >= 3) {
      for (const key in defaultGenres) {
        if (defaultGenreState[key].selected !== true) {
          defaultGenreState[key].disabled = true;
        }
      }
    }

    setGenres(defaultGenres);
  }

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

  function updateGenres(g: GenreObject) {
    setGenres(g);
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
        genres={genres}
        updateGenres={updateGenres}
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
