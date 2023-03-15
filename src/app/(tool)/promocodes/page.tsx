import Link from "next/link";

const headers = ['Code', 'Discount', 'Status', 'Start', 'End'];

export default function PromocodesPage() {
  return (
    <div className="flex justify-center">
      {/* table elements are quirky so im making a table with other elements */}
      
      {/* Header */}
      <div className="w-[80%] max-h-[80vh] flex flex-col justify-between">
        <section className="flex py-3 bg-slate-400 rounded-t-md">
          {headers.map(h => (
            <div className="w-1/5 text-center" key={h}>{h}</div>
          ))}
        </section>

        {/* Body */}
        <section className="overflow-auto bg-slate-600">
          {['*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*','*',].map((x, i) => (
            <div className="flex justify-between py-2" key={i}>
              <span className="w-1/5 text-center">yo</span>
              <span className="w-1/5 text-center">yo</span>
              <span className="w-1/5 text-center">yo</span>
              <span className="w-1/5 text-center">yo</span>
              <span className="w-1/5 text-center">yo</span>
            </div>
          ))}
        </section>

        {/* Footer */}
        <section>
          <Link
            href={'/promocodes/new'}
            className="block py-3 w-full text-center bg-slate-400 rounded-b-md"
          >
            Add New Promocode
          </Link>
        </section>
      </div>
    </div>
  );
}