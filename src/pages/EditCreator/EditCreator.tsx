import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import {
  updateUserCreator,
  populateUserCreators,
} from "../../state/userCreatorSlice";

import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";
import { Link } from "react-router-dom";
import { UserCreator } from "../../types/userCreator";

function EditCreator() {
  const userState = useAppSelector((state) => state.user.value);
  const userCreatorsState = useAppSelector((state) => state.userCreators.value);
  const [name, setName] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [about, setAbout] = useState("");
  const [uid, setUid] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingProblem, setLoadingProblem] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const creatorUid = params.creatorUid;

  useEffect(() => {
    if (!userCreatorsState.isFetched) {
      fetchCreators();
    } else {
      const userCreators = userCreatorsState.creators;
      const creator = userCreators.find(
        (c: UserCreator) => c.uid === creatorUid
      );
      if (!creator) {
        alert("You do not have access to this creator profile");
        navigate("/profile");
      } else {
        setName(creator.name);
        setCreatorId(creator.creatorId);
        setAbout(creator.about);
        setUid(creator.uid);
      }
      setLoading(false);
    }
  }, []);

  async function fetchCreators() {
    try {
      const res = await fetch(`/api/user/creators`);
      if (res.ok) {
        const data = await res.json();
        dispatch(populateUserCreators(data));
        const creator: UserCreator = data.find(
          (c: UserCreator) => c.uid === creatorUid
        );
        if (!creator) {
          alert("You do not have access to this creator profile");
          navigate("/profile");
        } else {
          setName(creator.name);
          setCreatorId(creator.creatorId);
          setAbout(creator.about);
          setUid(creator.uid);
        }
      } else if (res.status === 401) {
        const err = await res.text();
        console.error(err);
        alert("You do not have access to this creator profile");
        navigate("/profile");
      } else {
        const err = await res.text();
        console.error(err);
        setLoadingProblem(true);
      }
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      setLoadingProblem(true);
    }
  }

  function updateName(n: string) {
    setName(n);
  }
  function updateCreatorId(i: string) {
    setCreatorId(i);
  }

  function updateAbout(a: string) {
    setAbout(a);
  }

  async function save() {
    const patchBody = {
      uid: uid,
      name: name,
      about: about,
      uniqueName: creatorId,
    };
    try {
      const res = await fetch("/api/creator", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patchBody),
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(updateUserCreator(data));
        alert("creator info updated successfully!");
        navigate("/profile");
      } else if (res.status === 422) {
        const err = await res.text();
        setErrors([err]);
        console.error(err);
      } else {
        const err = await res.text();
        console.error(err);
      }
    } catch (e) {
      console.error(e);
    }
  }

  if (loading) {
    return <div>loading</div>;
  }

  if (loadingProblem) {
    return <div>there was a problem loading this page.</div>;
  }

  return (
    <div>
      {userState.authenticated ? (
        <>
          <Link to="/profile">cancel</Link>
          <CreatorProfileForm
            name={name}
            creatorId={creatorId}
            about={about}
            save={save}
            updateName={updateName}
            updateCreatorId={updateCreatorId}
            updateAbout={updateAbout}
          />
          {errors.map((error) => (
            <span key={error} style={{ color: "red" }}>
              {error}
            </span>
          ))}
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default EditCreator;
