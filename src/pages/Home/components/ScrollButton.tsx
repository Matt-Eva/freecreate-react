function ScrollButton() {
  const handleScroll = () => {
    const element = document.getElementById("searchBox");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleScroll} className="fixed bottom-10 right-5">
      top
    </button>
  );
}

export default ScrollButton;
