import { useState } from 'react'
import { ious as seed } from '../lib/data'
export default function IOUs(){
  const [rows,setRows]=useState(seed)
  const [form,setForm]=useState({from:'',to:'',amount:'',due:''})
  const add=()=>{ if(!form.from||!form.to||!form.amount||!form.due) return;
    setRows([{id:crypto.randomUUID(),...form,amount:Number(form.amount),status:'pending'},...rows])
    setForm({from:'',to:'',amount:'',due:''}) }
  return (<div className="grid">
    <section className="card" style={{gridColumn:'span 5'}}>
      <h3>Create IOU</h3><div className="list">
        <input placeholder="From" value={form.from} onChange={e=>setForm({...form,from:e.target.value})}/>
        <input placeholder="To" value={form.to} onChange={e=>setForm({...form,to:e.target.value})}/>
        <input placeholder="Amount (ZMW)" value={form.amount} onChange={e=>setForm({...form,amount:e.target.value})}/>
        <input type="date" value={form.due} onChange={e=>setForm({...form,due:e.target.value})}/>
        <button className="btn" onClick={add}>Send IOU (demo)</button>
        <p className="sub">Recipient receives SMS/WhatsApp in production.</p></div>
    </section>
    <section className="card" style={{gridColumn:'span 7'}}>
      <h3>Your IOUs</h3><div className="list"> {rows.map(r=>(
        <div key={r.id} className="row"><div>
          <div className="title">{r.from} → {r.to} <span className="badge">{r.status}</span></div>
          <div className="sub">Due {r.due}</div></div>
          <div className="stat">{r.amount.toLocaleString()} ZMW</div></div>))}
      </div></section></div>)}
