import React from 'react';

const OverMij = () => {
  return (
    <section
      id="overmij"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2rem',
        gap: '2rem',
        backgroundColor: '#D9C8AE',
        flexWrap: 'wrap'
      }}
    >
      {/* Foto links - Aalijah */}
      <img
        src="/images/aalijah.jpg"
        alt="Foto van Aalijah"
        style={{
          width: '150px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      />

      {/* Tekst in het midden */}
      <div style={{ maxWidth: '500px', textAlign: 'center' }}>
        <h2>Over Aalijah</h2>
        <p>
          Ik ben Aalijah, en ik geloof in de kracht van rust, verbinding en heling. Met jarenlange ervaring en een warm hart
          ontvang ik je graag in mijn praktijk voor lichaamsgerichte therapie.
        </p>
        <p>
          De dolfijn is mijn symbool: speels, vrij en krachtig — precies zoals jij mag zijn. 🐬
        </p>
      </div>

      {/* Foto rechts - Dolfijn */}
      <img
        src="/images/dolfijn.jpeg"
        alt="Dolfijn symbool van zachtheid"
        style={{
          width: '180px',
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
      />
    </section>
  );
};

export default OverMij;