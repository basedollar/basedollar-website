import React, { useState } from 'react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setMessage("You're on the waitlist!");
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Try again.');
    }
  };

  if (status === 'success') {
    return <p className="hero-form-message hero-form-message--success">✓ {message}</p>;
  }

  return (
    <div className="hero-form-wrap">
      <form className="hero-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="hero-email">Email address</label>
        <input
          id="hero-email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setStatus('idle');
          }}
          required
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Subscribing...' : 'Get Updates'}
        </button>
      </form>
      <p className="hero-form-note">Get notified on updates. No spam, ever.</p>
      {status === 'error' && (
        <p className="hero-form-message hero-form-message--error">{message}</p>
      )}
    </div>
  );
};

const Hero: React.FC = () => (
  <section className="hero">
    <style>{`
      .hero {
        position: relative;
        min-height: calc(100svh - 72px);
        margin-top: 72px;
        padding: 0 24px;
        display: grid;
        place-items: center;
        overflow: hidden;
        background: #dca95d url('/images/hero-landscape-generated.webp') center top / cover no-repeat;
        isolation: isolate;
      }
      .hero::before {
        content: '';
        position: absolute;
        inset: 0;
        background: rgba(245, 213, 125, 0.3);
        z-index: -1;
      }
      .hero::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 18px;
        background: #56232f url('/images/border-pattern.png') repeat center / 30px auto;
        z-index: 3;
      }
      .hero-content {
        width: min(830px, 100%);
        min-width: 0;
        margin-top: -18px;
        text-align: center;
        z-index: 2;
      }
      .hero h1 {
        max-width: 780px;
        margin: 0 auto;
        color: #4a1c28;
        font-size: clamp(3.25rem, 7.2vw, 6.6rem);
        line-height: 0.92;
        letter-spacing: -0.065em;
        text-wrap: balance;
      }
      .hero-description {
        max-width: 620px;
        margin: 28px auto 30px;
        color: #63303d;
        font-size: clamp(1.05rem, 2vw, 1.3rem);
        line-height: 1.55;
        text-wrap: balance;
      }
      .hero-form-wrap {
        width: min(520px, 100%);
        margin: 0 auto;
      }
      .hero-form {
        display: flex;
        width: 100%;
        border: 0;
        border-radius: 10px;
        background: transparent;
        transition: box-shadow 0.2s ease;
      }
      .hero-form:focus-within {
        box-shadow: 0 0 0 3px rgba(74, 28, 40, 0.12);
      }
      .hero-form input {
        min-width: 0;
        flex: 1;
        padding: 14px 16px;
        border: 2px solid #4a1c28;
        border-right: 0;
        border-radius: 10px 0 0 10px;
        outline: none;
        background: rgba(255, 252, 232, 0.72);
        color: #4a1c28;
        font: inherit;
      }
      .hero-form input::placeholder {
        color: rgba(74, 28, 40, 0.55);
      }
      .hero-form input:focus {
        outline: none;
      }
      .hero-form button {
        padding: 14px 22px;
        border: 2px solid #4a1c28;
        border-radius: 0 10px 10px 0;
        margin: 0;
        appearance: none;
        background: #4a1c28;
        color: #fff9dd;
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        white-space: nowrap;
        transition: background-color 0.2s ease, opacity 0.2s ease;
      }
      .hero-form button:hover:not(:disabled) {
        background: #592233;
        opacity: 0.94;
      }
      .hero-form button:disabled {
        cursor: wait;
        opacity: 0.7;
      }
      .hero-form-note,
      .hero-form-message {
        margin: 10px 0 0;
        font-size: 0.82rem;
      }
      .hero-form-note { color: rgba(74, 28, 40, 0.72); }
      .hero-form-message--success { color: #4a1c28; font-weight: 700; }
      .hero-form-message--error { color: #a32335; }
      .hero-people {
        position: absolute;
        left: clamp(16px, 3vw, 48px);
        bottom: -50px;
        width: clamp(260px, 29vw, 430px);
        z-index: 1;
        pointer-events: none;
        filter: drop-shadow(0 18px 18px rgba(74, 28, 40, 0.12));
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      @media (max-width: 760px) {
        .hero {
          min-height: 690px;
          padding-inline: 20px;
          place-items: start center;
        }
        .hero-content {
          margin-top: 105px;
        }
        .hero h1 {
          font-size: clamp(3.2rem, 16vw, 5.2rem);
        }
        .hero-description {
          margin-top: 22px;
        }
        .hero-people {
          left: -12px;
          bottom: -34px;
          width: 250px;
          opacity: 0.9;
        }
      }
      @media (max-width: 500px) {
        .hero-form input { padding-inline: 13px; }
        .hero-form button { padding-inline: 16px; }
        .hero-people { width: 210px; left: -16px; }
      }
      @media (prefers-reduced-motion: reduce) {
        .hero-form button { transition: none; }
      }
    `}</style>

    {/* <img className="hero-people" src="/images/hero-element.png" alt="" aria-hidden="true" /> */}

    <div className="hero-content">
      <h1>Base Dollar</h1>
      <p className="hero-description">
        A next-generation stablecoin protocol on Base with maximized AERO synergy.
      </p>
      <EmailForm />
    </div>
  </section>
);

export default Hero;
