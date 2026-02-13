import Card from "../components/Card.jsx";
import { notizie } from "../data/mockData.js";
import "./Notizie.css";

export default function Notizie() {
  return (
    <div className="notizie-page">
      <div className="page-header">
        <div className="container">
          <h1>Notizie</h1>
          <p>Tutte le ultime novità dal mondo dell'Epifanio Ferdinando.</p>
        </div>
      </div>
      <div className="container">
        <div className="cards-grid">
          {notizie.map((n) => (
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
    </div>
  );
}
