import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{ width: '100%' }}>
      {/* Hero Banner Image */}
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <img
          src="/images/hero-banner.png"
          alt="Base Dollar - Inca-themed landscape"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Dark Brown Content Section */}
      <div
        style={{
          backgroundColor: '#4a1c28',
          padding: '60px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '40px',
        }}
      >
        {/* Left: Heading + Subtext */}
        <div style={{ flex: '1 1 500px', maxWidth: '700px' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: '#f3f3e5',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}
          >
            Welcome to Base Dollar
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#f5f0d0',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '560px',
              opacity: 0.9,
            }}
          >
            A next-generation stablecoin protocol on Base with maximized AERO
            synergy.
          </p>
        </div>

        {/* Right: Deposit Now Button */}
        <div style={{ flex: '0 0 auto' }}>
          <a
            href="#deposit"
            style={{
              display: 'inline-block',
              backgroundColor: '#f5d57d',
              color: '#4a1c28',
              fontSize: '1.25rem',
              fontWeight: 700,
              padding: '18px 48px',
              borderRadius: '40px',
              textDecoration: 'none',
              cursor: 'pointer',
              border: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 6px 24px rgba(0, 0, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
              (e.currentTarget as HTMLElement).style.boxShadow =
                '0 4px 16px rgba(0, 0, 0, 0.3)';
            }}
          >
            Deposit Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
