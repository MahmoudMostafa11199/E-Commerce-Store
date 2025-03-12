'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  HiOutlineDevicePhoneMobile,
  HiOutlineComputerDesktop,
  HiOutlineCamera,
} from 'react-icons/hi2';
import { LiaHeadphonesSolid, LiaGamepadSolid } from 'react-icons/lia';

import ButtonPagination from '@/components/ButtonPagination';

function Categories() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex justify-between mb-8">
        <h2 className="headingSecondary">Browse By Category</h2>
        <ButtonPagination containerRef={containerRef} />
      </div>

      <div className="carousel-container flex gap-6" ref={containerRef}>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <HiOutlineDevicePhoneMobile size={28} className="mb-4 mx-auto" />
          <span>Phones</span>
        </Link>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <HiOutlineComputerDesktop size={28} className="mb-4 mx-auto" />
          <span>Computers</span>
        </Link>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <svg
            className="mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
            width={28}
            height={28}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 5.268V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.268A2 2 0 0 1 15 7v1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a2 2 0 0 1-1 1.732V16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1.268A2 2 0 0 1 5 13V7a2 2 0 0 1 1-1.732M8 3a1 1 0 0 0-1 1v1h6V4a1 1 0 0 0-1-1zm6 10V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v6a1 1 0 0 0 .999 1H13a1 1 0 0 0 1-1m-7 3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1H7z"
            ></path>
          </svg>
          <span>SmartWatch</span>
        </Link>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <HiOutlineCamera size={28} className="mb-4 mx-auto" />
          <span>Camera</span>
        </Link>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <LiaHeadphonesSolid size={28} className="mb-4 mx-auto" />
          <span>HeadPhones</span>
        </Link>
        <Link
          href="/"
          className="p-6 min-w-[14.9%] flex-shrink-0 text-center border-2 transition-all hover:bg-primary-700 hover:text-white"
        >
          <LiaGamepadSolid size={28} className="mb-4 mx-auto" />
          <span>Gaming</span>
        </Link>
      </div>
    </>
  );
}

export default Categories;
