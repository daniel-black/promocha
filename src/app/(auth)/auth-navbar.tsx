import Link from "next/link";

export default function AuthNavbar() {
  return (
    <nav className="flex justify-between items-center sm:space-x-10 px-4 sm:px-10 py-3 text-slate-300">
      <Link href={'/'} className="text-slate-400">ProMocha</Link>
      <div className="space-x-4 sm:space-x-10">
        <Link href={'/sign-in'}>Sign&nbsp;in</Link>
        <Link href={'/sign-up'}>Sign&nbsp;up</Link>
      </div>
    </nav>
  );
}