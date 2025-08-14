import Card from '../components/Card';
import { merchants } from '../lib/data';

export default function Merchants(){
  return (
    <main className="container grid">
      <Card title="BNPL Merchants" subtitle="Onboarded partners">
        <div className="grid cols-3">
          {merchants.map(m => (
            <div key={m.id} className="card">
              <h3 style={{marginTop:0}}>{m.name}</h3>
              <div className="muted">{m.category}</div>
              <div style={{marginTop:8}} className="kpi">{m.activeDeals} deal(s)</div>
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
