import Card from '../components/Card';
import Progress from '../components/Progress';
import Badge from '../components/Badge';
import { missions as seed } from '../lib/data';

export default function Missions(){
  const rows = seed || [];
  return (
    <>
      <h1>Missions</h1>
      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:18}}>
        {rows.map(m => (
          <Card key={m.id} title={m.title} subtitle={`Reward: ${m.reward}`}>
            <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:10}}>
              <Badge tone={m.status==='in-progress'?'warning':m.status==='locked'?'neutral':'success'}>
                {m.status}
              </Badge>
              <span style={{color:'#9fb1ff'}}>Progress</span>
            </div>
            <Progress value={m.status==='in-progress'?45: m.status==='available'?0:100}/>
          </Card>
        ))}
      </div>
    </>
  );
}
