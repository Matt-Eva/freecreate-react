import { UserCreator } from "../../types/userCreator";

function UserCreatorSelect({
  updateUserCreatorUid,
  userCreatorUid,
  userCreators,
  disabled,
}: {
  userCreators: UserCreator[];
  userCreatorUid: string;
  updateUserCreatorUid: Function;
  disabled: boolean;
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
      <select
        value={userCreatorUid}
        onChange={handleChange}
        disabled={disabled}
      >
        {displayUserCreators}
      </select>
    </>
  );
}

export default UserCreatorSelect;
