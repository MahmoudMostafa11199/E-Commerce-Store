'use client';

import { useRef } from 'react';
import { sellingProducts } from '@/app/data';
import Card from '@/components/Card';

function SellingProducts() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex gap-7 overflow-hidden" ref={containerRef}>
      {sellingProducts.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          image={product.img}
          price={product.price}
          sale={product.sale}
          ratingCount={product.ratingCount}
          ratings={product.ratings}
          showSale={false}
        />
      ))}
    </div>
  );
}

export default SellingProducts;
