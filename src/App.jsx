import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Notizie from "./pages/Notizie.jsx";
import NotiziaSingola from "./pages/NotiziaSingola.jsx";
import Interviste from "./pages/Interviste.jsx";
import IntervistaSingola from "./pages/IntervistaSingola.jsx";
import FotoAssemblee from "./pages/FotoAssemblee.jsx";
import IlTeam from "./pages/IlTeam.jsx";
import Eventi from "./pages/Eventi.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notizie" element={<Notizie />} />
          <Route path="/notizie/:id" element={<NotiziaSingola />} />
          <Route path="/interviste" element={<Interviste />} />
          <Route path="/interviste/:id" element={<IntervistaSingola />} />
          <Route path="/foto-assemblee" element={<FotoAssemblee />} />
          <Route path="/il-team" element={<IlTeam />} />
          <Route path="/eventi" element={<Eventi />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
