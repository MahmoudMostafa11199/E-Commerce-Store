import Link from 'next/link';

import Breadcrumb from '../components/Breadcrumb';

function NotFound() {
  return (
    <section className="px-6 pt-14 pb-24">
      <div className="container">
        <Breadcrumb pageName="404 Error" />
        <div className="text-center">
          <h1 className="mt-4 mb-6 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            404 Not found
          </h1>
          <p className="mb-16 text-sm font-medium">
            Your visit page not found. You may go home page.
          </p>
          <div>
            <Link
              href="/"
              className="rounded-md bg-primary-600 px-8 py-3 text-sm text-white shadow-xs transition-all hover:bg-primary-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
