import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

function ErrorPage() {
  return (
    <div>
      <Header />
      <p>Whoops! Looks like there was an error loading this page.</p>
      <Link to="/">home</Link>
    </div>
  );
}

export default ErrorPage;
