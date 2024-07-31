function ScrollButton() {
  const handleScroll = () => {
    const element = document.getElementById("searchBox");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return <button onClick={handleScroll}>top</button>;
}

export default ScrollButton;
