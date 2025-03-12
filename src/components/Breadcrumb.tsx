import Link from 'next/link';

function Breadcrumb({ pageName }: { pageName: string }) {
  return (
    <div className="container mb-12 space-x-3 text-sm py-10">
      <Link
        href="/"
        className="text-gray-400 transition-all hover:text-gray-600"
      >
        Home
      </Link>
      <span>/</span>
      <span>{pageName}</span>
    </div>
  );
}

export default Breadcrumb;
