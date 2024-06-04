"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed w-full ${isScrolled ? 'bg-white' : 'bg-transparent'} transition-colors duration-300 z-10`}>
      <div className="container">
        <header>
          <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 sm:w-[20px]">
              <Link href="#" className="-m-1.5 p-1.5">
              <svg width="230" height="50" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="135" height="50" fill="#2a2172"/>
    <text x="10" y="35" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">LAKSHMI</text>
    <rect x="130" y="0" width="80" height="50" fill="#2a2172"/>
    <text x="130" y="35" fill="white" font-family="Arial, sans-serif" font-size="24" font-weight="bold">LIFTS</text>
  </svg>


              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              
  <Link href="/" className={`text-[18px] font-semibold leading-6 ${isScrolled ? (router.pathname === '/' ? "text-[#6d66e9]" : "text-black") : (router.pathname === '/' ? "text-[#6d66e9]" : "text-white")}`}>
    Home
  </Link>
              
  <Link href="/about" className={`text-[18px] font-semibold leading-6 ${isScrolled ? (router.pathname === '/about' ? "text-[#6d66e9]" : "text-black") : (router.pathname === '/about' ? "text-[#6d66e9]" : "text-white")}`}>
    About
  </Link>
              
  <Link href="/contact" className={`text-[18px] font-semibold leading-6 ${isScrolled ? (router.pathname === '/contact' ? "text-[#6d66e9]" : "text-black") : (router.pathname === '/contact' ? "text-[#6d66e9]" : "text-white")}`}>
    Contact
  </Link>
              
  <Link href="/products" className={`text-[18px] font-semibold leading-6 ${isScrolled ? (router.pathname === '/products' ? "text-[#6d66e9]" : "text-black") : (router.pathname === '/products' ? "text-[#6d66e9]" : "text-white")}`}>
    Products
  </Link>

</div>

          </nav>
          {isOpenMenu && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10"></div>
              <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <Link href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
        src="/companylogo.png"
        alt="Company Logo"
        width={300} // Actual width of your image
        height={100} // Actual height of your image
      />
                  </Link>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={toggleMenu}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6 grid grid-cols-1 divide-y">
                      <Link
                        href="/"
                        className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </Link>
                      <Link
                        href="/about"
                        className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        About
                      </Link>
                      <Link
                        href="/contact"
                        className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Contact
                      </Link>
                      <Link
                        href="/products"
                        className="-mx-3 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Products
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </div>
  );
};

export default Header;
