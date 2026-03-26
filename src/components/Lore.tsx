import React from 'react';

const loreCards = [
  { image: '/images/lore1.png', caption: 'BASE of the Mountain' },
  { image: '/images/lore2.png', caption: 'Find BaseD' },
  { image: '/images/lore3.png', caption: 'Aero Ascension' },
  { image: '/images/lore4.png', caption: 'Unlock Perma Regen' },
];

const Lore: React.FC = () => {
  return (
    <section
      id="lore"
      style={{
        backgroundColor: '#f5d57d',
        paddingTop: 80,
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
            color: '#4a1c28',
            margin: 0,
            lineHeight: 1.15,
          }}
        >
          Go Regen get BaseDollar
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#4a1c28',
            marginTop: 12,
            opacity: 0.8,
          }}
        >
          INTI God Sun is father of the earth live at the peak Andes Mountain.
        </p>
      </div>

      {/* Story Section - full width bg image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: 480,
          backgroundImage: 'url(/images/lore-bg.png)',
            backgroundSize: '434px',
            backgroundPosition: '0% 0%',
            backgroundRepeat: 'repeat',
          display: 'flex',
          alignItems: 'center',
          marginBottom: 48,
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '0 24px',
            width: '100%',
          }}
        >
          {/* Text card overlaid on left */}
          <div
            style={{
              maxWidth: 420,
              backgroundColor: 'rgba(255, 253, 240, 0.92)',
              borderRadius: 20,
              border: '3px solid #56232f',
              padding: '36px 32px',
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: '#3d3d3d',
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              <span
                style={{
                  float: 'left',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 48,
                  lineHeight: 1,
                  color: '#c4973a',
                  backgroundColor: '#56232f',
                  borderRadius: 6,
                  width: 52,
                  height: 52,
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
              he story begins at the base {'\u00a0'}of the Inca Mountains.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: '#3d3d3d',
                lineHeight: 1.75,
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              Legends speak of primordial, god-like beings still living at the
              summit.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: '#3d3d3d',
                lineHeight: 1.75,
                marginTop: 20,
                marginBottom: 0,
              }}
            >
              An advanced civilization capable of generating infinite wealth for
              those who temporarily deposit their tokens — instantly receiving{' '}
              <strong>BaseD</strong> stable coin tradable on Aerodrome exchange.
            </p>
          </div>
        </div>
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
                border: '2px solid #56232f',
                borderRadius: 16,
                overflow: 'hidden',
                backgroundColor: '#fffdf0',
              }}
            >
              <img
                src={card.image}
                alt={card.caption}
                style={{
                  width: '100%',
                  height: 220,
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
                {card.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Large Full-Width Deity Illustration */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 447,
          overflow: 'hidden',
        }}
      >
        <img
          src="/images/inti-bg.png"
          alt="INTI deity background"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: '50% 0%',
            display: 'block',
          }}
        />
        {/* Centered deity overlay figure */}
        <img
          src="/images/inti-text-bg.png"
          alt="INTI deity figure"
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            height: 628,
            width: 'auto',
            pointerEvents: 'none',
          }}
        />
      </div>
    </section>
  );
};

export default Lore;
