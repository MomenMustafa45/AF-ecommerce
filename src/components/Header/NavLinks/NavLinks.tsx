"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { navLinks } from "../links";

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-8 max-md:hidden">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <li key={link.id}>
            <Link
              href={link.href}
              className={`text-xl transition-all px-6 py-1 rounded-full
                ${
                  isActive
                    ? "bg-black dark:bg-white bg-opacity-80 text-white dark:text-black"
                    : "text-primary-light dark:text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              `}
            >
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
