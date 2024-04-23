'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Menu } from 'lucide-react';
import { cn } from '~/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-screen-2xl flex-row items-center justify-between px-8 py-6 md:px-12">
        <Link href="/">
          <Image
            src={'/logo.png'}
            alt="Hacks For Humanity logo"
            width={100}
            height={100}
            style={{ height: 'auto', width: 'auto' }}
            priority
          />
        </Link>
        <button onClick={() => handleClick} className="block md:hidden">
          <Menu size={32} />
        </button>

        <ul
          className={cn(
            'flex-col space-x-4 md:flex-row',
            !isOpen && 'hidden md:flex',
          )}
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/faq">FAQ</Link>
          </li>
          <li>
            <Link href="/sponsors">Sponsors</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
