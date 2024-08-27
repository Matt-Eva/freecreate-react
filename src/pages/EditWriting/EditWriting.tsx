import { useEffect, useState } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { populateUserCreators } from "../../state/userCreatorSlice";

import Info from "../../components/WritingInfo/WritingInfo";
import NewChapterForm from "../../components/NewChapterForm/NewChapterForm";

import { UserCreator } from "../../types/userCreator";

import styles from "./EditWriting.module.css";
import Writing from "../../types/writing";
import { Link } from "react-router-dom";
import GenreObject from "../../types/genreObject";
import getDefaultGenreState from "../../state/defaultGenreState";
import Chapter from "../../types/chapter";
import EditChapterCard from "../../components/EditChapterCard/EditChapterCard";

function EditWriting() {
  const userState = useAppSelector((state) => state.user.value);
  const userCreatorState = useAppSelector((state) => state.userCreators.value);
  const editWritingState = useAppSelector((state) => state.editWriting.value);

  const defaultGenreState: GenreObject = getDefaultGenreState();
  const initialStartingState: Writing = {
    author: "",
    title: "",
    uniqueAuthorName: "",
    description: "",
    genres: [],
    tags: [],
    writingType: "",
    font: "",
    uid: "",
    creatorId: "",
    published: false,
  };
  const [startingState, setStartingState] =
    useState<Writing>(initialStartingState);
  const [error, setError] = useState("");
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
  const [editable, setEditable] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>([]);

  const writingId = useParams().writingId;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const displayChapters = chapters.map((chapter) => {
    return (
      <EditChapterCard
        key={chapter.uid}
        title={chapter.title}
        uid={chapter.uid}
        chapterNumber={chapter.chapterNumber}
        writingId={writingId!}
      />
    );
  });

  useEffect(() => {
    async function loadChapters() {
      try {
        const res = await fetch(`/api/chapters?writingId=${writingId}`);
        if (res.ok) {
          const data: Chapter[] = await res.json();
          console.log(data);
          setChapters(data);
        } else {
          const err = await res.text();
          console.error(err);
        }
      } catch (e) {
        console.error(e);
      }
    }
    loadChapters();
  }, []);

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
        const res = await fetch(`/api/writing?writingId=${writingId}`);
        if (res.ok) {
          const data: Writing = await res.json();
          console.log(data);
          setStartingState(data);
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
          alert("there was a problem loading this writing");
          console.error(err);
          navigate("/write");
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
      setStartingState(editWritingState.editWriting);
      updateUserCreatorUid(editWritingState.editWriting.creatorId);
      updateTitle(editWritingState.editWriting.title);
      updateWritingType(editWritingState.editWriting.writingType);
      updateDescription(editWritingState.editWriting.description);
      updateSelectedGenres(editWritingState.editWriting.genres);
      updateTags(editWritingState.editWriting.tags);
      updateFont(editWritingState.editWriting.font);
      setExistingGenres(genres);
    }
  }, []);

  function setExistingGenres(g: string[]) {
    console.log(g);
    const defaultGenres = { ...genres };
    g.forEach((genre) => {
      const lower = genre.charAt(0).toLowerCase() + genre.slice(1);
      defaultGenres[lower].selected = true;
    });

    for (const key in defaultGenres) {
      const upper = key.charAt(0).toUpperCase() + key.slice(1);
      const exists = g.find((genre) => genre === upper);
      if (!exists) {
        defaultGenres[key].selected = false;
      }
    }

    if (g.length >= 3) {
      for (const key in defaultGenres) {
        if (defaultGenreState[key].selected !== true) {
          defaultGenreState[key].disabled = true;
        } else {
          defaultGenreState[key].disabled = false;
        }
      }
    } else {
      for (const key in defaultGenres) {
        defaultGenres[key].disabled = false;
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

  function makeEditable() {
    setEditable(true);
  }

  function addChapter(newChapter: Chapter) {
    setChapters([...chapters, newChapter]);
  }

  function disableEdit() {
    setEditable(false);
    setExistingGenres(startingState.genres);
    updateSelectedGenres(startingState.genres);
    updateDescription(startingState.description);
    updateFont(startingState.font);
    updateTags(startingState.tags);
    updateTitle(startingState.title);
    updateUserCreatorUid(startingState.creatorId);
  }

  async function handleInfoSave() {
    interface PatchBody {
      uid: string;
      creatorId: string;
      writingType: string;
      description: string;
      title: string;
      tags: string[];
      genres: string[];
      font: string;
    }
    const patchBody: PatchBody = {
      uid: startingState.uid,
      creatorId: userCreatorUid,
      writingType: writingType,
      description: description,
      title: title,
      font: font,
      tags: tags,
      genres: selectedGenres,
    };
    console.log("writingType", writingType);
    try {
      const res = await fetch("/api/writing", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchBody),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setEditable(false);
        setStartingState(data);
        updateUserCreatorUid(data.creatorId);
        updateTitle(data.title);
        updateWritingType(data.writingType);
        updateDescription(data.description);
        updateSelectedGenres(data.genres);
        updateTags(data.tags);
        updateFont(data.font);
        setExistingGenres(data.genres);
        alert("info saved!");
      } else if (res.status == 422) {
        const err = await res.text();
        setError(err);
        console.error(err);
      } else {
        const err = await res.text();
        console.error(err);
      }
    } catch (e) {
      console.error(e);
    }
  }

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
        error={error}
        makeEditable={makeEditable}
        disableEdit={disableEdit}
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
        editable={editable}
      />
      <div className={styles.chapterSection}>
        {writingId ? (
          <NewChapterForm
            writingId={writingId}
            disabled={editable}
            addChapter={addChapter}
          />
        ) : null}
        <h2>Chapters</h2>
        {displayChapters}
      </div>
    </div>
  );
}

export default EditWriting;
