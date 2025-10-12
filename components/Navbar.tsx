"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "/tours", label: "Tours" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center self-stretch">
        <nav>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-accent" : ""}
                >
                  <h5>{link.label}</h5>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
