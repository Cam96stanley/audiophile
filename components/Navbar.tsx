"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-almost-black text-white px-4 py-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="text-xl font-extrabold tracking-wider">audiophile</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <li>
            <Link href={"/"} className="hover:text-burnt-orange">
              Home
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-burnt-orange">
              Headphones
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-burnt-orange">
              Speakers
            </Link>
          </li>
          <li>
            <Link href={"#"} className="hover:text-burnt-orange">
              Earphones
            </Link>
          </li>
        </ul>

        <ShoppingCart />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-widest px-2">
            <li>
              <Link href={"/"} className="hover:text-burnt-orange">
                HOME
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-burnt-orange">
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-burnt-orange">
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link href={"#"} className="hover:text-burnt-orange">
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
