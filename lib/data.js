// /lib/data.js
export const ious = [
  { id:'1', from:'Chipo',  to:'Thabo', amount:500,  due:'2025-08-31', status:'pending' },
  { id:'2', from:'Liam',   to:'Amina', amount:1200, due:'2025-09-15', status:'confirmed' },
  { id:'3', from:'Mwayi',  to:'John',  amount:250,  due:'2025-08-18', status:'pending' },
];

export const missions = [
  { id:'m1', title:'Pay 3 IOUs on time', reward:'+25 XP', status:'in-progress' },
  { id:'m2', title:'Invite 5 friends',   reward:'+50 XP', status:'locked' },
  { id:'m3', title:'Complete KYC Passport', reward:'+100 XP', status:'available' },
];

export const passports = [
  { level:'Bronze', requirements:'Verify phone & email', perks:'LoanLink access' },
  { level:'Silver', requirements:'Add income & contacts', perks:'Better rates' },
  { level:'Gold',   requirements:'Bank link + history',   perks:'Instant disbursals' },
];

export const bnplDeals = [
  { id:'d1', merchant:'AutoHut',    item:'Yango Driver Kit', price:5000, term:"3 x 1,850 ZMW", apr:'24%' },
  { id:'d2', merchant:'ZedPhones',  item:'Tecno Camon 30',   price:7999, term:"4 x 2,200 ZMW", apr:'20%' },
  { id:'d3', merchant:'MamaShop',   item:'Mini Freezer',     price:3600, term:"6 x 700 ZMW",   apr:'28%' },
];
