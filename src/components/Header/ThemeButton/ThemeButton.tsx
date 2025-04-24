"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative text-left">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 border rounded text-sm md:text-base"
      >
        {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      {false && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-10 zoomIn">
          <ul className="py-1">
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-white"
              onClick={() => {
                // setShowMenu(false);
                setTheme("dark");
              }}
            >
              <Icon icon="mdi:moon-waning-crescent" className="w-4 h-4 mr-2" />{" "}
              Dark
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-white"
              onClick={() => {
                // setShowMenu(false);
                setTheme("light");
              }}
            >
              <Icon icon="mdi:white-balance-sunny" className="w-4 h-4 mr-2" />{" "}
              Light
            </li>
            <li
              className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-white"
              onClick={() => {
                // setShowMenu(false);
                setTheme("system");
              }}
            >
              <Icon icon="mdi:monitor" className="w-4 h-4 mr-2" /> System
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
