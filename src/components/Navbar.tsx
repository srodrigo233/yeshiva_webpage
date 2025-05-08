'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { name: 'Inicio', href: '/' },
  { name: 'Sobre Yeshiva', href: '/about' },
  { name: 'Oferta Académica', href: '/academic' },
  { name: 'Noticias', href: '/noticias' },
  { name: 'Información', href: '/info' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-950 px-6 py-4 shadow-md relative z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <img
            src="/yeshivaLogoBlanco.svg"
            alt="Logo del Instituto"
            className="h-10 w-auto"
          />
        </Link>

        {/* Botón para abrir/cerrar menú móvil */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menú desktop */}
        <ul className="hidden md:flex gap-6 text-lg font-medium text-white items-center">
          {navItems.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                className={`${
                  pathname === href ? 'text-yellow-300' : 'text-white'
                } hover:text-yellow-200 transition-colors duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menú móvil deslizante desde la derecha */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden shadow-lg z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            ×
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 text-lg font-medium">
          {navItems.map(({ name, href }, i) => (
            <li key={i}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block ${
                  pathname === href ? 'text-yellow-300' : 'text-white'
                } hover:text-yellow-200 transition-colors duration-200`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}