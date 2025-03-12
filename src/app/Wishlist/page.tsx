import SellingProducts from '@/components/SellingProducts';
import Button from '@/components/Button';

function Wishlist() {
  return (
    <>
      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-14">
            <h2 className="text-xl">Wishlist (4)</h2>
            <Button type="tertiary">Move All Bag</Button>
          </div>
          <SellingProducts />
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="flex justify-between items-center mb-14">
            <h2 className="subHeading mb-0 text-black text-xl">Just For You</h2>
            <Button type="tertiary">See All</Button>
          </div>
          <SellingProducts />
        </div>
      </section>
    </>
  );
}

export default Wishlist;
