// pages/settings.js
import { DEFAULT_FLAGS, loadFlags, saveFlags } from '../lib/flags';
import { useEffect, useState } from 'react';

export default function Settings() {
  const [flags, setFlags] = useState(DEFAULT_FLAGS);

  useEffect(() => {
    setFlags(loadFlags());
  }, []);

  const toggles = flags?.FEATURE_TOGGLES ?? {};
  const keys = Object.keys(toggles); // now safe

  function updateToggle(key, value) {
    const next = {
      ...flags,
      FEATURE_TOGGLES: { ...toggles, [key]: value },
      // Reflect top-level booleans too (optional, but keeps both in sync)
      IOUS_ENABLED: key === 'iou' ? value : flags.IOUS_ENABLED,
      MISSIONS_ENABLED: key === 'missions' ? value : flags.MISSIONS_ENABLED,
      PASSPORTS_ENABLED: key === 'passports' ? value : flags.PASSPORTS_ENABLED,
      BNPL_ENABLED: key === 'bnpl' ? value : flags.BNPL_ENABLED,
      LOAN_LINK_ENABLED: key === 'loanlink' ? value : flags.LOAN_LINK_ENABLED,
    };
    setFlags(next);
    saveFlags(next);
  }

  return (
    <main>
      <h1>Feature Switches</h1>
      <ul>
        {keys.map(k => (
          <li key={k}>
            <label>
              <input
                type="checkbox"
                checked={!!toggles[k]}
                onChange={(e) => updateToggle(k, e.target.checked)}
              />
              {' '}{k}
            </label>
          </li>
        ))}
      </ul>
    </main>
  );
}
