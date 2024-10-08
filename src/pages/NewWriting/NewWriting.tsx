import { useState, useEffect } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store";
import { populateUserCreators } from "../../state/userCreatorSlice";
import { populateEditWriting } from "../../state/editWriting";

import WritingInfo from "../../components/WritingInfo/WritingInfo";

import styles from "./NewWriting.module.css";
import { UserCreator } from "../../types/userCreator";
import Writing from "../../types/writing";
import GenreObject from "../../types/genreObject";
import getDefaultGenreState from "../../state/defaultGenreState";

function NewWriting() {
  const userState = useAppSelector((state) => state.user.value);
  const userCreatorState = useAppSelector((state) => state.userCreators.value);

  const defaultGenreState: GenreObject = getDefaultGenreState();
  const [error, setError] = useState("");
  const [genres, setGenres] = useState<GenreObject>({ ...defaultGenreState });
  const [loading, setLoading] = useState(true);
  const [userCreatorUid, setUserCreatorUid] = useState("");
  const [writingType, setWritingType] = useState("shortStory");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [font, setFont] = useState("Helvetica");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userCreatorState.isFetched) {
      fetchUserCreators();
    } else {
      setLoading(false);
      if (userCreatorState.creators.length > 0) {
        setUserCreatorUid(userCreatorState.creators[0].uid);
      }
    }
  }, []);

  async function fetchUserCreators() {
    try {
      const res = await fetch("/api/user/creators");
      if (res.ok) {
        const creators: UserCreator[] = await res.json();
        dispatch(populateUserCreators(creators));
        if (creators.length > 0) {
          setUserCreatorUid(creators[0].uid);
        }
      } else {
        const error = await res.text();
        console.error(error);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  function updateUserCreatorUid(uid: string) {
    setUserCreatorUid(uid);
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

  function updateFont(f: string) {
    setFont(f);
  }

  function updateSelectedGenres(genres: string[]) {
    setSelectedGenres(genres);
  }

  function updateTags(tags: string[]) {
    setTags(tags);
  }

  function updateGenres(g: GenreObject) {
    setGenres(g);
  }

  async function save() {
    const postBody = {
      creatorId: userCreatorUid,
      writingType: writingType,
      title: title,
      description: description,
      genres: selectedGenres,
      tags: tags,
      font: font,
    };
    try {
      const res = await fetch("/api/writing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });

      if (res.ok) {
        const data: Writing = await res.json();
        console.log(data);
        dispatch(populateEditWriting(data));
        alert("writing successfully created!");
        navigate(`/edit-writing/${data.uid}`);
        setError("");
      } else if (res.status === 422) {
        const error = await res.text();
        setError(error);
      } else {
        const e = await res.text();
        console.error(e);
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (!userState.isFetched || loading) {
    return <div>loading...</div>;
  }

  if (!userState.authenticated) {
    alert("please log in or create an account to view this page");
    return <Navigate to="/" />;
  }

  if (userCreatorState.isFetched && userCreatorState.creators.length === 0) {
    return (
      <div>
        <p>you must create a creator profile before you can start writing</p>
        <Link to="/new-creator">make a profile</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <WritingInfo
        error={error}
        genres={genres}
        updateGenres={updateGenres}
        updateUserCreatorUid={updateUserCreatorUid}
        userCreatorUid={userCreatorUid}
        userCreators={userCreatorState.creators}
        updateFont={updateFont}
        font={font}
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
        save={save}
        isNew={true}
        editable={true}
        makeEditable={() => {}}
        disableEdit={() => {}}
      />
    </div>
  );
}

export default NewWriting;
