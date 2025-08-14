export const DEFAULT_FLAGS={iou:true,missions:true,passports:true,bnpl:true,loanlink:true,analytics:true,phase2_profiles:true,phase2_remit:true,phase2_insurance:true};
export function loadFlags(){if(typeof window==='undefined')return DEFAULT_FLAGS;try{const raw=localStorage.getItem('mulanex_flags');if(!raw)return DEFAULT_FLAGS;return {...DEFAULT_FLAGS,...JSON.parse(raw)};}catch(e){return DEFAULT_FLAGS;}}
export function saveFlags(flags){if(typeof window==='undefined')return;localStorage.setItem('mulanex_flags',JSON.stringify(flags));}
