import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";
import { Link } from "react-router-dom";

function EditCreator() {
  const navigate = useNavigate();
  const params = useParams();
  const creatorId = params.creatorId;
  const creatorName = params.creatorName;
  if (!creatorId || !creatorName) {
    return (
      <div>
        <p>Invalid Url</p>
        <Link to="/profile">Back</Link>
      </div>
    );
  }

  const [name, setName] = useState(creatorName);
  const [id, setId] = useState(creatorId);

  function updateName(n: string) {
    setName(n);
  }
  function updateId(i: string) {
    setId(i);
  }

  function save() {}

  return (
    <div>
      <CreatorProfileForm
        name={name}
        id={id}
        save={save}
        updateName={updateName}
        updateId={updateId}
      />
    </div>
  );
}

export default EditCreator;
