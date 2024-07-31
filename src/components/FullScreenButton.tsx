import React from "react";

function FullScreenButton() {
  const toggleFullScreen = () => {
    const readContainer = document.getElementById("fullscreen-container");
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      if (readContainer?.requestFullscreen) {
        readContainer.requestFullscreen();
      }
    }
  };
  return <button onClick={toggleFullScreen}>{"<>"}</button>;
}

export default FullScreenButton;
