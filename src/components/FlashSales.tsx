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
