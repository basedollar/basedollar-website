import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Choose Collateral',
    text: 'Use ETH, staked ETH, cbBTC, AERO, or Aerodrome LP tokens. Each asset has optimized LTVs for efficiency.',
  },
  {
    number: '2',
    title: 'Choose Your Interest Rate',
    text: 'Set your interest rate to as low as 0.5% APY, or choose a manager to set and forget.',
  },
  {
    number: '3',
    title: 'Borrow and Earn',
    text: 'Borrow BaseDollar on your terms while yield-bearing tokens keep earning yield for borrowers.',
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="minimal-section how-section">
    <div className="minimal-container">
      <header className="section-heading">
        <h2>Borrow Your Way</h2>
        <p>Leverage your LP tokens as collateral and earn yield while borrowing.</p>
      </header>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-item" key={step.number}>
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
