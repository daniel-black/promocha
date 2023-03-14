import Navbar from "../components/navbar";
import { LayoutProps } from "../layout";

export default function AppLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-700 min-h-screen text-slate-50">
      <Navbar />
      {children}
    </div>
  );
}