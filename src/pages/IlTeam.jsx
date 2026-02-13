import { team } from "../data/mockData.js";
import "./IlTeam.css";

export default function IlTeam() {
  return (
    <div className="team-page">
      <div className="page-header">
        <div className="container">
          <h1>Il Team</h1>
          <p>Le persone che rendono possibile questo progetto: studenti e docenti uniti dalla passione.</p>
        </div>
      </div>
      <div className="container">
        <div className="team-grid">
          {team.map((membro) => (
            <div key={membro.id} className="team-card">
              <div className="team-card__avatar">
                <img src={membro.immagine} alt={membro.nome} loading="lazy" />
              </div>
              <div className="team-card__info">
                <h3>{membro.nome}</h3>
                <span className="team-card__role">{membro.ruolo}</span>
                <span className="team-card__class">{membro.classe}</span>
                <p>{membro.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
