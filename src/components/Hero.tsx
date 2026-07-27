import React, { useState } from 'react';

const HeroBorderStrip = () => (
  <div
    style={{
      width: '100%',
      height: 33,
      minHeight: 33,
      flexShrink: 0,
      backgroundImage: 'url(/images/border-pattern.png)',
      backgroundRepeat: 'repeat',
      backgroundSize: '45px',
      backgroundColor: '#56232f',
      position: 'relative',
      zIndex: 2,
    }}
  />
);

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
        setMessage('You\'re on the waitlist!');
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
    return (
      <div style={{ flex: '0 0 auto', textAlign: 'center' }}>
        <p style={{
          color: '#f5d57d',
          fontSize: '1.25rem',
          fontWeight: 700,
          margin: 0,
        }}>
          ✓ {message}
        </p>
      </div>
    );
  }

  return (
    <div style={{ flex: '1 1 280px', maxWidth: '460px', minWidth: 0 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'stretch', border: '2px solid #f5d57d', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '10px', width: '100%', boxSizing: 'border-box' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
          required
          style={{
            padding: '14px 16px',
            fontSize: '1rem',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#f3f3e5',
            flex: '1 1 0%',
            minWidth: 0,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{
            backgroundColor: '#f5d57d',
            color: '#4a1c28',
            fontSize: '1rem',
            fontWeight: 700,
            padding: '14px 20px',
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            border: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            cursor: status === 'loading' ? 'wait' : 'pointer',
            letterSpacing: '0.5px',
            opacity: status === 'loading' ? 0.7 : 1,
            transition: 'opacity 0.2s ease',
          }}
        >
          {status === 'loading' ? 'Subscribing...' : 'Get Updates'}
        </button>
      </form>
      <p style={{ color: '#f5f0d0', fontSize: '0.85rem', marginTop: '8px', marginBottom: 0 }}>
        Get notified on updates. No spam, ever.
      </p>
      {status === 'error' && (
        <p style={{ color: '#ff6b6b', fontSize: '0.9rem', marginTop: '8px', marginBottom: 0 }}>
          {message}
        </p>
      )}
    </div>
  );
};

const Hero: React.FC = () => {
  return (
    <section style={{
      width: '100%',
      paddingTop: 72,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      boxSizing: 'border-box',
    }}>
      {/* Hero Image Area with border strips — fills remaining space */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top border strip */}
        <HeroBorderStrip />

        {/* Hero Banner Image — fills remaining space between strips */}
        <div style={{
          height: '50vw',
          maxHeight: 'calc(100svh - 350px)',
          minHeight: '200px',
          overflow: 'hidden',
        }}>
          <img
            src="/images/hero-banner-2.png"
            alt="Base Dollar - Inca-themed landscape"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Bottom border strip */}
        <HeroBorderStrip />
      </div>

      {/* Dark Brown Content Section — never shrinks, always visible */}
      <div
        style={{
          backgroundColor: '#4a1c28',
          padding: '40px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
          flexShrink: 0,
        }}
      >
        {/* Left: Heading + Subtext */}
        <div style={{ flex: '1 1 300px', maxWidth: '700px', minWidth: 0 }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 800,
              color: '#f3f3e5',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}
          >
            Welcome to Base Dollar
          </h1>
          <p
            style={{
              fontSize: '1.25rem',
              color: '#f5f0d0',
              margin: 0,
              lineHeight: 1.6,
              maxWidth: '560px',
              opacity: 0.9,
            }}
          >
            A next-generation stablecoin protocol on Base with maximized AERO
            synergy.
          </p>
        </div>

        {/* Right: Email Signup Form */}
        <EmailForm />

        {/* Right: Deposit Now Button */}
        {/* <div style={{ flex: '0 0 auto' }}>
          <a
            href="#deposit"
            style={{
              display: 'inline-block',
              backgroundColor: '#f5d57d',
              color: '#4a1c28',
              fontSize: '1.25rem',
              fontWeight: 700,
              padding: '18px 48px',
              borderRadius: '40px',
              textDecoration: 'none',
              cursor: 'pointer',
              border: 'none',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
              letterSpacing: '0.5px',
            }}
          >
            Deposit Now
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
