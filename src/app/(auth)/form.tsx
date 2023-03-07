'use client';

type FormType = 'in' | 'up';

type FormProps = {
  type: FormType;
};

export default function Form({ type }: FormProps) {
  return (
    <section className="px-6 sm:px-14 py-10 mt-20 space-y-8 bg-slate-600 shadow-lg rounded-xl mx-2 w-full max-w-lg border border-slate-500">
      <h1 className="text-2xl text-slate-200">Sign {type}</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm text-slate-300 mb-1">Email</label>
          <input
            type="email"
            placeholder="tim@apple.com"
            className="w-full rounded p-3 outline-none bg-slate-200 hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-slate-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full rounded p-3 outline-none bg-slate-200 hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            required
          />
        </div>
        <div className="pt-6">
          <input
            type="submit"
            value={'SUBMIT'}
            className="w-full text-lg bg-slate-800 text-slate-300 tracking-wider py-3 rounded cursor-pointer hover:bg-slate-900 hover:scale-105 duration-100 transition-all"
          />
        </div>
      </form>
    </section>
  );
}