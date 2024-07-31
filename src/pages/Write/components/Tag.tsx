function Tag({ tag, deleteTag }: { tag: string; deleteTag: Function }) {
  function handleDelete() {
    deleteTag(tag);
  }
  return <div onClick={handleDelete}>{tag}</div>;
}

export default Tag;
