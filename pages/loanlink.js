import Card from '../components/Card';
import { loanProducts } from '../lib/data';

export default function LoanLink(){
  return (
    <main className="container grid cols-3">
      <Card title="LoanLink" subtitle="Apply in minutes">
        <ul className="list">
          {loanProducts.map(p => (
            <li key={p.id}><b>{p.name}</b> — up to {p.max}, {p.tenor}, {p.rate}</li>
          ))}
        </ul>
        <button className="button" style={{marginTop:12}}>Start Application (demo)</button>
      </Card>
    </main>
  );
}
