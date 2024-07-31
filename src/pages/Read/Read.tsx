import { useState } from "react";

function Read() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    const readContainer = document.getElementById("read-container");
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      if (readContainer?.requestFullscreen) {
        readContainer.requestFullscreen();
      }
    }
  };

  return (
    <div id="read-container">
      Read
      <button onClick={toggleFullScreen}>{isFullScreen ? "> <" : "<>"}</button>
    </div>
  );
}

export default Read;
