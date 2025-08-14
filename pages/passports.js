import Card from '../components/Card';
import Button from '../components/Button';
import { passports as levels } from '../lib/data';

export default function Passports(){
  const tiers = levels || [];
  return (
    <>
      <h1>Passports</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:18}}>
        {tiers.map((t,i)=>(
          <Card key={i} title={`${t.level}: ${t.level}`} subtitle={null}>
            <ul className="list">
              <li><strong>Requirements:</strong> {t.requirements}</li>
              <li><strong>Perks:</strong> {t.perks}</li>
            </ul>
            <div style={{marginTop:14}}><Button variant="primary">Upgrade</Button></div>
          </Card>
        ))}
      </div>
    </>
  );
}
