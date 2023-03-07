import Link from "next/link";
import ActiveAuthLinks from "./active-auth-links";

export default function AuthNavbar() {
  return (
    <nav className="flex justify-between items-center sm:space-x-10 px-4 sm:px-10 py-3 text-slate-300">
      <Link href={'/'} className="text-slate-400">ProMocha</Link>
      <ActiveAuthLinks />
    </nav>
  );
}