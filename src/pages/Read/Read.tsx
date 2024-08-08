import { useState } from "react";
import { Link } from "react-router-dom";
import ChapterCard from "../../components/ChapterCard/ChapterCard";

function Read() {
  return (
    <div id="read-container">
      <h2>Title</h2>
      <p>author</p>
      <p>description</p>
      <p>genres</p>
      <div>tag box</div>
      <button>like</button>
      <button>add to library</button>
      <button>add to reading list</button>
      <button>follow</button>
      <button>subscribe</button>
      <ChapterCard />
    </div>
  );
}

export default Read;
