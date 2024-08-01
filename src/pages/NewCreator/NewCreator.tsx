import { useState } from "react";
import CreatorProfileForm from "../../components/CreatorProfileForm/CreatorProfileForm";

function NewCreator() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

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

export default NewCreator;
