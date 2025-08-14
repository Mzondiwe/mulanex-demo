import { useState } from 'react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { ious as seed } from '../lib/data';

export default function IOUs() {
  const [rows, setRows] = useState(seed || []);
  const [form, setForm] = useState({ from:'', to:'', amount:'', due:'' });

  const submit = (e)=>{
    e.preventDefault();
    if(!form.from || !form.to || !form.amount || !form.due) return;
    const row = { id: String(Date.now()), ...form, status:'pending' };
    setRows([row, ...rows]);
    setForm({ from:'', to:'', amount:'', due:'' });
    alert('IOU (demo) added. In production the recipient gets SMS/WhatsApp.');
  };

  return (
    <>
      <h1>IOUs</h1>

      <div className="grid" style={{gridTemplateColumns:'1.2fr .8fr', gap:18}}>
        <Card title="Create IOU" subtitle="Recipient receives SMS/WhatsApp in production" action={null}>
          <form className="form" onSubmit={submit}>
            <input className="input" placeholder="From" value={form.from} onChange={e=>setForm({...form, from:e.target.value})} />
            <input className="input" placeholder="To" value={form.to} onChange={e=>setForm({...form, to:e.target.value})} />
            <input className="input" placeholder="Amount (ZMW)" inputMode="numeric" value={form.amount} onChange={e=>setForm({...form, amount:e.target.value})} />
            <input className="input" placeholder="dd / mm / yyyy" value={form.due} onChange={e=>setForm({...form, due:e.target.value})} />
            <div><Button type="submit">Send IOU (demo)</Button></div>
          </form>
        </Card>

        <Card title="Your IOUs">
          <ul className="list">
            {rows.map(r=>(
              <li key={r.id}>
                <strong>{r.from} → {r.to}</strong><br/>
                Due {r.due} · {Number(r.amount).toLocaleString('en-ZM')} ZMW ·{' '}
                <Badge tone={r.status==='confirmed'?'success':r.status==='pending'?'warning':'neutral'}>{r.status}</Badge>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}
