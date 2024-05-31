import React from "react";

function DateSelect({
  date,
  updateDate,
}: {
  date: string;
  updateDate: Function;
}) {
  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLSelectElement;
    updateDate(target.value);
  };
  return (
    <div>
      <label>Date posted</label>
      <select value={date} onChange={handleChange}>
        <option>All Time</option>
        <option>Past Year</option>
        <option>Past Month</option>
        <option>Past Week</option>
        <option>Past Day</option>
        <option>Most Recent</option>
      </select>
    </div>
  );
}

export default DateSelect;
