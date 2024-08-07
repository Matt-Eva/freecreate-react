import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";
import { Link } from "react-router-dom";

function EditCreator() {
  const navigate = useNavigate();
  const params = useParams();
  const creatorId = params.creatorId;
  const creatorName = params.creatorName;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [about, setAbout] = useState("");

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

export default EditCreator;
