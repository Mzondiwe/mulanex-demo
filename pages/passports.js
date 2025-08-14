// pages/passports.js
import React from 'react';
import { passports as passportsData, FEATURES } from '../lib/flags';

export default function PassportsPage() {
  const list = Array.isArray(passportsData) ? passportsData : [];

  return (
    <main style={{ padding: 24 }}>
      <h1>Passports {FEATURES.PASSPORTS_ENABLED ? '' : '(disabled)'}</h1>

      {list.length === 0 ? (
        <p>No passports yet.</p>
      ) : (
        <ul>
          {list.map(p => (
            <li key={p.id} style={{ marginBottom: 12 }}>
              <strong>{p.title}</strong> — Level {p.level}
              <div>
                <em>Requirements:</em>{' '}
                {Array.isArray(p.requirements) ? p.requirements.join(', ') : '—'}
              </div>
              <div>
                <em>Benefits:</em>{' '}
                {Array.isArray(p.benefits) ? p.benefits.join(', ') : '—'}
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
