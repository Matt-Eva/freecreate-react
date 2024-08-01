import styles from "./SearchNav.module.css";
function SearchNav({ toggleSearch }: { toggleSearch: Function }) {
  return (
    <section className={styles.searchNav}>
      <button onClick={() => toggleSearch(true)}>Simple Search</button>
      <button onClick={() => toggleSearch(false)}>Advanced Search</button>
    </section>
  );
}

export default SearchNav;
