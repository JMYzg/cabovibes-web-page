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

import { ShoppingCart, Globe, Fish, Sunset, Ship } from "lucide-react";

const NavLinks = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const TourItems = [
  {
    href: "/tours/sport-fishing",
    label: "Sport Fishing",
    icon: <Fish className="size-8" />,
  },
  {
    href: "/tours/sunset-ballena",
    label: "Sunset & Ballena",
    icon: <Sunset className="size-8" />,
  },
  {
    href: "/tours/yacht-chartering",
    label: "Yacht Chartering",
    icon: <Ship className="size-8" />,
  },
];

function Navbar() {
  return (
    <nav>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[175px]">
                {TourItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="flex flex-row items-center"
                      >
                        <div>{item.icon}</div>
                        <div>
                          <div className="font-medium text-muted-foreground">
                            {item.label}
                          </div>
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {NavLinks.map((link) => {
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
            <div className=""></div>
          </NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
          <NavigationMenuItem></NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
