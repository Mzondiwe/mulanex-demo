import Card from '../components/Card';
import { feed } from '../lib/data';

export default function Feed(){
  return (
    <main className="container grid">
      <Card title="MulaFeed" subtitle="Announcements & tips">
        <ul className="list">
          {feed.map(p => <li key={p.id}><b>{p.author}</b>: {p.text} · <span className="muted">{p.ts}</span></li>)}
        </ul>
      </Card>
    </main>
  );
}
