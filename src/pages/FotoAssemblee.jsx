import { useState } from "react";
import { fotoAssemblee } from "../data/mockData.js";
import { formatDate } from "../components/Card.jsx";
import "./FotoAssemblee.css";

export default function FotoAssemblee() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div className="foto-page">
      <div className="page-header">
        <div className="container">
          <h1>Foto Assemblee</h1>
          <p>I momenti migliori delle nostre assemblee d'istituto, catturati in immagini.</p>
        </div>
      </div>
      <div className="container">
        {fotoAssemblee.map((assemblea) => (
          <section key={assemblea.id} className="assemblea-section">
            <div className="assemblea-section__header">
              <h2>{assemblea.titolo}</h2>
              <time>{formatDate(assemblea.data)}</time>
              <p>{assemblea.descrizione}</p>
            </div>
            <div className="foto-grid">
              {assemblea.foto.map((foto, i) => (
                <button
                  key={i}
                  className="foto-grid__item"
                  onClick={() => setLightbox(foto)}
                >
                  <img src={foto} alt={`${assemblea.titolo} - foto ${i + 1}`} loading="lazy" />
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>&times;</button>
          <img src={lightbox} alt="Foto ingrandita" />
        </div>
      )}
    </div>
  );
}
