import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";

function NewCreator() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [about, setAbout] = useState("");

  const navigate = useNavigate();

  function updateName(n: string) {
    setName(n);
  }
  function updateId(i: string) {
    setId(i);
  }
  function updateAbout(a: string) {
    setAbout(a);
  }

  async function save() {
    const postBody = {
      name: name,
      creatorId: id,
      about: about,
    };
    try {
      const res = await fetch("/api/creator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      });
      const data = await res.json();
      alert("profile saved successfully!");
      const creatorUid = data.uid;
      navigate(`/profile`);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div>
      <CreatorProfileForm
        name={name}
        id={id}
        about={about}
        save={save}
        updateName={updateName}
        updateId={updateId}
        updateAbout={updateAbout}
      />
    </div>
  );
}

export default NewCreator;
