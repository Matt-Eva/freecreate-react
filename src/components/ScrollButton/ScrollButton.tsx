import styles from "./ScrollButton.module.css";

function ScrollButton() {
  const handleScroll = () => {
    const element = document.getElementById("searchBox");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleScroll} className={styles.scroll}>
      top
    </button>
  );
}

export default ScrollButton;
