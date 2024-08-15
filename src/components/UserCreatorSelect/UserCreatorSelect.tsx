import { UserCreator } from "../../types/userCreator";

function UserCreatorSelect({
  updateUserCreatorUid,
  userCreatorUid,
  userCreators,
}: {
  userCreators: UserCreator[];
  userCreatorUid: string;
  updateUserCreatorUid: Function;
}) {
  const displayUserCreators = userCreators.map((creator) => {
    return (
      <option key={creator.uid} value={creator.uid}>
        {creator.name}
      </option>
    );
  });

  function handleChange(e: React.ChangeEvent) {
    const target = e.target as HTMLSelectElement;
    updateUserCreatorUid(target.value);
  }

  return (
    <>
      <label>Creator Profile</label>
      <select value={userCreatorUid} onChange={handleChange}>
        {displayUserCreators}
      </select>
    </>
  );
}

export default UserCreatorSelect;
