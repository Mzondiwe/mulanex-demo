// /lib/flags.js
export const DEFAULT_FLAGS = {
  MISSIONS_ENABLED: true,
  PASSPORTS_ENABLED: true,
  BNPL_ENABLED: true,
  LOAN_LINK_ENABLED: true,
};

// Safely read flags (works on SSR too)
export const loadFlags = () => {
  // On the server, just use defaults
  if (typeof window === 'undefined') return DEFAULT_FLAGS;
  try {
    const raw = window.localStorage.getItem('mulanex:flags');
    return raw ? { ...DEFAULT_FLAGS, ...JSON.parse(raw) } : DEFAULT_FLAGS;
  } catch {
    return DEFAULT_FLAGS;
  }
};

// Persist on the client
export const saveFlags = (nextFlags) => {
  try {
    window.localStorage.setItem('mulanex:flags', JSON.stringify(nextFlags));
  } catch {
    /* ignore */
  }
};
