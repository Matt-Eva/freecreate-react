import React from "react";

function WritingTypeSelect({
  writingType,
  updateWritingType,
}: {
  writingType: string;
  updateWritingType: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    console.log(target.value);
    updateWritingType(target.value);
  };
  return (
    <section className="col-start-1 grid w-40">
      <label>Writing type</label>
      <select value={writingType} onChange={handleChange}>
        <option value="shortStory">Short Story</option>
        <option value="novellette">Novellette</option>
        <option value="novella">Novella</option>
        <option value="novel">Novel</option>
      </select>
    </section>
  );
}

export default WritingTypeSelect;
