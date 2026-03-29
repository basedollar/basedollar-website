import React from 'react';

const coin = (
  <img
    src="/images/coin.png"
    alt="coin"
    style={{ width: 24, height: 24, verticalAlign: 'middle', margin: '0 4px' }}
  />
);

const loreCards = [
  { image: '/images/lore1.png', caption: 'BASE of the Mountain' },
  { image: '/images/lore2.png', caption: 'Find BaseD', hasCoin: true },
  { image: '/images/lore3.png', caption: 'Aero Ascension' },
  { image: '/images/lore4.png', caption: 'Unlock Perma Regen' },
];

const Lore: React.FC = () => {
  return (
    <>
    <style>{`
      .lore-image-col img {
        flex: '1 1 360px',
        width: '100%',
      }
      @media (max-width: 1100px) {
        .lore-story-row {
          flex-direction: column-reverse !important;
        }
        .lore-image-col img {
          max-width: 400px;
        }
      }
      @media (max-width: 800px) {
        .lore-text-col,
        .lore-image-col {
          flex: 1 1 auto;
          width: 100%;
          max-width: 100%;
        }
        .lore-image-col img {
          width: 100%;
          min-height: '100%';
          height: '100%';
          object-fit: contain;
        }
        .lore-cards-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .lore-card-img {
          height: 200px;
        }
      }
    `}</style>
    <section
      id="lore"
      style={{
        backgroundColor: '#f5d57d',
        paddingTop: 60,
        paddingBottom: 0,
        width: '100%',
      }}
    >
      {/* Title Area */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'left',
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 52,
            textAlign: 'center',
            color: '#4a1c28',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          <img
            src="/images/coin.png"
            alt="coin"
            style={{ width: 48, height: 48, verticalAlign: 'middle', margin: '0 6px 6px 0' }}
          />
          BaseDollar Origins
        </h2>
      </div>

      {/* Story Section - flex row: text left, image right */}
      <div
        className="lore-story-row"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          alignItems: 'stretch',
          gap: 32,
          marginBottom: 48,
          flexWrap: 'wrap',
        }}
      >
          {/* Text card on the left — 50% row width beside image */}
          <div
            className="lore-text-col"
            style={{
              flex: '1 1 360px',
              backgroundColor: 'rgba(255, 253, 240, 0.92)',
              borderRadius: 10,
              fontSize: 18,
              border: '3px solid #56232f',
              padding: '46px 32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#3d3d3d',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <span
                style={{
                  float: 'left',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: 48,
                  lineHeight: 1,
                  color: '#c4973a',
                  backgroundColor: '#56232f',
                  borderRadius: 6,
                  width: 54,
                  height: 54,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 12,
                  marginBottom: 4,
                  marginTop: 2,
                }}
              >
                T
              </span>
              he journey started with Liquity V2, the first sustainable yield bearing decentralized stablecoin. BaseDollar is a friendly fork of Liquity and Nerite, but with a maximized Aerodrome strategy that creates a growth flywheel, earning AERO rewards and reinvesting them autonomously to grow the BaseDollar protocol.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: '#3d3d3d',
                lineHeight: 1.75,
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              BaseDollar was created to maximize capital efficiency and give the Aerodrome ecosystem its own decentralized stablecoin which can be borrowed for miniscule interest rates while contributing to its capital flywheel. The protocol mints new stablecoins when they are borrowed, and thus has a fraction of the capital cost of other lending markets on the Base network. This creates a market for cheap, efficient, leverage on Aerodrome LP positions and popular Base network assets like cbBTC.
            </p>
          </div>

          <img
            className="lore-image-col"
            src="/images/lore-bg.png"
            alt="Lore scene"
          />
      </div>

      {/* 4 Illustration Cards */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          marginBottom: 48,
        }}
      >
        <div
          className="lore-cards-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }}
        >
          {loreCards.map((card, index) => (
            <div
              key={index}
              style={{
                overflow: 'hidden',
              }}
            >
              <img
                src={card.image}
                alt={card.caption}
                className="lore-card-img"
                style={{
                  width: '100%',
                  height: 340,
                  border: '2px solid #56232f',
                  borderRadius: 10,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 15,
                  color: '#4a1c28',
                  textAlign: 'center',
                  padding: '12px 8px',
                  margin: 0,
                }}
              >
                {card.hasCoin ? (
                  <>Find {coin}<strong>BaseDollar</strong></>
                ) : (
                  card.caption
                )}
              </p>
            </div>
          ))}
        </div>
      </div>


    </section>
    </>
  );
};

export default Lore;
