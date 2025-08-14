// /lib/data.js

// IOUs — sample ledger
export const ious = [
  { id:'1', from:'Chipo', to:'Thabo', amount:500,  due:'2025-08-31', status:'pending' },
  { id:'2', from:'Liam',  to:'Amina', amount:1200, due:'2025-09-15', status:'confirmed' },
  { id:'3', from:'Mwayi', to:'John',  amount:250,  due:'2025-08-18', status:'pending' },
];

// Missions — growth loops
export const missions = [
  { id:'m1', title:'Pay 3 IOUs on time', reward:'+25 XP', status:'in-progress' },
  { id:'m2', title:'Invite 5 friends',     reward:'+50 XP', status:'locked' },
  { id:'m3', title:'Complete KYC Passport',reward:'+100 XP',status:'available' },
];

// Passports — eligibility tiers
export const passports = [
  { level:'Bronze', requirements:'Verify phone & email',  perks:'LoanLink access' },
  { level:'Silver', requirements:'Add income & contacts', perks:'Better rates' },
  { level:'Gold',   requirements:'Bank link + history',   perks:'Instant disbursals' },
];

// BNPL marketplace — deals
export const bnplDeals = [
  { id:'d1', merchant:'AutoHut',   item:'Yango Driver Kit', price:5000,  term:'3 × 1,850 ZMW', apr:'24%' },
  { id:'d2', merchant:'ZedPhones', item:'Tecno Camon 30',   price:7999,  term:'4 × 2,200 ZMW', apr:'20%' },
  { id:'d3', merchant:'MamaShop',  item:'Mini Freezer',     price:3600,  term:'6 × 700 ZMW',   apr:'28%' },
];

// Loan products (stub for LoanLink)
export const loanProducts = [
  { id:'lp1', name:'Working Capital', max:'30,000 ZMW', tenor:'3–12 mo', rate:'from 3.0%/mo' },
  { id:'lp2', name:'Bridge Loan',     max:'50,000 ZMW', tenor:'1–6 mo',  rate:'from 2.5%/mo' },
];

// Wallet — rewards/XP
export const wallet = {
  balance: 240, // points
  transactions: [
    { id:'w1', type:'Mission reward',  amount:+25,  ts:'2025-08-10' },
    { id:'w2', type:'Referral bonus',  amount:+50,  ts:'2025-08-08' },
    { id:'w3', type:'IOU on-time',     amount:+10,  ts:'2025-08-05' },
  ],
};

// Social Feed — lightweight, safe demo content
export const feed = [
  { id:'f1', author:'MulaNEX', text:'Welcome to the new BNPL marketplace — early access live!', ts:'1h' },
  { id:'f2', author:'LendingScape', text:'Tip: Complete Gold Passport to unlock instant disbursals.', ts:'1d' },
];

// Merchants — BNPL onboarding showcase
export const merchants = [
  { id:'mch1', name:'AutoHut',    category:'Mobility',  activeDeals:1 },
  { id:'mch2', name:'ZedPhones',  category:'Electronics',activeDeals:1 },
  { id:'mch3', name:'MamaShop',   category:'Appliances', activeDeals:1 },
];
