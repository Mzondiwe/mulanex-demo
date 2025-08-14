// lib/flags.js

// 1) Global, safe defaults — everything ON for testing
export const DEFAULT_FLAGS = {
  IOUS_ENABLED: true,
  MISSIONS_ENABLED: true,
  PASSPORTS_ENABLED: true,
  BNPL_ENABLED: true,
  LOAN_LINK_ENABLED: true,

  // granular toggles used by Settings page (keys are what the UI shows)
  FEATURE_TOGGLES: {
    iou: true,
    missions: true,
    passports: true,
    bnpl: true,
    loanlink: true,
  },
};

// 2) Load/save helpers used by _app.js & Settings
const STORAGE_KEY = 'mulanex.flags';

export function loadFlags() {
  try {
    if (typeof window === 'undefined') return DEFAULT_FLAGS; // SSR / build
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_FLAGS;
    const parsed = JSON.parse(raw);
    // Merge to ensure any new flags get defaults
    return {
      ...DEFAULT_FLAGS,
      ...parsed,
      FEATURE_TOGGLES: {
        ...DEFAULT_FLAGS.FEATURE_TOGGLES,
        ...(parsed.FEATURE_TOGGLES || {}),
      },
    };
  } catch {
    return DEFAULT_FLAGS;
  }
}

export function saveFlags(nextFlags) {
  try {
    if (typeof window === 'undefined') return; // SSR / build
    // only persist minimal necessary payload
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextFlags));
  } catch {
    // ignore write errors (private mode, etc.)
  }
}

// 3) Demo data used by pages (safe for prerender)
export const missions = [
  { id: 'm1', title: 'Send 3 IOUs this week', reward: '25 pts', active: true },
  { id: 'm2', title: 'Verify your phone & profile', reward: '10 pts', active: true },
  { id: 'm3', title: 'Invite 2 friends', reward: '15 pts', active: false },
];

export const passports = [
  {
    id: 'p1',
    title: 'Starter Passport',
    level: 1,
    requirements: ['Verify phone', 'Complete profile'],
    benefits: ['Access IOUs', 'Basic Missions'],
  },
  {
    id: 'p2',
    title: 'Pro Passport',
    level: 2,
    requirements: ['Link mobile money', 'Complete 1 mission'],
    benefits: ['BNPL offers', 'LoanLink prefill'],
  },
  {
    id: 'p3',
    title: 'Gold Passport',
    level: 3,
    requirements: ['Bank link', '3+ months history'],
    benefits: ['Priority support', 'Instant disbursals'],
  },
];
export const DEFAULT_FLAGS = {
  MISSIONS_ENABLED: true,
  PASSPORTS_ENABLED: true,
  BNPL_ENABLED: true,
  LOAN_LINK_ENABLED: true,
};

export const loadFlags = () => DEFAULT_FLAGS;
export const saveFlags = (flags) => {
  console.log("Flags saved:", flags);
};

