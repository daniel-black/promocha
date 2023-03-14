import Link from "next/link";

const headers = ['Code', 'Discount', 'Status', 'Start', 'End'];

export default function PromocodesPage() {
  return (
    <div className="flex justify-center">
      {/* table elements are quirky so im making a table with other elements */}
      
      {/* Header */}
      <div className="w-[80%] max-h-[80vh] bg-slate-600 flex flex-col justify-between">
        <section className="flex divide-x py-2 bg-slate-400">
          {headers.map(h => (
            <div className="w-1/5 text-center" key={h}>{h}</div>
          ))}
        </section>
        <section className="overflow-auto">
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
          <p>hi</p>
        </section>

        {/* Footer */}
        <section>
          <Link
            href={'/promocodes'}
            className="block py-2 w-full text-center bg-slate-400"
          >
            Add New Promocode
          </Link>
        </section>
      </div>
    </div>
  );
}