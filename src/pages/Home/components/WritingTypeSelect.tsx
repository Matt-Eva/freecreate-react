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
    <div>
      <label>Writing type</label>
      <select value={writingType} onChange={handleChange}>
        <option value="ShortStory">Short Story</option>
        <option value="Novellette">Novellette</option>
        <option value="Novella">Novella</option>
        <option value="Novel">Novel</option>
      </select>
    </div>
  );
}

export default WritingTypeSelect;