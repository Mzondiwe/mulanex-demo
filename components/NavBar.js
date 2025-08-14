// components/NavBar.js
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/ious', label: 'IOUs' },
  { href: '/missions', label: 'Missions' },
  { href: '/passports', label: 'Passports' },
  { href: '/bnpl', label: 'BNPL' },
  { href: '/loanlink', label: 'LoanLink' },
  { href: '/settings', label: 'Settings' },
];

export default function NavBar() {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <div className="brand">
          <span className="brand__logo">M</span>
          <span className="brand__name">MulaNEX</span>
        </div>
        <nav className="nav__links">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
