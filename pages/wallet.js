import Card from '../components/Card';
import { wallet } from '../lib/data';

export default function Wallet(){
  return (
    <main className="container grid cols-3">
      <Card title="Wallet" subtitle="Your rewards & XP" right={<div className="kpi">{wallet.balance} XP</div>}>
        <ul className="list">
          {wallet.transactions.map(t => <li key={t.id}>{t.ts} — {t.type} — {t.amount>0?'+':''}{t.amount} XP</li>)}
        </ul>
      </Card>
    </main>
  );
}
