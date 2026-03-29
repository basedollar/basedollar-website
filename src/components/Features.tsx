import React from 'react';

const Features: React.FC = () => {
  const cardStyle: React.CSSProperties = {
    background: '#f5e6c8',
    borderRadius: '20px',
    border: '2px solid #56232f',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    color: '#56232f',
    fontSize: '2.2rem',
    margin: '0 0 12px 0',
  };

  const textStyle: React.CSSProperties = {
    color: '#56232f',
    fontSize: '1.05rem',
    lineHeight: 1.6,
    margin: '0 0 24px 0',
    opacity: 0.85,
  };

  const buttonStyle: React.CSSProperties = {
    background: '#56232f',
    color: '#f5e6c8',
    border: 'none',
    borderRadius: '12px',
    padding: '18px 24px',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    width: '100%',
    marginTop: 'auto',
    fontFamily: "'DM Sans', sans-serif",
    transition: 'opacity 0.2s',
  };

  const marqueeContainerStyle: React.CSSProperties = {
    overflow: 'hidden',
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '2px solid #56232f',
    background: '#f0dbb8',
  };

  const camelImages = Array.from({ length: 12 }, (_, i) =>
    i % 2 === 0 ? '/images/camel-1.png' : '/images/camel-2.png'
  );

  const coinImages = Array.from({ length: 12 }, () => '/images/coin.png');

  return (
    <>
      <style>{`
        @keyframes marquee-left-to-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-right-to-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .features-marquee-ltr {
          display: flex;
          align-items: center;
          gap: 32px;
          animation: marquee-left-to-right 18s linear infinite;
          will-change: transform;
        }
        .features-marquee-rtl {
          display: flex;
          align-items: center;
          gap: 32px;
          animation: marquee-right-to-left 18s linear infinite;
          will-change: transform;
        }
        .features-marquee-ltr img,
        .features-marquee-rtl img {
          height: 68px;
          width: auto;
          flex-shrink: 0;
        }
        .features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
        .features-btn:hover {
          opacity: 0.88 !important;
        }
      `}</style>
      <section
        id="features"
        style={{
          background: 'linear-gradient(to bottom, #56232f 0%, #f5d57d 100%)',
          padding: '80px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <div className="features-grid">
            {/* Card 1 - Borrow */}
            <div style={cardStyle}>
              <div style={marqueeContainerStyle}>
                <div className="features-marquee-ltr">
                  {[...camelImages, ...camelImages].map((src, i) => (
                    <img key={i} src={src} alt="camel" draggable={false} />
                  ))}
                </div>
              </div>
              <div style={{ padding: '28px 28px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={headingStyle}>Borrow</h3>
                <p style={textStyle}>
                  Borrow Base Dollar against ETH, Liquid Staked ETH, Bitcoin, and several types of Aerodrome LP tokens.
                </p>
                <button className="features-btn" style={buttonStyle}>
                  Open a Trove
                </button>
              </div>
            </div>

            {/* Card 2 - Earn */}
            <div style={cardStyle}>
              <div style={marqueeContainerStyle}>
                <div className="features-marquee-rtl">
                  {[...coinImages, ...coinImages].map((src, i) => (
                    <img key={i} src={src} alt="coin" draggable={false} />
                  ))}
                </div>
              </div>
              <div style={{ padding: '28px 28px 28px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={headingStyle}>Earn</h3>
                <p style={textStyle}>
                  Deposit Base Dollar in the stability pools to earn sustainable multi-source yield.
                </p>
                <button className="features-btn" style={buttonStyle}>
                  Deposit &amp; Earn
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
