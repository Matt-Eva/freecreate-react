import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { populateDrafts } from "../../state/userWritingDrafts";
import { Outlet, Link, useOutletContext } from "react-router-dom";

import styles from "./Write.module.css";
import Writing from "../../types/writing";

function Write() {
  const draftState = useAppSelector((state) => state.userDrafts.value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getUserWriting() {
      try {
        const res = await fetch("/api/writing/user");
        if (res.ok) {
          const data: Writing[] = await res.json();
          console.log(data);
          const drafts = data.filter((w) => w.published === false);
          const published = data.filter((w) => w.published === true);
          dispatch(populateDrafts(drafts));
        } else {
          const err = await res.text();
          console.error(err);
        }
      } catch (e) {
        console.error(e);
      }
    }
    getUserWriting();
  }, []);

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/write">Drafts</Link>
        <Link to="/write/published">Published</Link>
        <Link to="/new-writing">New</Link>
      </nav>
      <Outlet context={draftState.drafts} />
    </div>
  );
}

export default Write;
