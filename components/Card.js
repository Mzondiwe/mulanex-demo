// /components/Card.js
export default function Card({ title, subtitle, children, right }) {
  return (
    <div className="card">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:12}}>
        <div>
          {title && <h2>{title}</h2>}
          {subtitle && <div className="muted" style={{marginTop:2}}>{subtitle}</div>}
        </div>
        {right || null}
      </div>
      <div style={{marginTop:14}}>{children}</div>
    </div>
  );
}
