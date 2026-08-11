import React from 'react';

const FeatureIcon = ({ type }: { type: 'borrow' | 'earn' }) => (
  <div className="feature-mark" aria-hidden="true">
    <img
      src={type === 'borrow' ? '/images/camel-1.png' : '/images/coin.png'}
      alt=""
    />
  </div>
);

const Features: React.FC = () => (
  <section id="features" className="minimal-section features-section">
    <div className="minimal-container feature-list">
      <article className="feature-row">
        <FeatureIcon type="borrow" />
        <div className="feature-copy">
          <h3>Borrow</h3>
          <p>
            Borrow $BD against ETH, Liquid Staked ETH, Bitcoin, and several types of Aero LP tokens.
          </p>
        </div>
        <button className="minimal-button" type="button">Open a Trove</button>
      </article>

      <article className="feature-row">
        <FeatureIcon type="earn" />
        <div className="feature-copy">
          <h3>Earn</h3>
          <p>
            Deposit $BD in the stability pools to earn sustainable multi-source yield.
          </p>
        </div>
        <button className="minimal-button" type="button">Deposit &amp; Earn</button>
      </article>
    </div>
  </section>
);

export default Features;
