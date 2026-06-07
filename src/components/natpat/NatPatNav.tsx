"use client";

import { useState } from "react";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = ["Shop", "About", "Reviews", "Learn", "Help", "Wholesale"];

export function NatPatNav() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#1F1F5B] p-1"
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <a href="/natpat" className="flex-shrink-0">
            <img
              src="/images/natpat/logo.svg"
              alt="NATPAT"
              className="h-8 md:h-9 w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <nav className="hidden md:flex gap-8 items-center flex-1 justify-center">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-[15px] font-semibold text-[#1F1F5B] hover:text-[#1F4FC9] cursor-pointer transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Icons group */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Search"
              className="text-[#1F1F5B] hover:text-[#1F4FC9] transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Account"
              className="hidden md:block text-[#1F1F5B] hover:text-[#1F4FC9] transition-colors"
            >
              <User size={20} />
            </button>
            <button
              aria-label="Cart"
              className="relative text-[#1F1F5B] hover:text-[#1F4FC9] transition-colors"
            >
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#FF209E] text-white text-[10px] leading-none flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[9998] bg-black/40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-[280px] bg-white z-[9999] shadow-2xl transition-transform duration-300",
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-gray-200">
          <img
            src="/images/natpat/logo.svg"
            alt="NATPAT"
            className="h-8 w-auto"
          />
          <button
            aria-label="Close menu"
            className="text-[#1F1F5B]"
            onClick={() => setDrawerOpen(false)}
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 gap-5">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-[17px] font-semibold text-[#1F1F5B] hover:text-[#1F4FC9] transition-colors"
              onClick={() => setDrawerOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
