import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 space-y-14">
      <div className="px-4 sm:px-10 py-3 text-slate-400 text-lg">
        <Link href={'/'}>ProMocha</Link>
      </div>

      <div className="space-y-10">
        <h1 className="text-5xl sm:text-7xl text-center text-slate-200 px-4 sm:px-16">Run promotions <br /> like a <i className="font-bold">pro</i>.</h1>
        <h2 className="text-xl sm:text-3xl text-center text-slate-300 px-4 sm:px-16">Manage promocodes and analytics <br /> all in one place.</h2>

        <div className="flex justify-center space-x-3 text-xl">
          <Link href={'/sign-in'} className="px-4 py-2 rounded-lg border border-slate-50 bg-slate-300 hover:scale-105 transition-all duration-75 ease-in-out">Sign in</Link>
          <Link href={'/sign-up'} className="px-4 py-2 rounded-lg border border-sky-500 bg-sky-600 hover:scale-105 transition-all duration-75 ease-in-out">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
