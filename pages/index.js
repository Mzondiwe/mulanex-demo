// pages/index.js
import { DEFAULT_FLAGS, loadFlags } from '../lib/flags';

export default function Home() {
  const flags = loadFlags(); // during SSR this returns DEFAULT_FLAGS

  // Use optional chaining + nullish coalescing to avoid crashes
  const toggles = flags?.FEATURE_TOGGLES ?? DEFAULT_FLAGS.FEATURE_TOGGLES;

  const showIOU       = toggles.iou ?? true;
  const showMissions  = toggles.missions ?? true;
  const showPassports = toggles.passports ?? true;
  const showBNPL      = toggles.bnpl ?? true;
  const showLoanLink  = toggles.loanlink ?? true;

  return (
    <main>
      <h1>MulaNEX</h1>

      {showIOU && <section>{/* IOU CTA / list */}</section>}
      {showMissions && <section>{/* Missions CTA / list */}</section>}
      {showPassports && <section>{/* Passports CTA / list */}</section>}
      {showBNPL && <section>{/* BNPL CTA / list */}</section>}
      {showLoanLink && <section>{/* LoanLink CTA */}</section>}
    </main>
  );
}
