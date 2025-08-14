import { useEffect, useState } from 'react';
import Card from '../components/Card';

const DEFAULT_FLAGS = {
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

const items = Object.keys(DEFAULT_FLAGS);

export default function Settings(){
  const [flags, setFlags] = useState(DEFAULT_FLAGS);

  useEffect(()=>{
    if (typeof window==='undefined') return;
    try{
      const saved = JSON.parse(localStorage.getItem('flags'));
      if (saved && typeof saved==='object') setFlags({ ...DEFAULT_FLAGS, ...saved });
    }catch{}
  },[]);

  useEffect(()=>{
    if (typeof window==='undefined') return;
    localStorage.setItem('flags', JSON.stringify(flags));
  },[flags]);

  const toggle = (k)=> setFlags(prev => ({...prev, [k]: !prev[k]}));

  return (
    <>
      <h1>Settings — Feature Switches</h1>
      <Card>
        <ul className="list" style={{listStyle:'none', paddingLeft:0}}>
          {items.map(k=>(
            <li key={k} style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 0', borderBottom:'1px solid rgba(255,255,255,.06)'}}>
              <span style={{textTransform:'capitalize'}}>{k.replaceAll('_',' ').toLowerCase()}</span>
              <label style={{display:'inline-flex', alignItems:'center', gap:10}}>
                <input type="checkbox" checked={!!flags[k]} onChange={()=>toggle(k)} />
              </label>
            </li>
          ))}
        </ul>
      </Card>
      <p className="footer">These switches are <strong>on by default</strong> and saved in your browser for demo/testing.</p>
    </>
  );
}
