// pages/missions.js
import React from 'react';
import { missions as missionsData, FEATURES } from '../lib/flags';

export default function MissionsPage() {
  // ensure we always have an array
  const list = Array.isArray(missionsData) ? missionsData : [];

  return (
    <main style={{ padding: 24 }}>
      <h1>Missions {FEATURES.MISSIONS_ENABLED ? '' : '(disabled)'}</h1>

      {list.length === 0 ? (
        <p>No missions yet.</p>
      ) : (
        <ul>
          {list.map(m => (
            <li key={m.id}>
              <strong>{m.title}</strong> — Reward: {m.reward}{' '}
              {m.active ? '(active)' : '(inactive)'}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
