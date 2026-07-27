import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'How it Work', href: '/#how-it-works' },
    { label: 'Lore', href: '/#lore' },
    { label: 'Blog', href: '/blog' },
    { label: 'Documentation', href: 'https://docs.basedollar.org', external: true },
  ];

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background-color: #4a1c28;
          padding: 0 40px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: box-shadow 0.3s ease;
        }
        .navbar.scrolled {
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4);
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar-logo {
          height: 36px;
          object-fit: contain;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a {
          color: #f2e6d9;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
          white-space: nowrap;
        }
        .navbar-links a:hover {
          color: #f5d57d;
          opacity: 1;
        }
        .navbar-cta {
          flex-shrink: 0;
        }
        .navbar-cta a {
          display: inline-block;
          background-color: #f5d57d;
          color: #3a1520;
          font-size: 15px;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 24px;
          border: 2px solid #d4b85c;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          white-space: nowrap;
        }
        /* .navbar-cta a:hover {
          background-color: #e8c96e;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(245, 213, 125, 0.3);
        } */
        .navbar-cta a:active {
          transform: translateY(0);
        }

        /* Mobile hamburger */
        .navbar-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 1001;
        }
        .navbar-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background-color: #f2e6d9;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .navbar-hamburger.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .navbar-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .navbar-hamburger.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile menu overlay */
        .navbar-mobile-menu {
          display: none;
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #4a1c28;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding-top: 40px;
          gap: 24px;
          z-index: 999;
        }
        .navbar-mobile-menu.open {
          display: flex;
        }
        .navbar-mobile-menu a {
          color: #f2e6d9;
          text-decoration: none;
          font-size: 18px;
          font-weight: 500;
          padding: 8px 0;
          transition: color 0.2s ease;
        }
        .navbar-mobile-menu a:hover {
          color: #f5d57d;
        }
        .navbar-mobile-menu .mobile-cta {
          margin-top: 16px;
          display: inline-block;
          background-color: #f5d57d;
          color: #3a1520;
          font-size: 16px;
          font-weight: 600;
          padding: 12px 32px;
          border-radius: 24px;
          border: 2px solid #d4b85c;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0 20px;
          }
          .navbar-links {
            display: none;
          }
          .navbar-cta {
            display: none;
          }
          .navbar-hamburger {
            display: flex;
          }
        }
      `}</style>

      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <a href="/" className="navbar-brand">
          <img src="/images/logo.png" alt="Base Dollar" className="navbar-logo" />
        </a>

        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-cta">
          <a href="https://app.basedollar.org" target="_blank" rel="noopener noreferrer">
            Go to App
          </a>
        </div>

        <button
          className={`navbar-hamburger${mobileMenuOpen ? ' open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className={`navbar-mobile-menu${mobileMenuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {link.label}
          </a>
        ))}
        <a
          className="mobile-cta"
          href="https://app.basedollar.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMobileMenuOpen(false)}
        >
          Go to App
        </a>
      </div>
    </>
  );
};

export default Navbar;
