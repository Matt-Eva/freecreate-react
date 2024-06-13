import { useState } from "react";

function Read() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreenClass = isFullScreen
    ? "fixed top-0 h-screen w-screen z-10"
    : "h-full";

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
    <div id="read-container" className={`bg-gray-50 ${fullScreenClass}`}>
      Read
      <button
        onClick={toggleFullScreen}
        className={`fixed h-8 ${buttonPosition} right-2 bg-gray-100 px-2 py-1 rounded-lg`}
      >
        {isFullScreen ? "><" : "<>"}
      </button>
    </div>
  );
}

export default Read;
