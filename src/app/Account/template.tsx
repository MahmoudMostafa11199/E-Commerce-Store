import Link from 'next/link';

import Breadcrumb from '@/components/Breadcrumb';
// import Button from '@/components/Button';

function template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Breadcrumb pageName="My Account" />

      <section className="pb-28">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4 shadow-lg px-10 py-8">
              <ul className="space-y-8">
                <li>
                  <h4 className="mb-4">Manage My Account</h4>
                  <ul className="ps-4 space-y-2 text-gray-400">
                    <li>
                      <Link
                        href="/Account/Profile"
                        className="hover:text-primary-600 focus:text-primary-600"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Account/Address-Book"
                        className="hover:text-primary-600 focus:text-primary-600"
                      >
                        Address Book
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Account/Payment"
                        className="hover:text-primary-600 focus:text-primary-600"
                      >
                        My Payment Options
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <h4 className="mb-4">My Orders</h4>
                  <ul className="ps-4 space-y-2 text-gray-400">
                    <li>
                      <Link
                        href="/Account/Order-Return"
                        className="hover:text-primary-600 focus:text-primary-600"
                      >
                        My Returns
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Account/Order-Cancel"
                        className="hover:text-primary-600 focus:text-primary-600"
                      >
                        My Cancellations
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>My Wishlist</li>
              </ul>
            </div>

            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default template;
