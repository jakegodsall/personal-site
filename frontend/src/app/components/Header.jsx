"use client";
import { useState } from "react";
import Link from "next/link";

import HamburgerButton from "./UI/Hamburger";
import MobileMenu from "./Modals/MobileMenu/MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setMobileMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="flex justify-between items-center bg-grey-primary p-[1.6rem] md:p-[3.5rem]">
      <h1 className="text-[3.2rem] font-bold">JG</h1>
      <div className="md:hidden relative z-40">
        <HamburgerButton
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={handleMobileMenu}
        />
      </div>
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-[2.5rem] uppercase text-[1.8em] tracking-[-5%]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="portfolio/">Portfolio</Link>
          </li>
          <li>
            <Link href="blog/">Blog</Link>
          </li>
          <li>
            <Link href="daily-log/">Daily Log</Link>
          </li>
          <li>
            <Link href="contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      <MobileMenu />
    </header>
  );
}
