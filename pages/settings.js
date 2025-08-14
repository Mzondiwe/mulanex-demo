import { useEffect, useState } from 'react';
import { DEFAULT_FLAGS, loadFlags, saveFlags } from '../lib/flags';

export default function Settings() {
  const [flags, setFlags] = useState(DEFAULT_FLAGS);

  // Hydrate from localStorage on the client
  useEffect(() => {
    setFlags(loadFlags());
  }, []);

  const toggle = (key) => {
    setFlags(prev => {
      const next = { ...prev, [key]: !prev[key] };
      // Persist only on the client
      if (typeof window !== 'undefined') saveFlags(next);
      return next;
    });
  };

  const items = Object.keys(DEFAULT_FLAGS);

  return (
    <main style={{ padding: 24 }}>
      <h1>Settings — Feature Switches</h1>
      <p>These switches are <em>on by default</em> and saved to your browser for demo/testing.</p>
      <ul>
        {items.map(k => (
          <li key={k} style={{ margin: '8px 0' }}>
            <label>
              <input
                type="checkbox"
                checked={!!flags[k]}
                onChange={() => toggle(k)}
              />{' '}
              {k.replace(/_/g, ' ')}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
