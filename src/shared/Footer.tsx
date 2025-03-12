import Link from 'next/link';
import { HiMiniPaperAirplane } from 'react-icons/hi2';
import {
  ImPlay3,
  ImAppleinc,
  ImFacebook,
  ImTwitter,
  ImLinkedin2,
} from 'react-icons/im';
import { BsQrCode, BsInstagram } from 'react-icons/bs';

import Logo from '@/components/Logo';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container py-16 grid gap-6 gap-y-16 md:justify-items-center grid-cols-6 md:grid-cols-[1.5fr,1fr,1fr,1fr,1.5fr]">
        <div className="col-span-3 md:col-span-1">
          <Logo />

          <p className="mt-5 mb-5">Subscripe</p>
          <p className="text-xs md:text-sm mb-4 text-gray-300">
            Get 10% off your first order
          </p>

          <div className="relative w-fit">
            <input
              type="text"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-2 border-gray-400 rounded-sm py-2 px-3 text-xs md:text-sm w-full"
            />
            <HiMiniPaperAirplane className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="px-3 row-start-1 col-span-2 md:col-span-1 justify-self-center md:row-auto">
          <h3 className="mb-5 text-lg">Support</h3>
          <address className="space-y-3 not-italic text-gray-300 text-xs md:text-sm">
            <p>111 Bejoy sarani, Dhaka, DH 1515, Bangladesh</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </address>
        </div>

        <div className="row-start-1 col-span-2 md:col-span-1 justify-self-center md:row-auto">
          <h3 className="mb-5 text-lg">Account</h3>
          <ul className="space-y-3 text-gray-300 text-xs md:text-sm">
            <li>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Account"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Log-In"
              >
                Login
              </Link>
              <span> / </span>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Sign-Up"
              >
                Register
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:text-gray-200" href="/Cart">
                Cart
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Wishlist"
              >
                Wishlist
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Product-Details"
              >
                Shop
              </Link>
            </li>
          </ul>
        </div>

        <div className="row-start-1 col-span-2 md:col-span-1 justify-self-center md:row-auto">
          <h3 className="mb-5 text-lg">Quick Link</h3>
          <ul className="space-y-3 text-gray-300 text-xs md:text-sm">
            <li>
              <Link className="transition-all hover:text-gray-200" href="/">
                Privacy Police
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:text-gray-200" href="/">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link className="transition-all hover:text-gray-200" href="/">
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="transition-all hover:text-gray-200"
                href="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-3 md:col-span-1">
          <h3 className="mb-5 text-lg">Download App</h3>
          <p className="text-xs text-gray-400 mb-2 md:text-sm">
            Save $3 With New User Only
          </p>

          <div className="flex items-center gap-2 mb-2">
            <div className="w-1/3 cursor-pointer">
              <BsQrCode size={100} className="w-full" />
            </div>
            <div>
              <p className="p-1 mb-2 leading-none border-2 border-gray-500 rounded-md flex items-center gap-1 cursor-pointer">
                <ImPlay3 size={24} />
                <small className="text-[0.5rem]">
                  GET IT ON <br />
                  <span className="text-[0.7rem] font-semibold">
                    Google Play
                  </span>
                </small>
              </p>
              <p className="p-1 pe-2 leading-none border-2 border-gray-500 rounded-md flex items-center gap-1 cursor-pointer">
                <ImAppleinc size={24} />
                <small className="text-[0.5rem]">
                  Download on the <br />
                  <span className="text-[0.7rem] font-semibold">App Store</span>
                </small>
              </p>
            </div>
          </div>

          <div className="flex gap-7">
            <Link href="https://www.facebook.com/" target="_blank">
              <ImFacebook size={18} />
            </Link>
            <Link href="https://x.com/" target="_blank">
              <ImTwitter size={18} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <BsInstagram size={18} />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <ImLinkedin2 size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs md:text-sm py-3 text-gray-500 border-t-2 border-gray-900">
        <p>&copy; Copyright Mahmoud Mostafa 2025. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
