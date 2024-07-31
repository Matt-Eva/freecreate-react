import { useState } from "react";

function Read() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const buttonPosition = isFullScreen
    ? "bottom-2 sm:top-2"
    : "bottom-14 sm:top-20";

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
