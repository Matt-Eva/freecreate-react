import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { updateUserCreator } from "../../state/userCreatorSlice";

import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";
import { Link } from "react-router-dom";

function EditCreator() {
  const userState = useAppSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [creatorId, setCreatorId] = useState("");
  const [about, setAbout] = useState("");
  const [uid, setUid] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const creatorUid = params.creatorUid;

  useEffect(() => {
    async function fetchCreator() {
      try {
        const res = await fetch(`/api/user/creator?creatorId=${creatorUid}`);
        if (res.ok) {
          const data = await res.json();
          setName(data.name);
          setCreatorId(data.creatorId);
          setAbout(data.about);
          setUid(data.uid);
        } else {
          const err = await res.text();
          console.error(err);
        }
      } catch (e) {
        console.error(e);
      }
    }
    fetchCreator();
  }, []);

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
      creatorId: creatorId,
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

  if (!userState.isFetched) {
    return <div>loading</div>;
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
