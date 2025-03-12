import Image from 'next/image';
import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
import Button from '@/components/Button';

import { shoppingCart } from './data';

function Cart() {
  const totalPrice = shoppingCart.reduce(
    (acc, cur) => acc + cur.salary * cur.quantity,
    0
  );

  return (
    <>
      <Breadcrumb pageName="Cart" />

      <section>
        <div className="container">
          <div
            role="header"
            className="grid grid-cols-[2fr_1.2fr_1.4fr_1.2fr] items-center shadow-small py-4 px-3 mb-6 gap-2 text-sm sm:px-6 sm:text-base"
          >
            <div>Product</div>
            <div>Price</div>
            <div className="justify-self-center">Quantity</div>
            <div className="justify-self-end">Subtotal</div>
          </div>

          <div className="mb-6 flex flex-col gap-6">
            {shoppingCart.map((sh) => (
              <div
                key={sh.id}
                role="section"
                className="grid grid-cols-[2fr_1.2fr_1.4fr_1.2fr] items-center shadow-small py-6 px-3 gap-2 text-sm sm:px-6 sm:text-base"
              >
                <div className="flex flex-col items-center justify-self-start gap-y-1 gap-x-3 md:gap-x-5 sm:flex-row">
                  <Image
                    src={`/flashSales/${sh.image}`}
                    // className=""
                    alt={sh.title}
                    width={36}
                    height={36}
                  />
                  <p>{sh.title}</p>
                </div>
                <div>${sh.salary}</div>
                <input
                  className="justify-self-center w-16 p-2"
                  type="number"
                  value={sh.quantity}
                />
                <div className="justify-self-end">
                  ${sh.salary * sh.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
            <Link
              href="/"
              className="text-sm font-medium px-3 py-3 border-2 border-gray-400 sm:text-base sm:px-8 sm:py-4"
            >
              Return To Shop
            </Link>
            <Link
              href="/"
              className="text-sm font-medium px-3 py-3 border-2 border-gray-400 sm:text-base sm:px-8 sm:py-4"
            >
              Update Cart
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container flex flex-wrap gap-y-8 items-start justify-between">
          <div className="justify-center flex gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Coupon Code"
              className="text-sm px-6 py-3 grow border-2 border-gray-500 rounded-md"
            />
            <Button type="primary">Apply Coupon</Button>
          </div>

          <div className="w-full md:w-2/5 border-2 border-gray-500 py-6 px-4">
            <h4 className="text-lg font-medium font-[Poppins] mb-6">
              Cart Total
            </h4>
            <div className="flex flex-col gap-3 mb-8">
              <div className="flex justify-between items-center">
                <span>Suptotal:</span>
                <span>${totalPrice}</span>
              </div>
              <hr className="h-[1.5px] bg-gray-400" />
              <div className="flex justify-between items-center">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr className="h-[1.5px] bg-gray-400" />
              <div className="flex justify-between items-center">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
            </div>
            <div className="text-center">
              <Button type="primary">Process to checkout</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
