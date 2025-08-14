import Card from '../components/Card';
import Button from '../components/Button';
import { bnplDeals as deals } from '../lib/data';

export default function BNPL(){
  const rows = deals || [];
  return (
    <>
      <h1>BNPL Deals</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:18}}>
        {rows.map(d=>(
          <Card key={d.id} title={d.merchant} subtitle={d.item}>
            <ul className="list">
              <li><strong>Price:</strong> {Number(d.price).toLocaleString('en-ZM')} ZMW</li>
              <li><strong>Term:</strong> {d.term}</li>
              <li><strong>APR:</strong> {d.apr}</li>
            </ul>
            <div style={{marginTop:14}}><Button onClick={()=>alert('Demo: Start BNPL application flow')}>Apply Now</Button></div>
          </Card>
        ))}
      </div>
    </>
  );
}
