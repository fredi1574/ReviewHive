"use client";

import { signOut } from "firebase/auth";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { auth } from "@/lib/firebase";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const username = auth.currentUser?.displayName || "User";

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/signup");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/addlecturer", label: "Add a lecturer" },
    { href: "/about", label: "About" },
    { href: "/donate", label: "Donate" },
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
              className="hover:bg-warmOrange"
            >
              <Link href={item.href}>{item.label}</Link>
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
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Button
                    key={item.href}
                    asChild
                    variant="ghost"
                    className="justify-start"
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>
                    {username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => router.push("/profile")}>
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
