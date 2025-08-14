import { passports } from '../lib/flags'
export default function Passports(){return (<div className='grid'>{passports.map(p=>(<div key={p.level} className='card' style={{gridColumn:'span 4'}}><h3>{p.level} Passport</h3><p className='sub'>Requirements: {p.requirements}</p><p className='sub'>Perks: {p.perks}</p><button className='btn'>Start</button></div>))}</div>)}
