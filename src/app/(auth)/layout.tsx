import { LayoutProps } from "../layout";
import AuthNavbar from "./auth-navbar";

export default function AuthLayout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-700 h-screen text-slate-50">
      <AuthNavbar />
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  );
}