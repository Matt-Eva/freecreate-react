import styles from "./Header.module.css";

function Header() {
  return (
    <header className="flex items-center">
      <p className="mr-2">Icon</p>
      <h1 className="mr-2 text-xl sm:mr-4">FreeCreate</h1>
      <nav className={`${styles.navGrid} w-full mt-0.5 content-end`}>
        <p className="hidden sm:block">browse</p>
        <p>about</p>
        <p>donate</p>
        <p className="justify-self-end mr-1">profile</p>
      </nav>
    </header>
  );
}

export default Header;
