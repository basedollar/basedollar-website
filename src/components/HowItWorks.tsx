import React from 'react';

const steps = [
  {
    number: '1',
    icon: '/images/step1.png',
    title: 'Choose Collateral',
    text: 'Use ETH, staked ETH, cbBTC, AERO, or Aerodrome LP tokens. Each asset has optimized LTVs for efficiency.',
  },
  {
    number: '2',
    icon: '/images/step2.png',
    title: 'Choose Your Interest Rate',
    text: 'Set your interest rate to as low as 0.5% APY, or choose a manager to set and forget.',
  },
  {
    number: '3',
    icon: '/images/step3.png',
    title: 'Borrow and Earn',
    text: 'Borrow BaseDollar on your terms while yield-bearing tokens keep earning yield for borrowers.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: '#f5d57d',
        padding: '60px 20px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {/* Section heading */}
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '3rem',
            color: '#56232f',
            textAlign: 'center',
            margin: 0,
          }}
        >
          Borrow Your Way
        </h2>

        {/* Subtitle */}
        <p
          style={{
            textAlign: 'center',
            color: '#56232f',
            fontSize: '1.15rem',
            marginTop: 12,
            marginBottom: 48,
            opacity: 0.85,
          }}
        >
          Leverage your LP tokens as collateral and earn yield while borrowing.
        </p>

        {/* Card */}
        <div
          style={{
            backgroundColor: '#fdf6e3',
            border: '2px solid #56232f',
            borderRadius: 10,
            padding: '48px 32px',
          }}
        >
          {/* 3-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 40,
            }}
          >
            {steps.map((step) => (
              <div
                key={step.number}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                {/* Number circle */}
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: '#56232f',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    marginBottom: 20,
                    flexShrink: 0,
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <img
                  src={step.icon}
                  alt={step.title}
                  style={{
                    width: 120,
                    height: 120,
                    objectFit: 'contain',
                    marginBottom: 20,
                  }}
                />

                {/* Step title */}
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '1.35rem',
                    color: '#56232f',
                    margin: '0 0 10px 0',
                    fontWeight: 700,
                  }}
                >
                  {step.title}
                </h3>

                {/* Step text */}
                <p
                  style={{
                    color: '#56232f',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    margin: 0,
                    opacity: 0.8,
                    maxWidth: 300,
                  }}
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
