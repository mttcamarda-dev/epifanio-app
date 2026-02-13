import Card from "../components/Card.jsx";
import { interviste } from "../data/mockData.js";

export default function Interviste() {
  return (
    <div className="interviste-page">
      <div className="page-header">
        <div className="container">
          <h1>Interviste</h1>
          <p>Le voci della nostra scuola: studenti, docenti e personale raccontano la loro esperienza.</p>
        </div>
      </div>
      <div className="container">
        <div className="cards-grid">
          {interviste.map((i) => (
            <Card
              key={i.id}
              to={`/interviste/${i.id}`}
              immagine={i.immagine}
              data={i.data}
              titolo={i.titolo}
              sommario={i.sommario}
              badge={i.ruolo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
