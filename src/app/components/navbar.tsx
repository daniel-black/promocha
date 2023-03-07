import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex space-x-10 py-3 px-10 bg-slate-400">
      <Link href={"/"}>ProMocha</Link>
      <Link href={"/promocodes"}>Promocodes</Link>
      <Link href={"/dashboard"}>Dashboard</Link>
    </nav>
  );
}