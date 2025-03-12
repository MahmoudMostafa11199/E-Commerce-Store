import Link from 'next/link';

import Button from '@/components/Button';

function LogIn() {
  return (
    <>
      <h3 className="text-3xl font-medium mb-4 tracking-wide">
        Log in to Exclusive
      </h3>
      <p className="mb-10">Enter your details below</p>
      <form className="flex flex-col gap-8">
        <input
          className="w-full border-b-2 border-gray-300 focus:outline-none"
          type="text"
          placeholder="Email or Phone Number"
          required
        />
        <input
          className="w-full border-b-2 border-gray-300 focus:outline-none"
          type="password"
          placeholder="Password"
          required
        />
        <div className="flex justify-between items-center">
          <Button type="primary">Log in</Button>
          <Link href="/Log-In" className="text-red-500">
            Forget Password?
          </Link>
        </div>
      </form>
    </>
  );
}

export default LogIn;
