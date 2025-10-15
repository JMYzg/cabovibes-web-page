import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
} from "./ui/navigation-menu";

import { Button } from "./ui/button";

import { Input } from "./ui/input";

import { ShoppingCart, Globe, Fish, Sunset, Ship } from "lucide-react";

const navLinks = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const serviceItems = [
  {
    href: "/tours/sport-fishing",
    label: "Sport Fishing",
    icon: <Fish />,
  },
  {
    href: "/tours/sunset-ballena",
    label: "Sunset & Ballena",
    icon: <Sunset />,
  },
  {
    href: "/tours/yacht-chartering",
    label: "Yacht Chartering",
    icon: <Ship />,
  },
];

function Navbar() {
  return (
    <nav>
      <NavigationMenu className="flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href={"/"} className="flex">
                <div className="h-4 w-4 bg-muted"></div>
                <div className="">Cabovibes</div>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[175px]">
                {serviceItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="flex flex-row items-center"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <div>{item.label}</div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {navLinks.map((link) => {
            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <div className="h-[1.4375rem] w-0.5 rounded-full bg-muted" />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant={"ghost"}>
              <Globe />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant={"ghost"}>
              <ShoppingCart />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
