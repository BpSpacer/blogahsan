"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo-dark.png";
import { useState } from "react";

export const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed left-4 top-4 z-50 p-2 focus:outline-none mt-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-8 h-8 relative">
          <span
            className={`absolute block h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "rotate-45 translate-y-2.5" : "-translate-y-1.5"
              }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          ></span>
          <span
            className={`absolute block h-0.5 w-8 bg-current transform transition duration-500 ease-in-out ${isOpen ? "-rotate-45 translate-y-2.5" : "translate-y-1.5"
              }`}
          ></span>
        </div>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-screen w-64 shadow-lg z-50 border-r transform transition-transform duration-300 ease-in-out bg-black text-white md:bg-transparent  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >

        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <nav>
            <Link href="/" className="flex items-center gap-2">
              <Image src={Logo} className="size-10" alt="Logo" />
              <h4 className="text-3xl font-semibold">
                Blog<span className="text-primary">Ahsan</span>
              </h4>
            </Link>

            <ul className="space-y-3 mt-8">
              <li>
                <Link
                  href="/courses"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-300 md:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-300 md:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  APPS
                </Link>
              </li>
              <li>
                <Link
                  href="/shopifyy"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-300 md:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Shopify
                </Link>
              </li>
              <li>
                <Link
                  href="/wordpresss"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-300 md:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Wordpress
                </Link>
              </li>
              <li>
                <Link
                  href="/softwares"
                  className="block px-4 py-2 rounded-lg hover:bg-gray-100 hover:text-gray-900 text-gray-300 md:text-gray-600"
                  onClick={() => setIsOpen(false)}
                >
                  Softwares
                </Link>
                
              </li>
            </ul>
          </nav>
        </div>
      </aside>

    </>
  );
};