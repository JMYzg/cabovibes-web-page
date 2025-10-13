"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ShoppingCart } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  const pathname = usePathname();

  return (
    <div className="flex items-center self-stretch w-full px-0 lg:px-[8.75rem]">
      <nav className="navbar frosted">
        <NavigationMenu>
          <NavigationMenuList className="flex w-full lg:w-[23rem] items-center justify-between gap-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <h6>Tours</h6>
              </NavigationMenuTrigger>
            </NavigationMenuItem>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink asChild className="pointer-events-none">
                  <Link
                    href={link.href}
                    className={pathname === link.href ? "text-accent" : ""}
                  >
                    <h6>{link.label}</h6>
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <div className="h-[1.4375rem] w-0.5 bg-foreground/40 rounded-full" />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                aria-label="Change language"
                className="pointer-events-none"
              >
                <Globe className="size-6" />
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="ghost"
                aria-label="Shopping cart"
                className="pointer-events-none"
              >
                <ShoppingCart className="size-6" />
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
};

export default Navbar;
