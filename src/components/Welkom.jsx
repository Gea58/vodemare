// src/components/Welkom.jsx
import React from 'react';

const Welkom = () => {
  return (
    <section id="welkom" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welkom bij Aalijah Praktijk</h1>
      <p>
        Hier draait het om ontspanning, verbinding en herstel. Fijn dat je er bent.
      </p>
    </section>
  );
};
<div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', backgroundColor: '#E6E6FA' }}>
  <div style={{ flex: 1, padding: '2rem' }}>
    <img
      src="path/to/aalijah.jpg"
      alt="Foto van Aalijah"
      style={{ maxWidth: '100%', borderRadius: '12px' }}
    />
  </div>
  <div style={{ flex: 2, padding: '2rem' }}>
    <h1>Welkom op de site van Aalijah</h1>
    <p>Wat fijn dat je er bent!</p>
    {/* Voeg hier nog meer inhoud of knoppen toe */}
  </div>
</div>

export default Welkom;