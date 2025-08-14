import { bnplDeals } from '../lib/data';

export default function BNPL() {
  const deals = Array.isArray(bnplDeals) ? bnplDeals : [];
  return (
    <main style={{ padding: 24 }}>
      <h1>BNPL Deals</h1>
      <ul>
        {deals.map(d => (
          <li key={d.id}>
            {d.merchant}: {d.item} — {d.term} (APR {d.apr})
          </li>
        ))}
      </ul>
    </main>
  );
}
