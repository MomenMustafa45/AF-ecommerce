"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { navLinks } from "../links";
import { usePathname } from "next/navigation";

const MenuLinks = () => {
  const [showList, setShowList] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".menu-links")) {
        setShowList(false);
      }
    };

    if (mounted) {
      window.addEventListener("click", handleClickOutside);
    }
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <div className="menu-links relative">
        <button className="menu-icon cursor-pointer">
          <Icon
            icon="ic:round-menu"
            width="24"
            height="24"
            className="text-white dark:text-gray-200"
          />
        </button>
      </div>
    );
  }

  return (
    <div className="menu-links relative">
      <button className="menu-icon cursor-pointer" onClick={toggleMenu}>
        <Icon
          icon="ic:round-menu"
          width="24"
          height="24"
          className="text-white dark:text-gray-200"
        />
      </button>

      {showList && (
        <ul className="menu-list absolute top-full right-0 w-52 z-20 rounded-md shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 overflow-hidden">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.href}>
              <li
                className={`px-4 py-3 cursor-pointer hover:bg-p1 hover:text-white dark:hover:bg-p1 transition-all ${
                  pathname == link.href ? "bg-p1 text-white" : ""
                }`}
                onClick={() => setShowList(false)}
              >
                {link.label}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuLinks;
