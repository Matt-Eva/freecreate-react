function TagButton({ tag, removeTag }: { tag: string; removeTag: Function }) {
  const handleClick = () => {
    removeTag(tag);
  };

  return (
    <button onClick={handleClick}>
      {tag}
      <span>x</span>
    </button>
  );
}

export default TagButton;
