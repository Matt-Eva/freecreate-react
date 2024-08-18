import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { populateDrafts } from "../../state/userWritingDrafts";
import { populatePublished } from "../../state/userWritingPublished";
import { Outlet, Link, useOutletContext } from "react-router-dom";

import styles from "./Write.module.css";
import Writing from "../../types/writing";

function Write() {
  const draftState = useAppSelector((state) => state.userDrafts.value);
  const publishedState = useAppSelector((state) => state.userPublished.value);

  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getUserWriting() {
      try {
        const res = await fetch("/api/writing/user");
        if (res.ok) {
          const data: Writing[] = await res.json();
          const drafts = data.filter((w) => w.published === false);
          const published = data.filter((w) => w.published === true);
          dispatch(populateDrafts(drafts));
          dispatch(populatePublished(published));
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

  const outletContext = {
    drafts: draftState.drafts,
    published: publishedState.published,
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <Link to="/write">Drafts</Link>
        <Link to="/write/published">Published</Link>
        <Link to="/new-writing">New</Link>
      </nav>
      <Outlet context={outletContext} />
    </div>
  );
}

export default Write;
