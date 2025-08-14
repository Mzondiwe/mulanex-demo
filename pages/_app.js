import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { loadFlags, saveFlags, DEFAULT_FLAGS } from '../lib/flags'

function Nav({ active }){
  const tabs=[['Home','/'],['IOUs','/ious'],['Missions','/missions'],['Passports','/passports'],['BNPL','/bnpl'],['LoanLink','/loanlink'],['Settings','/settings']]
  return (<div className="nav"><div className="nav-inner container">
    <div className="brand"><Image src="/logo.svg" alt="logo" width={28} height={28}/><span>MulaNEX</span></div>
    <div className="tabs">{tabs.map(([label,href])=>(<Link key={href} href={href} className={"tab"+(active===href?' active':'')}>{label}</Link>))}</div>
    <div className="grow"/><span className="kbd">Demo · Feature switches in Settings</span>
  </div></div>)
}

export default function App({ Component, pageProps, router }){
  const [flags,setFlags]=useState(DEFAULT_FLAGS)
  useEffect(()=>{setFlags(loadFlags())},[])
  useEffect(()=>{saveFlags(flags)},[flags])
  return (<>
    <Nav active={router.pathname}/>
    <div className="container" style={{paddingTop:24}}><Component {...pageProps} flags={flags} setFlags={setFlags}/></div>
    <div className="footer">© {new Date().getFullYear()} MulaNEX · Demo UI</div>
  </>)
}
