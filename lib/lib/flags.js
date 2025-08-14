// lib/flags.js

// Global feature switches (ON by default for your testing)
export const FEATURES = {
  IOUS_ENABLED: true,
  MISSIONS_ENABLED: true,
  PASSPORTS_ENABLED: true,
  BNPL_ENABLED: true,
  LOAN_LINK_ENABLED: true,
};

// Demo data so Next.js can prerender pages without crashing.
// You can edit these later or replace with API calls.
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
    benefits: ['Loan Link eligibility', 'Higher BNPL limit'],
  },
];
