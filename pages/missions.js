import { missions } from '../lib/data';

export default function Missions() {
  const list = Array.isArray(missions) ? missions : [];
  return (
    <main style={{ padding: 24 }}>
      <h1>Missions</h1>
      <ul>
        {list.map(m => (
          <li key={m.id}>
            {m.title} — {m.reward} ({m.status})
          </li>
        ))}
      </ul>
    </main>
  );
}
