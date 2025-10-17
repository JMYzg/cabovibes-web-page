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
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Fish, Sunset, Ship, Search, ShoppingCart, Globe } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceItems = [
  { href: "/tours/sport-fishing", label: "Sport Fishing", icon: <Fish /> },
  { href: "/tours/sunset-ballena", label: "Sunset & Ballena", icon: <Sunset /> },
  { href: "/tours/yacht-chartering", label: "Yacht Chartering", icon: <Ship /> },
];

function Navbar() {
  return (
    <nav className="flex items-center gap-4 p-4">
      {/* Logo */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/" className="flex flex-row items-center gap-2">
                <div className="h-4 w-4 bg-muted" />
                <span className="font-medium">Cabovibes</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search Bar */}
      <InputGroup className="flex-1">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Search</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      {/* Navigation Links */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          {/* Tours Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tours</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-max">
                {serviceItems.map((item) => (
                  <li key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link href={item.href} className="flex flex-row items-center gap-2">
                        {item.icon}
                        <span>{item.label}</span>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About & Contact Links */}
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href={link.href}>{link.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}

          {/* Divider */}
          <NavigationMenuItem>
            <div className="h-[1.4375rem] w-0.5 rounded-full bg-muted" />
          </NavigationMenuItem>

          {/* Action Buttons */}
          <NavigationMenuItem>
            <Button variant="ghost" size="icon">
              <Globe />
            </Button>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button variant="ghost" size="icon">
              <ShoppingCart />
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}

export default Navbar;
