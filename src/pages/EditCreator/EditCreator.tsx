import { useState, useEffect } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { useAppSelector } from "../../store";

import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";
import { Link } from "react-router-dom";

function EditCreator() {
  const userState = useAppSelector((state) => state.user.value);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [about, setAbout] = useState("");

  const params = useParams();
  const creatorUid = params.creatorUid;

  useEffect(() => {
    async function fetchCreator() {
      try {
        const res = await fetch(`/api/user/creator?creatorId=${creatorUid}`);
        if (res.ok) {
          const data = await res.json();
          setName(data.name);
          setId(data.creatorId);
          setAbout(data.about);
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
  function updateId(i: string) {
    setId(i);
  }

  function updateAbout(a: string) {
    setAbout(a);
  }

  function save() {}

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
            id={id}
            about={about}
            save={save}
            updateName={updateName}
            updateId={updateId}
            updateAbout={updateAbout}
          />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}

export default EditCreator;
