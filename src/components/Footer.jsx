import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">EF</div>
            <h3>I.I.S.S. Epifanio Ferdinando</h3>
            <p>Via Collegio, 1 — 72023 Mesagne (BR)</p>
            <p>Puglia, Italia</p>
          </div>

          <div className="footer__nav">
            <h4>Navigazione</h4>
            <ul>
              <li><Link to="/notizie">Notizie</Link></li>
              <li><Link to="/interviste">Interviste</Link></li>
              <li><Link to="/foto-assemblee">Foto Assemblee</Link></li>
              <li><Link to="/eventi">Eventi</Link></li>
            </ul>
          </div>

          <div className="footer__nav">
            <h4>La Scuola</h4>
            <ul>
              <li><Link to="/il-team">Il Team</Link></li>
              <li><Link to="/chi-siamo">Chi Siamo</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} I.I.S.S. Epifanio Ferdinando — Mesagne (BR). Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
