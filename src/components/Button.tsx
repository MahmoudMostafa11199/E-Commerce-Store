import { ReactNode } from 'react';
import Link from 'next/link';

function Button({ type, children }: { type: string; children: ReactNode }) {
  return (
    <Link
      href="/Cart"
      className={`text-white text-center px-8 py-3 inline-block rounded transition-all 
        ${
          type === 'primary'
            ? 'bg-primary-700 hover:bg-primary-600'
            : type === 'tertiary'
            ? 'bg-white hover:bg-gray-50 text-black border-2 border-gray-300'
            : 'bg-secondary-700 hover:bg-secondary-600'
        }
      `}
    >
      {children}
    </Link>
  );
}

export default Button;
