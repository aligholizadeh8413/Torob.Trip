'use client';
import Link from 'next/link';
import { Menu, X } from '@/lib/icons';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [['خانه', '/'], ['پروازها', '/search?type=flight-domestic'], ['قطار', '/search?type=train'], ['اتوبوس', '/search?type=bus'], ['تور', '/search?type=tour'], ['کشف مقصد', '/explore']];
  return <header className="absolute inset-x-0 top-0 z-30 pt-5"><div className="container"><div className="relative flex items-center justify-between rounded-[26px] border border-white/70 bg-white/65 px-5 py-3 shadow-[0_16px_40px_rgba(58,84,131,.08)] backdrop-blur-xl"><Link href="/" className="order-1 flex items-center gap-2 text-xl font-black tracking-tight"><span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1f56b5] text-white shadow-lg shadow-blue-200">ت</span><span>ترب <span className="text-[#1f56b5]">تریپ</span></span></Link><nav className={`${open ? 'flex' : 'hidden'} absolute inset-x-3 top-[65px] flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl md:static md:order-2 md:flex md:flex-row md:items-center md:justify-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>{items.map(([label, href]) => <Link onClick={() => setOpen(false)} key={label} href={href} className="rounded-lg px-2 py-2 text-sm text-slate-600 transition hover:bg-blue-50 hover:text-[#1f56b5]">{label}</Link>)}</nav><div className="order-3 flex items-center gap-2"><button className="hidden rounded-full border border-slate-300 px-5 py-2 text-sm transition hover:border-[#1f56b5] hover:text-[#1f56b5] md:block">ورود</button><button aria-label="منو" onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 md:hidden">{open ? <X size={19} /> : <Menu size={19} />}</button></div></div></div></header>;
}
