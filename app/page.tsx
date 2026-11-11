'use client';
import {useEffect,useState} from 'react';
import {ArrowRight,CalendarDays} from 'lucide-react';
export default function Home(){
const [opened,setOpened]=useState(false);
const [guest,setGuest]=useState('');
useEffect(()=>{setGuest((new URLSearchParams(window.location.search).get('guest')||'').slice(0,60))},[]);
const calendar='https://calendar.google.com/calendar/render?action=TEMPLATE&text=SM%20Naqvi%20Solo%20Show%20at%20Studio%20Seraai&dates=20261125T120000Z/20261125T150000Z&location=Studio%20Seraai%2C%20Karachi&details=5%3A00%20PM%20to%208%3A00%20PM%20Pakistan%20time';
return <main className={'gallery '+(opened?'opened':'')}>
<div className="stone"/>
<div className="portal"><div className="inside"><div className="art left"/><div className="art right"/><div className="invitation"><div className="brand-small">STUDIO SERAAI</div><div className="tagline">A GALLERY WHARE WALLS BREATHES ART</div>{guest&&<div className="guest">An invitation for {guest}</div>}<h1>SM Naqvi</h1><div className="solo">S O L O &nbsp; S H O W</div><div className="rule"/><div className="date">25 NOVEMBER 2026</div><div className="venue">AT STUDIO SERAAI · KARACHI</div><div className="event-time">5:00 PM — 8:00 PM <span>PKT</span></div><div className="buttons"><button onClick={()=>window.alert('RSVP confirmation is not yet connected. Please contact Studio Seraai directly.')}>RSVP <ArrowRight size={16}/></button><a href={calendar} target="_blank" rel="noreferrer"><CalendarDays size={16}/> ADD TO CALENDAR</a></div><small>25 November · 5:00 PM – 8:00 PM</small></div></div>
<div className="door door-left"><div className="door-panel"/><div className="handle"/></div><div className="door door-right"><div className="door-panel"/><div className="handle"/></div>
{!opened&&<button className="entry" onClick={()=>setOpened(true)} aria-label="Open the gallery doors"><span className="entry-brand">STUDIO SERAAI</span><span className="entry-tag">A GALLERY WHARE WALLS BREATHES ART</span><span className="entry-bottom">CLICK TO ENTER <span className="circle">→</span></span></button>}
</div>{opened&&<button className="close-doors" onClick={()=>setOpened(false)}>CLOSE DOORS</button>}</main>
}