import { ious as seed } from '../lib/data';

export default function Home() {
  const list = Array.isArray(seed) ? seed : [];

  return (
    <main style={{ padding: 24 }}>
      <h1>MulaNEX</h1>
      <h2>Recent IOUs</h2>
      <ul>
        {list.map(i => (
          <li key={i.id}>
            {i.from} → {i.to} • {i.amount} • due {i.due} • {i.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
