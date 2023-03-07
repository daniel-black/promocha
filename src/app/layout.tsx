import './globals.css';

export const metadata = {
  title: 'ProMocha',
  description: 'Manage your promocodes',
};

export type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className='bg-slate-300 text-slate-800'>
        {children}
      </body>
    </html>
  );
}
