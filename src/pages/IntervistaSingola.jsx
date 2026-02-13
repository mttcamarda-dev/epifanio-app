import { useParams, Link } from "react-router-dom";
import { interviste } from "../data/mockData.js";
import { formatDate } from "../components/Card.jsx";
import "./ArticlePage.css";

export default function IntervistaSingola() {
  const { id } = useParams();
  const intervista = interviste.find((i) => i.id === Number(id));

  if (!intervista) {
    return (
      <div className="container article-page">
        <h2>Intervista non trovata</h2>
        <Link to="/interviste" className="article-page__back">&larr; Torna alle interviste</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-page__hero" style={{ backgroundImage: `url(${intervista.immagine})` }}>
        <div className="article-page__hero-overlay">
          <div className="container">
            <Link to="/interviste" className="article-page__back">&larr; Tutte le interviste</Link>
            <div className="article-page__meta">
              <span className="badge">{intervista.ruolo}</span>
              <time>{formatDate(intervista.data)}</time>
            </div>
            <h1>{intervista.titolo}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <article className="article-page__content">
          <p className="article-page__lead">{intervista.sommario}</p>
          {intervista.contenuto.split("\n").map((line, i) => {
            if (line.startsWith("D:")) {
              return <p key={i} style={{ fontWeight: 600, color: "var(--color-primary)" }}>{line}</p>;
            }
            if (line.startsWith("R:")) {
              return <p key={i}>{line}</p>;
            }
            return line.trim() ? <p key={i}>{line}</p> : null;
          })}
        </article>
      </div>
    </div>
  );
}
