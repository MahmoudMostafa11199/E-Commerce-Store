import ProductCard from './ProductCard';
import { products } from '@/app/data';

function Products() {
  return (
    <div className="flex flex-wrap gap-6 gap-y-14">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.img}
          price={product.price}
          color={product.color}
          ratingCount={product.ratingCount}
          ratings={product.ratings}
          isNew={product.isNew}
        />
      ))}
    </div>
  );
}

export default Products;
