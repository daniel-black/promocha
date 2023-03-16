'use client';

import { FormEvent, useState } from "react";

const MILLISECONDS_IN_A_MONTH = 1000 * 60 * 60 * 24 * 30;

const promocodeTypes = ["amount", "percent"] as const;
type PromocodeType = typeof promocodeTypes[number];

function dateToSimpleString(date: Date) {
  return date.toISOString().slice(0, 10);
}

function getDateXMonthsOut(x: number) {
  const today = new Date().getTime();
  return new Date(today + (x * MILLISECONDS_IN_A_MONTH));
}

export default function NewPromocodeForm() {
  const [code, setCode] = useState<string>('');
  const [type, setType] = useState<PromocodeType>('amount');
  const [amountDiscount, setAmountDiscount] = useState<number>(5);
  const [percentDiscount, setPercentDiscount] = useState<number>(5);
  const [maxDiscount, setMaxDiscount] = useState<number>(Infinity);
  const [start, setStart] = useState<string>(dateToSimpleString(new Date()));
  const [end, setEnd] = useState<string>(dateToSimpleString(getDateXMonthsOut(3)));

  const [showMaxDiscount, setShowMaxDiscount] = useState<boolean>(false);

  const isAmount = type === 'amount';

  function handleMaxDiscountChange(e: React.MouseEvent<HTMLButtonElement>, val: number) {
    e.preventDefault();
    setMaxDiscount(val);
    setShowMaxDiscount(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const obj = {
      code,
      type,
      start,
      end,
      value: isAmount ? amountDiscount : percentDiscount,
      maxValue: isAmount
        ? null
        : (maxDiscount === Infinity ? null : maxDiscount),
    }

    console.log(obj)
  }

  return (
    <section className="px-6 sm:px-14 py-10 mt-20 space-y-8 bg-slate-600 shadow-lg rounded-xl mx-2 w-full max-w-2xl border border-slate-500">
      <form onSubmit={handleSubmit} className="space-y-6 text-slate-900">
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
              className={`${isAmount ? 'bg-green-700 text-green-100' : 'bg-green-50 text-green-500 brightness-[80%] hover:brightness-100'} disabled:cursor-auto  block relative w-full rounded cursor-pointer shadow border border-green-600 transition-all duration-100`}
              disabled={isAmount}
            >
              <span className="absolute bottom-0.5 left-2 text-sm italic">Amount</span>
              <span className={`${isAmount ? 'opacity-100' : 'opacity-0'} shadow-sm text-xs h-5 w-5 rounded-full bg-green-50 text-green-900 flex justify-center items-center absolute top-1 left-1 transition-all duration-100`}>✓</span>
              <p className="text-6xl py-3 font-bold text-center">$</p>
            </button>

            <button
              onClick={e => {
                e.preventDefault();
                setType('percent');
              }}
              className={`${!isAmount ? 'bg-indigo-600 text-indigo-100' : 'bg-indigo-50 text-indigo-500 brightness-[80%] hover:brightness-100'} disabled:cursor-auto block relative w-full rounded cursor-pointer shadow border border-indigo-500 transition-all duration-100`}
              disabled={!isAmount}
            >
              <span className="absolute bottom-0.5 left-2 text-sm italic">Percent</span>
              <span className={`${!isAmount ? 'opacity-100' : 'opacity-0'} shadow-sm text-xs h-5 w-5 rounded-full bg-indigo-50 text-indigo-900 flex justify-center items-center absolute top-1 left-1 transition-all duration-100`}>✓</span>
              <p className=" text-6xl py-3 font-bold text-center">%</p>
            </button>            
          </div>
        </div>

        <div className="w-full space-y-1">
          <label className="block text-sm text-slate-300">Discount</label>
          {isAmount ? (
            <div className="relative w-full">
              <div className="absolute h-full w-5 flex items-center justify-end">$</div>
              <input
                value={amountDiscount}
                onChange={e => setAmountDiscount(e.target.valueAsNumber)}
                type="number"
                min={0}
                className="w-full p-3 pl-6 rounded outline-none bg-slate-200 shadow-sm hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
              />
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <span className="block w-12 font-mono px-2 py-1 rounded-lg text-center bg-slate-500 text-slate-900">{percentDiscount}%</span>
              <input
                value={percentDiscount}
                onChange={e => setPercentDiscount(e.target.valueAsNumber)}
                type="range"
                min={1}
                max={99}
                step={1}
                className="transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-slate-400 accent-slate-800"
              />
            </div>
          )}
        </div>

        {!isAmount && 
          <div className="w-full space-y-1">
            <label className="block text-sm text-slate-300">Maximum Discount</label>
            <div className="flex items-center justify-start flex-wrap gap-2">
              <button
                onClick={e => handleMaxDiscountChange(e, Infinity)}
                className={`${maxDiscount === Infinity && !showMaxDiscount ? 'bg-slate-800 text-slate-400' : 'bg-slate-500 text-slate-900'} px-3 py-1 rounded-lg text-center`}
              >
                No&nbsp;Max
              </button>
              <button
                onClick={e => handleMaxDiscountChange(e, 25)}
                className={`${maxDiscount === 25 && !showMaxDiscount ? 'bg-slate-800 text-slate-400' : 'bg-slate-500 text-slate-900'} px-3 py-1 rounded-lg text-center`}
              >
                $25
              </button>
              <button
                onClick={e => handleMaxDiscountChange(e, 50)}
                className={`${maxDiscount === 50 && !showMaxDiscount ? 'bg-slate-800 text-slate-400' : 'bg-slate-500 text-slate-900'} px-3 py-1 rounded-lg text-center`}
              >
                $50
              </button>
              <button
                onClick={e => handleMaxDiscountChange(e, 100)}
                className={`${maxDiscount === 100 && !showMaxDiscount ? 'bg-slate-800 text-slate-400' : 'bg-slate-500 text-slate-900'} px-3 py-1 rounded-lg text-center`}
              >
                $100
              </button>
              <button
                onClick={e => {
                  e.preventDefault();
                  setShowMaxDiscount(true);
                }}
                className={`${showMaxDiscount ? 'bg-slate-800 text-slate-400' : 'bg-slate-500 text-slate-900'} px-3 py-1 rounded-lg text-center`}              
              >
                Custom
              </button>
              {showMaxDiscount &&
                <div className="relative w-full">
                  <div className="absolute h-full w-5 flex items-center justify-end">$</div>
                  <input
                    value={maxDiscount}
                    onChange={e => setMaxDiscount(e.target.valueAsNumber)}
                    type="number"
                    min={0}
                    className="w-full p-3 pl-6 rounded outline-none bg-slate-200 shadow-sm hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
                  />
                </div>
              }
            </div>
          </div>
        }

        <div className="flex gap-2">
          {/* START */}
          <div className="w-full space-y-1">
            <label className="block text-sm text-slate-300">Start Date</label>
            <input
              type="date"
              value={start}
              onChange={e => setStart(e.target.value)}
              className="w-full p-3 rounded outline-none bg-slate-200 shadow-sm hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            />
          </div>
          {/* END */}
          <div className="w-full space-y-1">
            <label className="block text-sm text-slate-300">End Date</label>
            <input
              type="date"
              value={end}
              onChange={e => setEnd(e.target.value)}
              min={start}
              className="w-full p-3 rounded outline-none bg-slate-200 shadow-sm hover:bg-slate-100 focus:bg-slate-50 focus:ring focus:ring-slate-400 focus:ring-inset focus:ring-offset-1 text-slate-900 text-lg transition-all duration-75"
            />
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
