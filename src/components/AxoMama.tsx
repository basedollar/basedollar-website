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
          padding: 0 24px 80px;
          width: 100%;
        }
        .axo-inti-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          margin-bottom: 48px;
        }
        /* The bordered card for inti-bg */
        .axo-inti-card {
          width: 100%;
          border-radius: 16px;
          border: 3px solid #56232f;
          overflow: hidden;
          position: relative;
          height: 340px;
        }
        .axo-inti-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          display: block;
          will-change: transform;
        }
        /* The goddess figure overlaying */
        .axo-goddess {
          position: absolute;
          left: 50%;
          bottom: -80px;
          transform: translateX(-50%);
          height: 540px;
          width: auto;
          pointer-events: none;
          z-index: 2;
          will-change: transform;
        }
        /* Text area below */
        .axo-text-area {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 48px;
          padding-top: 80px;
          flex-wrap: wrap;
        }
        .axo-text-left {
          flex: 0 0 auto;
        }
        .axo-text-left h2 {
          font-family: 'Inter', sans-serif;
          font-size: 52px;
          color: #4a1c28;
          margin: 0 0 12px 0;
          line-height: 1.1;
          font-style: italic;
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
          flex: 1 1 300px;
        }
        .axo-text-right p {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: #4a1c28;
          line-height: 1.7;
          margin: 0;
        }

        /* Maximized AERO Synergy */
        .axo-aero-section {
          max-width: 1200px;
          margin: 80px auto 0;
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
          .axo-inti-card {
            height: auto;
            aspect-ratio: 3 / 2;
          }
          .axo-goddess {
            height: 380px;
            bottom: -40px;
          }
          .axo-text-area {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 20px;
            padding-top: 60px;
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
      <section className="axo-mama-section" ref={sectionRef}>
        {/* Inti scene with parallax layers */}
        <div className="axo-inti-wrapper">
          <div className="axo-inti-card">
            <img
              src="/images/inti-bg.png"
              alt="INTI deity background"
              style={{ transform: `translateY(${parallaxBg}px)` }}
            />
          </div>
          <img
            className="axo-goddess"
            src="/images/inti-text-bg.png"
            alt="INTI deity figure"
            style={{ transform: `translateX(-50%) translateY(${parallaxFg}px)` }}
          />
        </div>

        {/* Axo Mama text */}
        <div className="axo-text-area">
          <div className="axo-text-left">
            <h2>Axo Mama</h2>
            <p>Goddess of potatoes in Quichua.</p>
          </div>
          <div className="axo-text-right">
            <p>
              She is the one who generously shares precious{' '}
              {coin}{' '}<strong>BaseD</strong> with every holder.
            </p>
          </div>
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
