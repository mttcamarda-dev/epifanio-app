import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { notizie, interviste, eventi } from "../data/mockData.js";
import { formatDate } from "../components/Card.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="badge">Mesagne (BR) — Puglia</span>
            <h1 className="hero__title">
              I.I.S.S.<br />
              Epifanio Ferdinando
            </h1>
            <p className="hero__subtitle">
              Il portale della comunità scolastica: notizie, interviste, eventi e tutto
              ciò che rende viva la nostra scuola.
            </p>
            <div className="hero__actions">
              <Link to="/notizie" className="btn btn--primary">Ultime Notizie</Link>
              <Link to="/chi-siamo" className="btn btn--outline">Scopri la Scuola</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ultime notizie */}
      <section className="home-section">
        <div className="container">
          <div className="home-section__header">
            <h2 className="section-title">Ultime Notizie</h2>
            <Link to="/notizie" className="home-section__more">Vedi tutte &rarr;</Link>
          </div>
          <div className="cards-grid">
            {notizie.slice(0, 3).map((n) => (
              <Card
                key={n.id}
                to={`/notizie/${n.id}`}
                immagine={n.immagine}
                data={n.data}
                titolo={n.titolo}
                sommario={n.sommario}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interviste in evidenza */}
      <section className="home-section home-section--alt">
        <div className="container">
          <div className="home-section__header">
            <h2 className="section-title">Interviste in Evidenza</h2>
            <Link to="/interviste" className="home-section__more">Vedi tutte &rarr;</Link>
          </div>
          <div className="cards-grid">
            {interviste.slice(0, 3).map((i) => (
              <Card
                key={i.id}
                to={`/interviste/${i.id}`}
                immagine={i.immagine}
                data={i.data}
                titolo={i.titolo}
                sommario={i.sommario}
                badge="Intervista"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Prossimi eventi */}
      <section className="home-section">
        <div className="container">
          <div className="home-section__header">
            <h2 className="section-title">Prossimi Eventi</h2>
            <Link to="/eventi" className="home-section__more">Vedi tutti &rarr;</Link>
          </div>
          <div className="events-preview">
            {eventi.slice(0, 3).map((e) => (
              <div key={e.id} className="event-preview-card">
                <div className="event-preview-card__date">
                  <span className="event-preview-card__day">
                    {new Date(e.data).getDate()}
                  </span>
                  <span className="event-preview-card__month">
                    {new Date(e.data).toLocaleDateString("it-IT", { month: "short" })}
                  </span>
                </div>
                <div className="event-preview-card__info">
                  <h3>{e.titolo}</h3>
                  <p>{e.ora} — {e.luogo}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
