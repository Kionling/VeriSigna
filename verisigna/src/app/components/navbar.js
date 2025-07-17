'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path) =>
    `transition hover:opacity-80 ${
      pathname === path ? 'font-semibold underline underline-offset-4' : 'text-gray-700'
    }`;

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 text-lg">
      <Link href="/" className="text-lg font-bold tracking-tight">
        VeriSigna
      </Link>

      <div className="flex gap-6">
        <Link href="/" className={linkStyle('/')}>
          Home
        </Link>
        <Link href="/admin" className={linkStyle('/admin')}>
          Admin
        </Link>
        <Link href="/sign" className={linkStyle('/sign')}>
          Sign
        </Link> 
      </div>
    </nav>
  );
}
