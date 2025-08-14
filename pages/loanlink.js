import Card from '../components/Card';
import Button from '../components/Button';

export default function LoanLink(){
  return (
    <>
      <h1>LoanLink</h1>
      <Card title="Working Capital" subtitle="Based on your Passport level & behavior score">
        <ul className="list">
          <li><strong>Offer:</strong> up to 20,000 ZMW</li>
          <li><strong>Disbursal:</strong> instant after approval</li>
        </ul>

        <div style={{display:'grid', gap:12, marginTop:12}}>
          <input className="input" placeholder="Requested amount (ZMW)" />
          <div>
            <label style={{display:'block', marginBottom:6, color:'#cdd6ff'}}>Documents</label>
            <div className="input" style={{textAlign:'center', padding:'20px 14px', borderStyle:'dashed'}}>
              Upload (placeholder)
            </div>
          </div>
          <Button onClick={()=>alert('Demo: would POST to LendingScape backend with token auth')}>Apply (demo)</Button>
        </div>
      </Card>
    </>
  );
}
