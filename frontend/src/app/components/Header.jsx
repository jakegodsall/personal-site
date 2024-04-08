"use client";
import { useState } from "react";

import HamburgerButton from "./UI/Hamburger";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleMobileMenu() {
    setMobileMenuOpen((prevState) => !prevState);
  }

  return (
    <header className="flex justify-between items-center bg-grey-primary p-[1.6rem]">
      <h1 className="text-[3.2rem] font-bold">JG</h1>
      <HamburgerButton
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={handleMobileMenu}
      />
    </header>
  );
}
