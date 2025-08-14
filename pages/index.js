// /pages/index.js
import Link from 'next/link';
import Card from '../components/Card';
import { ious, wallet } from '../lib/data';

export default function Home() {
  return (
    <>
      <nav className="nav container">
        <div className="brand"><span className="badge">M</span> MulaNEX</div>
        <div style={{marginLeft:'auto'}} className="muted">Demo • Feature switches in Settings</div>
      </nav>

      <main className="container grid cols-3">
        <Card title="Recent IOUs" subtitle="Your latest activity">
          <ul className="list">
            {ious.map(i => (
              <li key={i.id}>{i.from} → {i.to} • {i.amount} • due {i.due} • {i.status}</li>
            ))}
          </ul>
          <div style={{marginTop:12}}><Link href="/ious" className="button">Open IOUs</Link></div>
        </Card>

        <Card title="Rewards Wallet" subtitle="Earn by using MulaNEX" right={<div className="kpi">{wallet.balance} XP</div>}>
          <ul className="list">
            {wallet.transactions.map(t => (<li key={t.id}>{t.type} — {t.amount>0?'+':''}{t.amount} XP · {t.ts}</li>))}
          </ul>
          <div style={{marginTop:12}}><Link href="/wallet" className="button">View Wallet</Link></div>
        </Card>

        <Card title="Quick Links">
          <div className="grid" style={{gridTemplateColumns:'repeat(2,1fr)'}}>
            <Link href="/missions" className="tab">Missions</Link>
            <Link href="/passports" className="tab">Passports</Link>
            <Link href="/bnpl" className="tab">BNPL</Link>
            <Link href="/loanlink" className="tab">LoanLink</Link>
            <Link href="/merchants" className="tab">Merchants</Link>
            <Link href="/feed" className="tab">Feed</Link>
          </div>
        </Card>
      </main>

      <div className="footer">© 2025 MulaNEX · Demo UI</div>
    </>
  );
}
