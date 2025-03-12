import Link from 'next/link';
import Image from 'next/image';
import { HiChevronRight, HiArrowRight } from 'react-icons/hi2';
import { ImAppleinc } from 'react-icons/im';

import FlashSales from '@/components/FlashSales';
import SellingProducts from '@/components/SellingProducts';
import Categories from '@/components/Categories';
import Products from '@/components/Products';
import FeaturesSection from '@/components/FeaturesSection';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      <section className="home">
        <div className="container grid grid-cols-12">
          <div className="col-span-2 border-r-2">
            <ul className="space-y-3 py-6 pe-4">
              <li>
                <Link href="/" className="flex justify-between items-center">
                  Woman&apos;s Fashion
                  <HiChevronRight />
                </Link>
              </li>
              <li>
                <Link href="/" className="flex justify-between items-center">
                  Men&apos;s Fashion
                  <HiChevronRight />
                </Link>
              </li>
              <li>
                <Link href="/">Electronics</Link>
              </li>
              <li>
                <Link href="/">Home & Lifestyle</Link>
              </li>
              <li>
                <Link href="/">Medicine</Link>
              </li>
              <li>
                <Link href="/">Sports & Outdoor</Link>
              </li>
              <li>
                <Link href="/">Baby&apos; & Toys</Link>
              </li>
              <li>
                <Link href="/">Groceries & Pets</Link>
              </li>
              <li>
                <Link href="/">Health & Beauty</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-10 py-6 ps-8">
            <div className="bg-black text-white px-12 pt-6 h-full flex justify-evenly items-center">
              <div className="w-1/2 pe-10">
                <p className="flex items-center gap-4 mb-5">
                  <ImAppleinc size={30} />
                  <span>iPhone 14 Series</span>
                </p>
                <h1 className="font-bold text-white text-5xl mb-8">
                  Up to 10% off Voucher
                </h1>
                <Link href="/" className="text-sm space-x-2 hover:space-x-3">
                  <span className="pb-1 border-b-2 border-gray-500 hover:border-b-0">
                    Shop Now
                  </span>
                  <HiArrowRight className="inline-block stroke-1" />
                </Link>
              </div>
              <div className="w-1/2">
                <Image src="/phone.png" alt="phone" width={400} height={400} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="today-sales">
        <div className="container border-b-2 py-20">
          <p className="subHeading">Today&apos;s</p>
          <FlashSales />
        </div>
      </section>

      <section>
        <div className="container py-20 border-b-2">
          <p className="subHeading">Categories</p>
          <Categories />
        </div>
      </section>

      <section>
        <div className="container py-20">
          <p className="subHeading">The Month</p>
          <div className="flex justify-between items-center mb-14">
            <h2 className="headingSecondary">Best Selling Products</h2>
            <Button type="primary">View All</Button>
          </div>
          <SellingProducts />
        </div>
      </section>

      <section>
        <div className="container py-20 bg-black">
          <div className="px-6 flex gap-8">
            <div className="flex flex-col items-start gap-8">
              <p className="text-secondary-700 font-semibold">Categories</p>
              <h2 className="headingSecondary text-white text-5xl leading-tight">
                Enhance Your Mucis Experience
              </h2>
              <div className="duration">
                <ul className="flex gap-4 font-[inter]">
                  <li className="bg-white p-4 rounded-full w-14 h-14 flex flex-col items-center justify-center">
                    <span className="hour text-[0.8rem] font-bold">23</span>
                    <span className="text-[0.6rem] font-medium">Hours</span>
                  </li>
                  <li className="bg-white p-4 rounded-full w-14 h-14 flex flex-col items-center justify-center">
                    <span className="day text-[0.8rem] font-bold">05</span>
                    <span className="text-[0.6rem] font-medium">Days</span>
                  </li>
                  <li className="bg-white p-4 rounded-full w-14 h-14 flex flex-col items-center justify-center">
                    <span className="minute text-[0.8rem] font-bold">59</span>
                    <span className="text-[0.6rem] font-medium">Minutes</span>
                  </li>
                  <li className="bg-white p-4 rounded-full w-14 h-14 flex flex-col items-center justify-center">
                    <span className="second text-[0.8rem] font-bold">35</span>
                    <span className="text-[0.6rem] font-medium">Seconds</span>
                  </li>
                </ul>
              </div>
              <Button type="secondary">Buy Now!</Button>
            </div>
            <div className="grow w-full">
              <Image
                className="img-speaker max-w-full h-full"
                src="/JBL_BOOMBOX_2_HERO_020_x1.png"
                alt="...."
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-20">
          <p className="subHeading">Our Products</p>
          <div className="flex justify-between items-center mb-14">
            <h2 className="headingSecondary">Explore Our Products</h2>
          </div>
          <Products />
          <div className="text-center mt-12">
            <Button type="primary">View All Products</Button>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-20">
          <p className="subHeading">Featured</p>
          <h2 className="headingSecondary mb-8">New Arrival</h2>
          <div className="flex gap-6 text-white">
            <div className="relative w-1/2 bg-[#0d0d0d] bg-[url('/ps5-playstation_large.png')] bg-auto bg-no-repeat bg-bottom h-[34rem]">
              <div className="space-y-4 absolute bottom-6 left-6 w-5/12">
                <h3 className="text-xl font-semibold">Play Station 5</h3>
                <p className="text-xs">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Link
                  href="/Cart"
                  className="inline-block pb-1 border-b-2 border-gray-500 hover:border-transparent"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="w-1/2 space-y-6">
              <div className="relative bg-[#0d0d0d] bg-[url('/woman-wearing-hat.png')] bg-contain bg-no-repeat bg-right h-1/2">
                <div className="space-y-2 absolute bottom-6 left-6 w-5/12">
                  <h3 className="text-xl font-semibold">
                    Women&apos;s Collections
                  </h3>
                  <p className="text-xs">
                    Featured woman collections that give you another vibe.
                  </p>
                  <Link
                    href="/Cart"
                    className="inline-block pb-1 border-b-2 border-gray-500 hover:border-transparent"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
              <div className="flex gap-6 h-[45.5%]">
                <div className="relative bg-[#0d0d0d] bg-[url('/speakers-amazon.png')] bg-auto bg-no-repeat bg-center h-full w-1/2">
                  <div className="space-y-2 absolute bottom-6 left-6 w-3/5">
                    <h3 className="text-xl font-semibold">Speakers</h3>
                    <p className="text-xs">Amazon wireless speakers</p>
                    <Link
                      href="/Cart"
                      className="inline-block pb-1 border-b-2 border-gray-500 hover:border-transparent"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
                <div className="relative bg-[#0d0d0d] bg-[url('/perfume.png')] bg-auto bg-no-repeat bg-center h-full w-1/2">
                  <div className="space-y-2 absolute bottom-6 left-6 w-3/5">
                    <h3 className="text-xl font-semibold">Perfume</h3>
                    <p className="text-xs">GUCCI INTENSE OUD EDP</p>
                    <Link
                      href="/Cart"
                      className="inline-block pb-1 border-b-2 border-gray-500 hover:border-transparent"
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
    </>
  );
}
