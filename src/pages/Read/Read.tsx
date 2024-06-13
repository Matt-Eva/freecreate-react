import { useState } from "react";

function Read() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const fullScreenClass = isFullScreen
    ? "fixed top-0 h-screen w-screen z-10"
    : "h-full";

  const buttonPosition = isFullScreen ? "bottom-2" : "bottom-14";

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className={`bg-gray-50 ${fullScreenClass}`}>
      Read
      <button
        onClick={toggleFullScreen}
        className={`fixed ${buttonPosition} right-2 bg-gray-100 px-2 py-1`}
      >
        {isFullScreen ? "><" : "<>"}
      </button>
    </div>
  );
}

export default Read;
