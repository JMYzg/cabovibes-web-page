"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Globe, ShoppingCart, Fish, Sunset, Ship } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

import { cn } from "@/lib/utils";


const Navbar = () => {
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const tourItems = [
    {
      href: "/tours/sport-fishing",
      title: "Sport Fishing",
      description:
        "Experience the thrill of catching marlin, dorado, and tuna in world-class waters",
      icon: <Fish className="size-6" />,
    },
    {
      href: "/tours/sunset-ballena",
      title: "Sunset & Ballena",
      description:
        "Watch majestic whales and breathtaking sunsets in the Sea of Cortez",
      icon: <Sunset className="size-6" />,
    },
    {
      href: "/tours/yacht-chartering",
      title: "Yacht Chartering",
      description:
        "Sail in luxury with fully customizable private yacht experiences",
      icon: <Ship className="size-6" />,
    },
  ];

  const pathname = usePathname();

  return (
    <nav className="navbar frosted gap-4">
      <div className="flex justify-center items-center gap-4">
        <div className="size-6 bg-white"></div>
        <h5>Cabovibes</h5>
      </div>
      <Input placeholder="Search" />
      <NavigationMenu>
        <NavigationMenuList className="flex w-full items-center justify-between gap-4">
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle({ variant: "ghost" }),
                "text-muted-foreground text-base font-medium hover:text-foreground"
              )}
            >
              Tours
            </NavigationMenuTrigger>
            <NavigationMenuContent className="frosted rounded-xs w-72 md:w-80 lg:w-96">
              {tourItems.map((item) => (
                <NavigationMenuLink
                  key={item.href}
                  asChild
                  className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-medium"
                >
                  <Link
                    href={item.href}
                    className={
                      pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground"
                    }
                  >
                    <div className="flex items-center hover:bg-muted-foreground/20 transition-colors rounded-xs p-2 gap-2">
                      <div className="flex-shrink-0 flex items-center">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h6>{item.title}</h6>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink
                asChild
                className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent text-base font-medium"
              >
                <Link
                  href={link.href}
                  className={
                    pathname === link.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <div className="h-[1.4375rem] w-0.5 rounded-full bg-muted-foreground" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              aria-label="Change language"
              className="hover:bg-muted-foreground/20"
            >
              <Globe className="size-6" />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              variant="ghost"
              aria-label="Shopping cart"
              className="hover:bg-muted-foreground/20"
            >
              <ShoppingCart className="size-6" />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
