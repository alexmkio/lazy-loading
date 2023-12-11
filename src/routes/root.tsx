import { Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/lazy-loaded-route/">
        <h2>Link to lazily loaded route</h2>
      </Link>
    </>
  );
}
