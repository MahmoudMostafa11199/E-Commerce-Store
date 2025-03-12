'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import TopHeader from './TopHeader';

import Logo from '@/components/Logo';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <TopHeader />

      <header className="py-3 px-3 border-b-2">
        <div className="container flex justify-between items-center flex-wrap gap-y-4">
          <Logo />

          <nav>
            <ul className="flex gap-4 sm:gap-8 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-800">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="hover:text-gray-800">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/About" className="hover:text-gray-800">
                  About
                </Link>
              </li>
              <li>
                <Link href="/Sign-Up" className="hover:text-gray-800">
                  Sign Up
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-5">
            <div className="relative">
              <input
                type="text"
                className="input py-2 pe-8"
                placeholder="What are you looking for?"
              />
              <Icon
                icon="tdesign:search"
                className="absolute right-2 top-1/2 -translate-y-1/2 place-items-center pointer-events-none"
                width="18"
                height="18"
              />
            </div>
            <div className="flex gap-2">
              <div className="flex items-center px-2 py-2 transition-all cursor-pointer rounded-full hover:bg-primary-500 hover:text-white">
                <Icon icon="lineicons:heart" width="24" height="24" />
              </div>
              <div className="flex items-center px-2 py-2 transition-all cursor-pointer rounded-full hover:bg-primary-500 hover:text-white">
                <Icon icon="f7:cart" width="24" height="24" />
              </div>

              <div
                className={`relative flex items-center px-2 py-2 transition-all cursor-pointer rounded-full hover:bg-primary-500 hover:text-white ${
                  isMenuOpen && 'bg-primary-500 text-white'
                }`}
                onClick={handleMenuToggle}
              >
                <Icon icon="mingcute:user-1-line" width="24" height="24" />

                {isMenuOpen && (
                  <div className="text-white bg-gradient-to-t from-gray-800 to-gray-600 backdrop-blur-[110px] absolute top-[120%] p-6 right-0 w-[16em] rounded-md z-50 box-border">
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/Account"
                          className="flex items-center gap-2 transition-all hover:ps-2"
                        >
                          <Icon
                            icon="mingcute:user-1-line"
                            width="24"
                            height="24"
                          />
                          <span>Manage My Account</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Account/Order-Return"
                          className="flex items-center gap-2 transition-all hover:ps-2"
                        >
                          <Icon
                            icon="icon-park-outline:mall-bag"
                            width="24"
                            height="24"
                          />
                          <span>My Order</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/Account/Order-Cancel"
                          className="flex items-center gap-2 transition-all hover:ps-2"
                        >
                          <Icon
                            icon="proicons:cancel-circle"
                            width="24"
                            height="24"
                          />
                          <span>My Cancellations</span>
                        </Link>
                      </li>
                      <li className="flex items-center gap-2 transition-all hover:ps-2">
                        <Icon
                          icon="basil:star-outline"
                          width="24"
                          height="24"
                        />
                        <span>My Reviews</span>
                      </li>
                      <li>
                        <Link
                          href="/Log-In"
                          className="flex items-center gap-2 transition-all hover:ps-2"
                        >
                          <Icon
                            icon="solar:logout-2-outline"
                            width="24"
                            height="24"
                          />
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
