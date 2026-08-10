import React from 'react';

const AxoMama: React.FC = () => (
  <section className="minimal-section axo-section">
    <div className="minimal-container">
      {/* <div className="axo-intro">
        <div className="axo-title">
          <p className="eyebrow">Goddess of potatoes in Quichua.</p>
          <h2>Axo Mama</h2>
        </div>

        <img className="axo-goddess" src="/images/inti-text-bg.png" alt="INTI deity figure" />

        <p className="axo-sharing">
          She is the one who generously shares precious{' '}
          <img src="/images/coin.png" alt="coin" />{' '}
          <strong>BaseDollar</strong> with every holder.
        </p>
      </div> */}

      <div className="aero-story">
        <div className="aero-copy">
          <h2>Maximized AERO Synergy</h2>
          <p>
            BaseDollar was specifically designed to boost AERO and plug in to the Aerodrome liquidity flywheel.
          </p>
          <p>
            Aerodrome LP token depositors get cheap leverage on their LP positions, earning the protocol AERO rewards. AERO rewards boost BaseDollar liquidity providers and users across the Base network, increasing yield for holders. Increased yield drives more demand for BaseDollar products and borrowers. Borrower fees, liquidation fees, and incentives go to BaseDollar holders via the Stability Pools.
          </p>
          <p>AERO is essential every step of the way.</p>
        </div>
        <div className="aero-art">
          <img src="/images/axo-mama.png" alt="Axo Mama potatoes and corn" />
        </div>
      </div>
    </div>
  </section>
);

export default AxoMama;
