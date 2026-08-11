import React from 'react';

// const loreCards = [
//   { caption: 'BASE of the Mountain', image: '/images/lore1.png' },
//   { caption: 'Find Base Dollar', image: '/images/lore2.png', hasCoin: true },
//   { caption: 'Aero Ascension', image: '/images/lore3.png' },
//   { caption: 'Unlock Perma Regen', image: '/images/lore4.png' },
// ];

const Lore: React.FC = () => (
  <section id="lore" className="minimal-section lore-section">
    <div className="minimal-container">
      <header className="section-heading lore-heading">
        <img src="/images/coin.png" alt="" aria-hidden="true" />
        <h2>Base Dollar Origins</h2>
      </header>

      <div className="lore-story">
        <div className="lore-copy">
          <p>
            <span className="drop-cap">T</span>he journey started with Liquity V2, the first sustainable yield bearing decentralized stablecoin. Base Dollar is a friendly fork of Liquity and Nerite, but with a maximized Aero strategy that creates a growth flywheel, earning AERO rewards and reinvesting them autonomously to grow the Base Dollar protocol.
          </p>
          <p>
            Base Dollar was created to maximize capital efficiency and give the Aero ecosystem its own decentralized stablecoin which can be borrowed for miniscule interest rates while contributing to its capital flywheel. The protocol mints new stablecoins when they are borrowed, and thus has a fraction of the capital cost of other lending markets on the Base network. This creates a market for cheap, efficient, leverage on Aero LP positions and popular Base network assets like cbBTC.
          </p>
        </div>
        <figure className="lore-figure">
          <img src="/images/axo-mama-2.png" alt="Lore scene" />
        </figure>
      </div>

      {/* <div className="lore-index">
        {loreCards.map((card, index) => (
          <div className="lore-index-item" key={card.caption}>
            <img className="lore-card-art" src={card.image} alt="" />
            <span>0{index + 1}</span>
            <p>
              {card.hasCoin ? (
                <>Find <img src="/images/coin.png" alt="coin" /> <strong>Base Dollar</strong></>
              ) : card.caption}
            </p>
          </div>
        ))}
      </div> */}
    </div>
  </section>
);

export default Lore;
