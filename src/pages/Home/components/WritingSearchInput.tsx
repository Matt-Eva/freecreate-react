function WritingSearchInput({
  writingTitle,
  updateWritingTitle,
}: {
  writingTitle: string;
  updateWritingTitle: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    updateWritingTitle(target.value);
  };

  return (
    <section className="col-start-1">
      <label>Title: </label>
      <input type="text" value={writingTitle} onChange={handleChange} />
    </section>
  );
}

export default WritingSearchInput;
