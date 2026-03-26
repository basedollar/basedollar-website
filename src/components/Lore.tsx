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
        padding: '80px 0',
        width: '100%',
      }}
    >
      {/* Title Area */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          marginBottom: 48,
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
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
            fontFamily: "'DM Serif Display', serif",
            fontSize: 18,
            color: '#4a1c28',
            marginTop: 12,
            opacity: 0.8,
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          INTI God Sun is father of the earth live at the peak Andes Mountain.
        </p>
      </div>

      {/* Story Section */}
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
            position: 'relative',
            width: '100%',
            minHeight: 400,
            backgroundImage: 'url(/images/lore-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: 20,
            border: '2px solid #56232f',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Semi-transparent text card overlaid on left */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              maxWidth: 460,
              margin: '40px',
              backgroundColor: 'rgba(255, 253, 240, 0.88)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              borderRadius: 16,
              padding: '36px 32px',
              boxShadow: '0 4px 24px rgba(74, 28, 40, 0.10)',
            }}
          >
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 18,
                color: '#4a1c28',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              <span
                style={{
                  float: 'left',
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 52,
                  lineHeight: 1,
                  color: '#f5d57d',
                  backgroundColor: '#4a1c28',
                  borderRadius: 6,
                  width: 56,
                  height: 56,
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
              he story begins at the base of the Inca Mountains.
            </p>
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 16,
                color: '#4a1c28',
                lineHeight: 1.7,
                marginTop: 16,
                marginBottom: 0,
              }}
            >
              Legends speak of primordial, god-like beings still living at the
              summit.
            </p>
            <p
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 16,
                color: '#4a1c28',
                lineHeight: 1.7,
                marginTop: 16,
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
                  fontFamily: "'DM Serif Display', serif",
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

      {/* Large Full-Width Illustration */}
      <div
        style={{
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
          }}
        >
          <img
            src="/images/inti-bg.png"
            alt="INTI deity"
            style={{
              width: '100%',
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Lore;
