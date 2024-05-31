function TagButton({ tag, removeTag }: { tag: string; removeTag: Function }) {
  const handleClick = () => {
    removeTag(tag);
  };

  return <button onClick={handleClick}>{tag}</button>;
}

export default TagButton;
