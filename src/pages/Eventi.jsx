import { eventi } from "../data/mockData.js";
import { formatDate } from "../components/Card.jsx";
import "./Eventi.css";

export default function Eventi() {
  return (
    <div className="eventi-page">
      <div className="page-header">
        <div className="container">
          <h1>Eventi</h1>
          <p>Conferenze, tornei, spettacoli e tutte le iniziative in programma.</p>
        </div>
      </div>
      <div className="container">
        <div className="eventi-list">
          {eventi.map((evento) => (
            <div key={evento.id} className="evento-card">
              <div className="evento-card__date-col">
                <span className="evento-card__day">{new Date(evento.data).getDate()}</span>
                <span className="evento-card__month">
                  {new Date(evento.data).toLocaleDateString("it-IT", { month: "long" })}
                </span>
                <span className="evento-card__year">
                  {new Date(evento.data).getFullYear()}
                </span>
              </div>
              <div className="evento-card__body">
                <h3>{evento.titolo}</h3>
                <div className="evento-card__details">
                  <span className="evento-card__detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {evento.ora}
                  </span>
                  <span className="evento-card__detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    {evento.luogo}
                  </span>
                </div>
                <p>{evento.descrizione}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
