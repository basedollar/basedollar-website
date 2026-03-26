import React, { useState } from 'react';

const AxoMama: React.FC = () => {
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <section
      style={{
        backgroundColor: '#f5d57d',
        padding: '80px 24px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 60,
          flexWrap: 'wrap',
        }}
      >
        {/* Left column */}
        <div style={{ flex: '1 1 480px', minWidth: 280 }}>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              color: '#4a1c28',
              margin: '0 0 24px 0',
              lineHeight: 1.1,
            }}
          >
            Axo Mama
          </h2>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#4a1c28',
              margin: '0 0 16px 0',
              maxWidth: 520,
            }}
          >
            Goddess of potatoes in Quichua. She is the one who generously shares
            precious <strong>BaseD</strong> with every holder.
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.7,
              color: '#4a1c28',
              margin: '0 0 36px 0',
              maxWidth: 520,
            }}
          >
            Yield is determined by the amount you deposit and the lock-in time
            you choose.
          </p>
          <button
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            style={{
              padding: '16px 40px',
              backgroundColor: buttonHovered ? '#4a1c28' : 'transparent',
              color: buttonHovered ? '#f5d57d' : '#4a1c28',
              border: '2px solid #4a1c28',
              borderRadius: 32,
              fontSize: 18,
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              letterSpacing: 0.5,
            }}
          >
            Deposit Now
          </button>
        </div>

        {/* Right column */}
        <div
          style={{
            flex: '1 1 420px',
            minWidth: 280,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="/images/axo-mama.png"
            alt="A pile of potatoes and corn with floating coin icons"
            style={{
              width: '100%',
              maxWidth: 520,
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AxoMama;
