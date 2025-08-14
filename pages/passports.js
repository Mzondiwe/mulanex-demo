import { passports } from '../lib/data';

export default function Passports() {
  const list = Array.isArray(passports) ? passports : [];
  return (
    <main style={{ padding: 24 }}>
      <h1>Passports</h1>
      <ul>
        {list.map(p => (
          <li key={p.level}>
            <strong>{p.level}</strong>: {p.requirements} — {p.perks}
          </li>
        ))}
      </ul>
    </main>
  );
}
