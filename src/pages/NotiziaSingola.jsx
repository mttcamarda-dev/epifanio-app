import { useParams, Link } from "react-router-dom";
import { notizie } from "../data/mockData.js";
import { formatDate } from "../components/Card.jsx";
import "./ArticlePage.css";

export default function NotiziaSingola() {
  const { id } = useParams();
  const notizia = notizie.find((n) => n.id === Number(id));

  if (!notizia) {
    return (
      <div className="container article-page">
        <h2>Notizia non trovata</h2>
        <Link to="/notizie" className="article-page__back">&larr; Torna alle notizie</Link>
      </div>
    );
  }

  return (
    <div className="article-page">
      <div className="article-page__hero" style={{ backgroundImage: `url(${notizia.immagine})` }}>
        <div className="article-page__hero-overlay">
          <div className="container">
            <Link to="/notizie" className="article-page__back">&larr; Tutte le notizie</Link>
            <time>{formatDate(notizia.data)}</time>
            <h1>{notizia.titolo}</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <article className="article-page__content">
          <p className="article-page__lead">{notizia.sommario}</p>
          {notizia.contenuto.split("\n").map((par, i) => (
            <p key={i}>{par}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
