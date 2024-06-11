function TagButton({ tag, removeTag }: { tag: string; removeTag: Function }) {
  const handleClick = () => {
    removeTag(tag);
  };

  return (
    <button onClick={handleClick} className="m-1 bg-gray-200 rounded-md">
      {tag}
      <span className="mx-0.5 bg-gray-300 rounded-lg px-1 pb-0.5">x</span>
    </button>
  );
}

export default TagButton;
