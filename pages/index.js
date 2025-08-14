import Card from '../components/Card';
import Badge from '../components/Badge';
import Progress from '../components/Progress';
import Button from '../components/Button';
import { ious as iousSeed } from '../lib/data';

export default function Home() {
  const ious = iousSeed || [];

  const total = ious.reduce((s, x) => s + Number(x.amount || 0), 0);
  const latest = ious.slice(0, 3);

  return (
    <>
      <h1>Welcome to MulaNEX</h1>
      <p>One wallet for IOUs, Missions, Passports, BNPL & instant LoanLink.</p>

      <div className="grid grid--3" style={{marginTop:18}}>
        <Card title="Recent IOUs" subtitle="Your latest activity" action={<Button variant="ghost" onClick={()=>location.assign('/ious')}>Open IOUs</Button>}>
          <ul className="list">
            {latest.map((r)=>(
              <li key={r.id}>
                <strong>{r.from} → {r.to}</strong> · {Number(r.amount).toLocaleString('en-ZM')} ZMW · due {r.due} ·{' '}
                <Badge tone={r.status==='confirmed'?'success': r.status==='pending'?'warning':'neutral'}>{r.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Rewards Wallet" subtitle="Earn by using MulaNEX">
          <div style={{display:'grid', gap:10}}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
              <strong style={{fontSize:28}}>240 XP</strong>
              <small style={{color:'#9fb1ff'}}>to next tier</small>
            </div>
            <Progress value={48} />
            <ul className="list">
              <li>Mission reward — +25 XP</li>
              <li>Referral bonus — +50 XP</li>
              <li>IOU on‑time — +10 XP</li>
            </ul>
          </div>
        </Card>

        <Card title="Quick Links">
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, minmax(0,1fr))', gap:10}}>
            <Button variant="ghost" onClick={()=>location.assign('/missions')}>Missions</Button>
            <Button variant="ghost" onClick={()=>location.assign('/passports')}>Passports</Button>
            <Button variant="ghost" onClick={()=>location.assign('/bnpl')}>BNPL</Button>
            <Button variant="ghost" onClick={()=>location.assign('/loanlink')}>LoanLink</Button>
          </div>
          <div className="right" style={{marginTop:10, color:'#96a1c0'}}>
            Total IOUs · <strong>{total.toLocaleString('en-ZM')} ZMW</strong>
          </div>
        </Card>
      </div>
    </>
  );
}
