// components/Progress.js
export default function Progress({ value = 0 }) {
  const v = Math.max(0, Math.min(value, 100));
  return (
    <div className="progress">
      <div className="progress__bar" style={{ width: `${v}%` }} />
    </div>
  );
}
