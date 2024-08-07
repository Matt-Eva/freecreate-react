import styles from "./LibrarySearch.module.css";

function LibrarySearch({ placeholder }: { placeholder: string }) {
  return (
    <form>
      <input type="text" placeholder={placeholder} />
    </form>
  );
}

export default LibrarySearch;
