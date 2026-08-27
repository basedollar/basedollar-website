import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: '#4a1c28',
        width: '100%',
      }}
    >
      {/* Main Footer Area */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '60px 40px 48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: 40,
        }}
      >
        {/* Left Column */}
        <div style={{ maxWidth: 420, flex: '1 1 300px' }}>
          <img
            src="/images/footer-logo.png"
            alt="Base Dollar"
            style={{ height: 48, marginBottom: 20, display: 'block' }}
          />
          <p
            style={{
              color: '#f3f3e5',
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
              fontWeight: 400,
              opacity: 0.85,
            }}
          >
            A next-generation stablecoin protocol with maximized AERO synergy.
          </p>
        </div>

        {/* Right Column */}
        <div style={{ flex: '0 0 auto' }}>
          <h4
            style={{
              color: '#f3f3e5',
              fontSize: 14,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 1.5,
              marginTop: 0,
              marginBottom: 20,
            }}
          >
            Official Links
          </h4>

          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            {[
              {label: 'Blog', link: "/blog"},
              {label: 'Documentation', link: "https://docs.basedollar.org"},
              {label: 'Dune Analytics', link: "https://dune.com/niftyteam/basedollar"}
            ].map(({label, link}) => (
              <li key={label}>
                <a
                  href={link}
                  style={{
                    color: '#f3f3e5',
                    textDecoration: 'none',
                    fontSize: 15,
                    opacity: 0.85,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.opacity = '0.85';
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div
            style={{
              marginTop: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}
          >
            <span
              style={{
                color: '#f3f3e5',
                fontSize: 15,
                opacity: 0.85,
              }}
            >
              Follow on
            </span>
            <a href="https://x.com/BaseDollarOrg" aria-label="X (Twitter)" style={{ display: 'inline-flex' }}>
              <img
                src="/images/x-icon.svg"
                alt="X"
                style={{ width: 24, height: 24, display: 'block' }}
              />
            </a>
            {/* <a href="#" aria-label="Discord" style={{ display: 'inline-flex' }}>
              <img
                src="/images/discord-icon.png"
                alt="Discord"
                style={{ width: 24, height: 24, display: 'block' }}
              />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(243, 243, 229, 0.15)',
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span
            style={{
              color: '#f3f3e5',
              fontSize: 13,
              opacity: 0.7,
            }}
          >
            © 2026 Base Dollar
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
