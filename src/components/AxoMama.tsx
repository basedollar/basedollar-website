import React, { useEffect, useRef, useState } from 'react';

const coin = (
  <img
    src="/images/coin.png"
    alt="coin"
    style={{ width: 22, height: 22, verticalAlign: 'middle', margin: '0 3px' }}
  />
);

const AxoMama: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Progress from 0 (section entering bottom) to 1 (section leaving top)
      const progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
      setOffset(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxBg = offset * -40; // bg moves slower
  const parallaxFg = offset * -80; // figure moves faster

  return (
    <>
      <style>{`
        .axo-mama-section {
          background-color: #f5d57d;
          padding: 40px 24px 80px;
          width: 100%;
        }
        .axo-inti-wrapper {
          max-width: 1200px;
          margin: auto;
          position: relative;
        }
        /* Bordered card: landscape only (inti-bg.png) */
        .axo-inti-card {
          width: 100%;
          border-radius: 10px;
          border: 3px solid #56232f;
          overflow: hidden;
          position: relative;
          height: 340px;
        }
        .axo-inti-card img {
          width: 100%;
          object-fit: cover;
          object-position: center top;
          will-change: transform;
        }
        /* Text below the card, on the sides of the goddess (inti-text-bg.png) */
        .axo-caption-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          padding: 40px 4px 0;
          position: relative;
        }
        .axo-text-left {
          position: relative;
          z-index: 2;
          flex: 1 1 0;
          max-width: 38%;
          text-align: left;
        }
        .axo-text-left h2 {
          font-family: 'Inter', sans-serif;
          font-size: 52px;
          color: #4a1c28;
          margin: 0 0 12px 0;
          line-height: 1.1;
          font-weight: 800;
        }
        .axo-text-left p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #4a1c28;
          margin: 0;
          opacity: 0.8;
        }
        .axo-text-right {
          position: relative;
          z-index: 2;
          flex: 1 1 0;
          max-width: 38%;
          min-width: 0;
          text-align: right;
        }
        /* Goddess: centered; caption row stacks above so text stays on sides */
        .axo-goddess {
          position: absolute;
          left: 50%;
          bottom: -60px;
          transform: translateX(-50%);
          height: 580px;
          width: auto;
          pointer-events: none;
          z-index: 1;
          will-change: transform;
        }
        .axo-text-right p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          color: #4a1c28;
          line-height: 1.7;
          margin: 0;
        }

        /* Maximized AERO Synergy */
        .axo-aero-section {
          max-width: 1200px;
          padding-top: 20px;
          margin: 120px auto 0;
        }
        .axo-aero-content {
          display: flex;
          align-items: center;
          gap: 60px;
          flex-wrap: wrap;
        }
        .axo-aero-text {
          flex: 1 1 480px;
          min-width: 280px;
        }
        .axo-aero-heading {
          font-family: 'Inter', sans-serif;
          font-size: 52px;
          color: #4a1c28;
          margin: 0 0 24px 0;
          line-height: 1.1;
        }
        .axo-aero-text p {
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          line-height: 1.7;
          color: #4a1c28;
          margin: 0 0 16px 0;
          max-width: 520px;
        }
        .axo-aero-image {
          flex: 1 1 420px;
          min-width: 280px;
          display: flex;
          justify-content: center;
        }
        .axo-aero-image img {
          width: 100%;
          max-width: 520px;
          height: auto;
          object-fit: contain;
        }

        @media (max-width: 768px) {
          .axo-inti-wrapper {
            display: flex;
            flex-direction: column;
            margin-bottom: 56px;
          }
          .axo-inti-card {
            height: auto;
            aspect-ratio: 3 / 2;
            order: 1;
          }
          .axo-goddess {
            position: relative;
            left: auto;
            bottom: auto;
            height: min(72vw, 380px);
            margin: -40px auto 0;
            z-index: 2;
            order: 2;
            transform: none !important;
          }
          .axo-caption-row {
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding-top: 8px;
            order: 3;
          }
          .axo-text-left,
          .axo-text-right {
            max-width: 100%;
            text-align: center;
          }
          .axo-text-left h2 {
            font-size: 40px;
          }
          .axo-aero-section {
            margin-top: 48px;
          }
          .axo-aero-content {
            flex-direction: column;
            gap: 32px;
          }
          .axo-aero-heading {
            font-size: 36px !important;
          }
          .axo-aero-text p {
            max-width: 100% !important;
          }
        }
      `}</style>
      <section style={{
          backgroundColor: '#f5d57d',
          padding: '40px 24px 80px',
          width: '100%',
        }} ref={sectionRef}>
        {/* Inti scene with parallax layers */}
        <div className="axo-inti-wrapper">
          <div className="axo-inti-card">
            <img
              src="/images/inti-bg.png"
              alt="INTI deity background"
              style={{
                transform: `translateY(${parallaxBg}px) scale(1.08)`,
              }}
            />
          </div>
          <div className="axo-caption-row">
            <div className="axo-text-left">
              <h2>Axo Mama</h2>
              <p>Goddess of potatoes in Quichua.</p>
            </div>
            <div className="axo-text-right">
              <p>
                She is the one who generously shares precious{' '}
                {coin}{' '}<strong>BaseDollar</strong> with every holder.
              </p>
            </div>
          </div>
          <img
            className="axo-goddess"
            src="/images/inti-text-bg.png"
            alt="INTI deity figure"
            style={{ transform: `translateX(-50%) translateY(${parallaxFg}px)` }}
          />
        </div>

        {/* Maximized AERO Synergy */}
        <div className="axo-aero-section">
          <div className="axo-aero-content">
            <div className="axo-aero-text">
              <h2 className="axo-aero-heading">Maximized AERO Synergy</h2>
              <p>
                BaseDollar was specifically designed to boost AERO and plug in to the
                Aerodrome liquidity flywheel.
              </p>
              <p>
                Aerodrome LP token depositors get cheap leverage on their LP positions,
                earning the protocol AERO rewards. AERO rewards boost BaseDollar liquidity
                providers and users across the Base network, increasing yield for holders.
                Increased yield drives more demand for BaseDollar products and borrowers.
                Borrower fees, liquidation fees, and incentives go to BaseDollar holders
                via the Stability Pools.
              </p>
              <p>AERO is essential every step of the way.</p>
            </div>
            <div className="axo-aero-image">
              <img
                src="/images/axo-mama.png"
                alt="Axo Mama potatoes and corn"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AxoMama;
