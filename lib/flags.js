// /lib/flags.js
export const DEFAULT_FLAGS = {
  MISSIONS_ENABLED: true,
  PASSPORTS_ENABLED: true,
  BNPL_ENABLED: true,
  LOAN_LINK_ENABLED: true,
  WALLET_ENABLED: true,
  FEED_ENABLED: true,
  MERCHANTS_ENABLED: true,
  REFERRALS_ENABLED: true,
  NOTIFICATIONS_ENABLED: true,
};

const KEY = 'mulanex-flags';

export function loadFlags() {
  if (typeof window === 'undefined') return DEFAULT_FLAGS; // SSR-safe
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULT_FLAGS;
    const parsed = JSON.parse(raw);
    // merge to tolerate future keys
    return { ...DEFAULT_FLAGS, ...parsed };
  } catch {
    return DEFAULT_FLAGS;
  }
}

export function saveFlags(flags) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(KEY, JSON.stringify(flags));
  } catch {
    /* ignore */
  }
}
