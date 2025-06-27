import React, { useState } from 'react';

function Contact() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [bericht, setBericht] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bedankt voor je bericht, ${naam}!`);
    // Hier zou je normaal de gegevens versturen naar een server of e-mailservice
    setNaam('');
    setEmail('');
    setBericht('');
  };

  return (
    <div>
      <h1>Neem contact op</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Naam:</label><br />
          <input
            type="text"
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Bericht:</label><br />
          <textarea
            value={bericht}
            onChange={(e) => setBericht(e.target.value)}
            required
            rows="5"
            style={{ width: '100%' }}
          />
        </div>
        <button type="submit">Verstuur</button>
      </form>
    </div>
  );
}

export default Contact;