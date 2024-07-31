function FontSelect({
  font,
  updateFont,
}: {
  font: string;
  updateFont: Function;
}) {
  return (
    <div>
      <label>Select Font</label>
      <p>
        <em>{"Note: to use opening quotes, press option '[' on Mac"}</em>
      </p>
      <select value={font} onChange={(e) => updateFont(e.target.value)}>
        <option>Helvetica</option>
        <option>Lora</option>
        <option>Times New Roman</option>
        <option>IM Fell English</option>
        <option>Georgia</option>
      </select>
    </div>
  );
}

export default FontSelect;
