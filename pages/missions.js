// pages/missions.js
import React from 'react';
import * as Flags from '../lib/flags'; // use namespace import to avoid named-export mistakes

export default function MissionsPage() {
  const list = Array.isArray(Flags.missions) ? Flags.missions : [];

  return (
    <main style={{ padding: 24 }}>
      <h1>
        Missions {Flags.FEATURES?.MISSIONS_ENABLED ? '' : '(disabled)'}
      </h1>

      {list.length === 0 ? (
        <p>No missions yet.</p>
      ) : (
        <ul>
          {list.map(m => (
            <li key={m.id} style={{ marginBottom: 8 }}>
              <strong>{m.title}</strong> — Reward: {m.reward}{' '}
              {m.active ? '(active)' : '(inactive)'}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
