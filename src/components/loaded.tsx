import { Link } from "react-router-dom";

export default function Loaded() {
  return (
    <>
      <h1>Loaded!!!</h1>
      <Link to="/">
        <h2>Link to root route</h2>
      </Link>
    </>
  );
}
