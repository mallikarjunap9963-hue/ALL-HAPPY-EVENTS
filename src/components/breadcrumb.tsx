import { Link, useLocation } from "react-router-dom";
import "../assets/css/realweddings.css";

export default function Breadcrumb() {
  const { pathname } = useLocation();
  const parts = pathname.split("/").filter(Boolean);

  return (
    <div className="rw-breadcrumb">
      <Link to="/">Home</Link>
      {parts.map((p, i) => (
        <span key={i}>
          ›
          {i === parts.length - 1 ? (
            <b>{p.replace("-", " ")}</b>
          ) : (
            <Link to={`/${p}`}>{p.replace("-", " ")}</Link>
          )}
        </span>
      ))}
    </div>
  );
}