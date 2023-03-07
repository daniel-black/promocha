'use client';

import Link from "next/link";
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ActiveAuthLinks() {
  const s = useSelectedLayoutSegment();
  const isSignIn = s === 'sign-in';

  return (
    <div className="space-x-4 sm:space-x-10">
      <Link
        href={'/sign-in'}
        className={`${isSignIn ? 'bg-slate-600 border-slate-500 shadow': 'text-slate-400 border-slate-700 hover:border-slate-500'} rounded py-1 px-2 border transition-all duration-100 ease-in-out`}
      >
        Sign&nbsp;in
      </Link>
      <Link
        href={'/sign-up'}
        className={`${isSignIn ? 'text-slate-400 border-slate-700 hover:border-slate-500' : 'bg-slate-600 shadow border-slate-500'} rounded border py-1 px-2 transition-all duration-100 ease-in-out`}
      >
        Sign&nbsp;up
      </Link>
    </div>
  )
}