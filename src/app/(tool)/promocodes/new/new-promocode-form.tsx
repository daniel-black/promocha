'use client';

import { useState } from "react";

const promocodeTypes = ["amount", "percent"] as const;
type PromocodeType = typeof promocodeTypes[number];

export default function NewPromocodeForm() {
  const [code, setCode] = useState<string>('');
  const [type, setType] = useState<PromocodeType>('amount');
  const [discount, setDiscount] = useState<number>(5);
  const [maxDiscount, setMaxDiscount] = useState<number | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [end, setEnd] = useState<string | null>(null);

  console.log(type)

  return (
    <section className="px-6 sm:px-14 py-10 mt-20 space-y-8 bg-slate-600 shadow-lg rounded-xl mx-2 w-full max-w-2xl border border-slate-500">
      <form className="space-y-6 text-slate-900">
        <div className="space-y-1">
          <label className="block text-sm text-slate-300">Code</label>
          <input
            value={code}
            onChange={e => setCode(e.target.value.toUpperCase())}
            type="text"
            className="w-full rounded p-3 outline-none bg-slate-200 shadow-sm hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            required
          />
        </div>
        
        <div className="space-y-1">
          <label className="block text-sm text-slate-300">Type</label>
          <div className="flex space-x-2">
            <button
              onClick={e => {
                e.preventDefault();
                setType('amount');
              }}
              className={`${type === 'amount' ? 'bg-green-700 text-green-100' : 'bg-green-50 text-green-500 brightness-[80%] hover:brightness-100'} disabled:cursor-auto  block relative w-full rounded cursor-pointer shadow border border-green-600 transition-all duration-100`}
              disabled={type === 'amount'}
            >
              <span className="absolute bottom-0.5 left-2 text-sm italic">Amount</span>
              <span className={`${type === 'amount' ? 'opacity-100' : 'opacity-0'} shadow-sm text-xs h-5 w-5 rounded-full bg-green-50 text-green-900 flex justify-center items-center absolute top-1 left-1 transition-all duration-100`}>✓</span>
              <p className="text-6xl py-3 font-bold text-center">$</p>
            </button>

            <button
              onClick={e => {
                e.preventDefault();
                setType('percent');
              }}
              className={`${type === 'percent' ? 'bg-indigo-600 text-indigo-100' : 'bg-indigo-50 text-indigo-500 brightness-[80%] hover:brightness-100'} disabled:cursor-auto block relative w-full rounded cursor-pointer shadow border border-indigo-500 transition-all duration-100`}
              disabled={type === 'percent'}
            >
              <span className="absolute bottom-0.5 left-2 text-sm italic">Percent</span>
              <span className={`${type === 'percent' ? 'opacity-100' : 'opacity-0'} shadow-sm text-xs h-5 w-5 rounded-full bg-indigo-50 text-indigo-900 flex justify-center items-center absolute top-1 left-1 transition-all duration-100`}>✓</span>
              <p className=" text-6xl py-3 font-bold text-center">%</p>
            </button>

            
          </div>
        </div>

        {/* <div>
          <label>Discount</label>
          <input type="number" />
        </div>
        <div>
          <label>Maximum Discount</label>
          <input type="number" />
        </div> */}

        <div className="space-y-1">
          <label className="block text-sm text-slate-300">Date Range</label>
          <div className="flex space-x-2">
            <div className="w-full px-3 py-2 bg-slate-500 rounded flex justify-between items-center">
              <p className="text-slate-800 italic">Start</p>   
              <input
                type="date"
                className="px-2 py-1 rounded bg-inherit border border-slate-700"
              />
            </div>
            <div className="w-full px-3 py-2 bg-slate-500 rounded flex justify-between items-center">
              <p className="text-slate-800 italic">End</p>   
              <input
                type="date"
                className="px-2 py-1 rounded bg-inherit border border-slate-700"
              />
            </div>
          </div>
        </div>

       
        <div className="pt-6">
          <input
            type="submit"
            value={'CREATE'}
            className="w-full text-lg bg-slate-800 text-slate-300 tracking-wider py-3 rounded cursor-pointer shadow hover:shadow-lg hover:bg-slate-900 hover:scale-105 duration-100 transition-all"
          />
        </div>
      </form>
    </section>
  );
}
