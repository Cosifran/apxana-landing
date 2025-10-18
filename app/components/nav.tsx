'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Contacto', href: '/#contacto' },
  ];

  return (
   <nav className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#402f5e]/90 to-[#a08ebd]/90 backdrop-blur-md shadow-md z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

      <div className="flex items-center gap-3 group cursor-pointer transition-all">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 group-hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/logos/ApxanaTech.svg"
            alt="ApxanaTech"
            fill
            className="object-contain p-0.3 rounded-full "
          />
        </div>
        <span className="text-xl font-semibold text-[#271447] tracking-wide">
          APXANA TECH
        </span>
      </div>

      <div className="hidden md:flex space-x-8">
        {navLinks.map((link) =>  (
          <Link key={link.name} href={link.href} className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                pathname === link.href ? 'bg-[#6A4FFF] text-white shadow-lg' : 'hover:text-[#6A4FFF]'}`}>
                  {link.name}
          </Link>
        ))}
      </div>

      <button className="md:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#1C1D26] flex flex-col items-center space-y-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white hover:text-[#6A4FFF] transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

    </div>
   </nav>
  );
}