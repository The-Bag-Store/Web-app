"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingCart, User, Heart, Search } from "lucide-react";

import { Banner } from "@/components/common/Banner";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <Banner />
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 lg:px-8 flex h-16 items-center justify-between md:justify-start">
          {/* Mobile View - Left: Toggle Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="mr-2"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>

          {/* Mobile View - Center: Logo */}
          <div className="flex-1 md:flex-none flex justify-center md:justify-start">
            <Link href="/" className="text-lg font-bold text-foreground">
              BagStore
            </Link>
          </div>

          {/* Mobile View - Right: Profile Icon */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 mx-auto">
            <Link
              className="transition-colors hover:text-foreground/90 text-foreground/60"
              href="/"
            >
              Link 1
            </Link>
            <Link
              className="transition-colors hover:text-foreground/90 text-foreground/60"
              href="/"
            >
              Link 2
            </Link>
            <Link
              className="transition-colors hover:text-foreground/90 text-foreground/60"
              href="/"
            >
              Link 3
            </Link>
            <Link
              className="transition-colors hover:text-foreground/90 text-foreground/60"
              href="/"
            >
              Link 4
            </Link>
            <Link
              className="transition-colors hover:text-foreground/90 text-foreground/60"
              href="/"
            >
              Link 5
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="block md:hidden px-4 py-2 bg-background/95 backdrop-blur-md">
            <Link href="/shop" className="block py-2">
              Shop
            </Link>
            <Link href="/new-arrivals" className="block py-2">
              New Arrivals
            </Link>
            <Link href="/best-sellers" className="block py-2">
              Best Sellers
            </Link>
            <Link href="/sale" className="block py-2">
              Sale
            </Link>
            <Link href="/about" className="block py-2">
              About Us
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
