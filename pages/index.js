import { ious, missions, bnplDeals } from '../lib/data'

export default function Home({ flags }){
  return (
    <div className="grid">
      <section className="card" style={{gridColumn:'span 12'}}>
        <div className="row"><h2 style={{margin:0}}>Welcome to MulaNEX</h2><span className="badge">Premium Demo</span></div>
        <p className="sub">A daily-finance superlayer for emerging markets: IOUs, Missions, Passports, BNPL, and instant LoanLink.</p>
      </section>
      {flags.iou && (<section className="card" style={{gridColumn:'span 6'}}>
        <h3>Recent IOUs</h3><div className="list">
          {ious.slice(0,3).map(r=>(<div key={r.id} className="row"><div>
            <div className="title">{r.from} → {r.to} · <span className="badge">{r.status}</span></div>
            <div className="sub">Due {r.due}</div></div><div className="stat">{r.amount.toLocaleString()} ZMW</div></div>))}
        </div></section>)}
      {flags.missions && (<section className="card" style={{gridColumn:'span 6'}}>
        <h3>Missions</h3><div className="list">
          {missions.slice(0,3).map(m=>(<div key={m.id} className="row"><div>
            <div className="title">{m.title}</div><div className="sub">{m.reward} · {m.status}</div></div><button className="btn ghost">View</button></div>))}
        </div></section>)}
      {flags.bnpl && (<section className="card" style={{gridColumn:'span 12'}}>
        <h3>BNPL Spotlight</h3><div className="grid" style={{gridTemplateColumns:'repeat(3,1fr)'}}>
          {bnplDeals.map(d=>(<div key={d.id} className="card">
            <div className="row"><div className="title">{d.merchant}</div><span className="badge">{d.apr} APR</span></div>
            <div className="sub">{d.item}</div><div className="row">
              <div className="stat">{d.price.toLocaleString()} ZMW</div><button className="btn">Apply</button></div>
            <div className="sub">Plan: {d.term}</div></div>))}
        </div></section>)}
    </div>
  )
}
