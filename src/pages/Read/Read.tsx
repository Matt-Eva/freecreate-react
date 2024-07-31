import { useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  return (
    <div id="read-container">
      Read
      <Link to="/read-chapter">Read Chapter</Link>
    </div>
  );
}

export default Read;
