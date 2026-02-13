import { Link } from "react-router-dom";
import "./ChiSiamo.css";

export default function ChiSiamo() {
  return (
    <div className="chi-siamo-page">
      <div className="page-header">
        <div className="container">
          <h1>Chi Siamo</h1>
          <p>La storia e la missione dell'I.I.S.S. Epifanio Ferdinando di Mesagne.</p>
        </div>
      </div>
      <div className="container">
        <div className="chi-siamo-content">
          <section className="chi-siamo-section">
            <h2 className="section-title">La Nostra Scuola</h2>
            <p>
              L'Istituto di Istruzione Secondaria Superiore <strong>"Epifanio Ferdinando"</strong> di
              Mesagne (BR) è un punto di riferimento educativo nel territorio salentino. Con una tradizione
              di eccellenza che si rinnova ogni anno, la scuola offre diversi indirizzi di studio per
              rispondere alle esigenze formative di tutti gli studenti.
            </p>
            <p>
              Il nome dell'istituto rende omaggio a <strong>Epifanio Ferdinando</strong> (1569–1638),
              illustre medico e scienziato mesagnese, autore di importanti trattati di medicina e figura
              di spicco del Rinascimento pugliese.
            </p>
          </section>

          <section className="chi-siamo-section">
            <h2 className="section-title">I Nostri Indirizzi</h2>
            <div className="indirizzi-grid">
              <div className="indirizzo-card">
                <div className="indirizzo-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <h3>Liceo Scientifico</h3>
                <p>Formazione rigorosa in matematica, fisica e scienze naturali con solide basi umanistiche.</p>
              </div>
              <div className="indirizzo-card">
                <div className="indirizzo-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <h3>Liceo Linguistico</h3>
                <p>Competenze linguistiche avanzate con lo studio approfondito di tre lingue straniere.</p>
              </div>
              <div className="indirizzo-card">
                <div className="indirizzo-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3>Liceo Scienze Umane</h3>
                <p>Comprensione dei fenomeni sociali, psicologici e pedagogici con approccio interdisciplinare.</p>
              </div>
              <div className="indirizzo-card">
                <div className="indirizzo-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                </div>
                <h3>ITIS Informatica</h3>
                <p>Competenze tecniche in programmazione, reti e sistemi informatici per il mondo digitale.</p>
              </div>
            </div>
          </section>

          <section className="chi-siamo-section">
            <h2 className="section-title">La Nostra Missione</h2>
            <div className="mission-grid">
              <div className="mission-item">
                <span className="mission-item__number">01</span>
                <h3>Eccellenza Formativa</h3>
                <p>Garantire un'istruzione di qualità che prepari gli studenti per l'università e il mondo del lavoro.</p>
              </div>
              <div className="mission-item">
                <span className="mission-item__number">02</span>
                <h3>Inclusione</h3>
                <p>Creare un ambiente accogliente dove ogni studente possa esprimere il proprio potenziale.</p>
              </div>
              <div className="mission-item">
                <span className="mission-item__number">03</span>
                <h3>Innovazione</h3>
                <p>Integrare le nuove tecnologie nella didattica per una formazione al passo con i tempi.</p>
              </div>
              <div className="mission-item">
                <span className="mission-item__number">04</span>
                <h3>Territorio</h3>
                <p>Essere un punto di riferimento culturale e sociale per la comunità di Mesagne e del Salento.</p>
              </div>
            </div>
          </section>

          <section className="chi-siamo-section chi-siamo-cta">
            <h2>Vuoi saperne di più?</h2>
            <p>Vieni a trovarci o contattaci per informazioni sull'offerta formativa.</p>
            <div className="chi-siamo-cta__info">
              <div>
                <strong>Indirizzo</strong>
                <p>Via Collegio, 1 — 72023 Mesagne (BR)</p>
              </div>
              <div>
                <strong>Telefono</strong>
                <p>0831 771 564</p>
              </div>
            </div>
            <Link to="/il-team" className="btn btn--primary" style={{ marginTop: "1.5rem" }}>
              Conosci il Team
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
