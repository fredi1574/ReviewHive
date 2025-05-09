"use client";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DollarSign, Home, Info, Plus } from "lucide-react";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState();

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    {
      href: "/addlecturer",
      label: "Add a lecturer",
      icon: <Plus className="h-4 w-4" />,
    },
    { href: "/about", label: "About", icon: <Info className="h-4 w-4" /> },
    {
      href: "/donate",
      label: "Donate",
      icon: <DollarSign className="h-4 w-4" />,
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-warmOrange bg-lightOrange shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/headerlogo.png"
            alt="logo"
            width={100}
            height={100}
            priority
            className="cursor-pointer"
          />
        </Link>

        <nav className="hidden space-x-4 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className="flex items-center space-x-2 hover:bg-warmOrange"
            >
              <Link href={item.href}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[240px] border-0 bg-warmOrange sm:w-[300px]"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="flex items-center justify-start space-x-2 hover:bg-lightOrange"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
