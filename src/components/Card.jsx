import { Link } from "react-router-dom";
import "./Card.css";

export function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Card({ to, immagine, data, titolo, sommario, badge }) {
  return (
    <Link to={to} className="card">
      <div className="card__image-wrap">
        <img src={immagine} alt={titolo} className="card__image" loading="lazy" />
        {badge && <span className="card__badge badge">{badge}</span>}
      </div>
      <div className="card__body">
        {data && <time className="card__date">{formatDate(data)}</time>}
        <h3 className="card__title">{titolo}</h3>
        {sommario && <p className="card__summary">{sommario}</p>}
      </div>
    </Link>
  );
}
