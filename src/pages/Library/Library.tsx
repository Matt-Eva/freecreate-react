import { Outlet } from "react-router-dom";

import LibraryNav from "../../components/LibraryNav";

function Library() {
  return (
    <div>
      <LibraryNav />
      <Outlet />
    </div>
  );
}

export default Library;
