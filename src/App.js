import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Welkom from './components/Welkom';
import OverMij from './components/OverMij';
import Praktijk from './Pages/Praktijk';
import Theorievormen from './Pages/Theorievormen';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar />

        {/* Visitekaartje rechtsboven in beeld */}
        <img
          src="/images/visitekaartje.jpg"
          alt="Visitekaartje Aalijah"
          style={{
            position: 'fixed',
            top: '40px',
            right: '20px',
            width: '240px',
            boxShadow: '0 4px 12px rgba(135, 124, 124, 0.15)',
            borderRadius: '8px',
            zIndex: 1000,
          }}
         />c
          {/* Paginaweergave */}
          <main style={{ marginLeft: '180px', padding: '2rem' }}>
          
            <Routes>
              <Route path="/" element={
                <>
                  <Welkom />
                  <OverMij />
                </>
              } />
              <Route path="/praktijk" element={<Praktijk />} />
              <Route path="/theorievormen" element={<Theorievormen />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      
    </Router>
  );
}

export default App;
