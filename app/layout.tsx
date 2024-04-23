import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '~/components/navbar';
import Footer from '~/components/footer';
import { cn } from '~/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hacks For Humanity',
  description: 'Hacks For Humanity is a hackathon for social good.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex h-screen flex-col items-center justify-between',
          inter.className,
        )}
      >
        <Navbar />
        <main className="max-auto bg-neutral w-full max-w-screen-2xl px-8 py-0 md:px-12 ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
