'use client';
import { useRef } from 'react';

import ButtonPagination from '@/components/ButtonPagination';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { flashSales } from '@/app/data';

function FlashSales() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="flex items-end mb-10">
        <h2 className="headingSecondary me-28">Flash Sales</h2>
        <div className="duration inline-block">
          <p className="flex gap-4 font-[inter]">
            <span className="day text-3xl font-bold -tracking-tight relative before:content-['Days'] before:absolute before:text-xs before:font-medium before:-top-4 before:left-0">
              03
            </span>
            <strong className="text-primary-700">:</strong>
            <span className="hour text-3xl font-bold -tracking-tight relative before:content-['Hours'] before:absolute before:text-xs before:font-medium before:-top-4 before:left-0">
              23
            </span>
            <strong className="text-primary-700">:</strong>
            <span className="minute text-3xl font-bold -tracking-tight relative before:content-['Minutes'] before:absolute before:text-xs before:font-medium before:-top-4 before:left-0">
              19
            </span>
            <strong className="text-primary-700">:</strong>
            <span className="second text-3xl font-bold -tracking-tight relative before:content-['Seconds'] before:absolute before:text-xs before:font-medium before:-top-4 before:left-0">
              56
            </span>
          </p>
        </div>
        <ButtonPagination containerRef={containerRef} />
      </div>

      <div className="carousel-container flex gap-7 mb-8" ref={containerRef}>
        {flashSales.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            image={product.img}
            price={product.price}
            sale={product.sale}
            ratingCount={product.ratingCount}
            ratings={product.ratings}
            showSale={true}
          />
        ))}
      </div>
      <div className="text-center">
        <Button type="primary">View All Products</Button>
      </div>
    </>
  );
}

export default FlashSales;

// <div className="cart relative flex-shrink-0">
//   <div className="relative h-fit bg-gray-300">
//     <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
//       -30%
//     </p>
//     <div className="absolute top-2 right-2">
//       <button className="block p-1 bg-white rounded-full">
//         <HiOutlineHeart />
//       </button>
//       <button className="p-1 bg-white rounded-full">
//         <HiOutlineEye />
//       </button>
//     </div>
//     <button className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
//       Add To Cart
//     </button>
//     <Image
//       src="/image.png"
//       alt="..."
//       className="object-none"
//       width={280}
//       height={280}
//     />
//   </div>
//   <div>
//     <h4>HAVIT HV-G92 Gamepad</h4>
//     <p>
//       <span className="text-red-600 me-3">$120</span>
//       <span className="line-through text-gray-500">$160</span>
//     </p>
//     <div className="star">
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <span>(88)</span>
//     </div>
//   </div>
// </div>
// <div className="cart relative flex-shrink-0">
//   <div className="relative h-fit bg-gray-300">
//     <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
//       -30%
//     </p>
//     <div className="absolute top-2 right-2">
//       <button className="block p-1 bg-white rounded-full mb-1">
//         <HiOutlineHeart />
//       </button>
//       <button className="p-1 bg-white rounded-full">
//         <HiOutlineEye />
//       </button>
//     </div>
//     <button className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
//       Add To Cart
//     </button>
//     <Image
//       src="/phone.png"
//       alt=""
//       className="object-none"
//       width={280}
//       height={280}
//     />
//   </div>
//   <div>
//     <h4></h4>
//     <p>
//       <span></span>
//       <span></span>
//     </p>{' '}
//     <div className="star">
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <span>()</span>
//     </div>
//   </div>
// </div>
// <div className="cart relative flex-shrink-0">
//   <div className="relative h-fit bg-gray-300">
//     <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
//       -30%
//     </p>
//     <div className="absolute top-2 right-2">
//       <button className="block p-1 bg-white rounded-full mb-1">
//         <HiOutlineHeart />
//       </button>
//       <button className="p-1 bg-white rounded-full">
//         <HiOutlineEye />
//       </button>
//     </div>
//     <button className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
//       Add To Cart
//     </button>
//     <Image
//       src="/phone.png"
//       alt=""
//       className="object-none"
//       width={280}
//       height={280}
//     />
//   </div>
//   <div>
//     <h4></h4>
//     <p>
//       <span></span>
//       <span></span>
//     </p>{' '}
//     <div className="star">
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <span>()</span>
//     </div>
//   </div>
// </div>
// <div className="cart relative flex-shrink-0">
//   <div className="relative h-fit bg-gray-300">
//     <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
//       -30%
//     </p>
//     <div className="absolute top-2 right-2">
//       <button className="block p-1 bg-white rounded-full mb-1">
//         <HiOutlineHeart />
//       </button>
//       <button className="p-1 bg-white rounded-full">
//         <HiOutlineEye />
//       </button>
//     </div>
//     <button className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
//       Add To Cart
//     </button>
//     <Image
//       src="/phone.png"
//       alt=""
//       className="object-none"
//       width={280}
//       height={280}
//     />
//   </div>
//   <div>
//     <h4></h4>
//     <p>
//       <span></span>
//       <span></span>
//     </p>
//     <div className="star">
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <span>()</span>
//     </div>
//   </div>
// </div>
// <div className="cart relative flex-shrink-0">
//   <div className="relative h-fit bg-gray-300">
//     <p className="absolute top-2 left-2 text-xs bg-primary-700 px-2 py-1 rounded text-white">
//       -30%
//     </p>
//     <div className="absolute top-2 right-2">
//       <button className="block p-1 bg-white rounded-full mb-1">
//         <HiOutlineHeart />
//       </button>
//       <button className="p-1 bg-white rounded-full">
//         <HiOutlineEye />
//       </button>
//     </div>
//     <button className="absolute bottom-0 left-0 w-full bg-black text-white text-center p-2">
//       Add To Cart
//     </button>
//     <Image
//       src="/phone.png"
//       alt=""
//       className="object-none"
//       width={280}
//       height={280}
//     />
//   </div>
//   <div>
//     <h4></h4>
//     <p>
//       <span></span>
//       <span></span>
//     </p>
//     <div className="star">
//       <ul>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//         <li></li>
//       </ul>
//       <span>()</span>
//     </div>
//   </div>
// </div>
