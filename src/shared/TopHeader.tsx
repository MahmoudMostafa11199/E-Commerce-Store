import Link from 'next/link';
import { HiChevronDown } from 'react-icons/hi2';

function TopHeader() {
  return (
    <div className="bg-black text-white p-3 flex justify-center text-xs mb-3 lg:text-sm">
      <p className="capitalize me-10 md:me-28">
        Summer sale far all swim suit and free express delivery - off 50%!
        <Link href="#" className="ms-4 underline">
          ShopNow
        </Link>
      </p>

      <p className="space-x-2 cursor-pointer">
        <span>English</span>
        <HiChevronDown className="inline-block stroke-1" />
      </p>
    </div>
  );
}

export default TopHeader;
