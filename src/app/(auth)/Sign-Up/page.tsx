import Link from 'next/link';
import { Icon } from '@iconify/react';

import Button from '@/components/Button';

function SignUp() {
  return (
    <>
      <h3 className="text-3xl font-medium mb-4 tracking-wide">
        Create an account
      </h3>
      <p className="mb-10">Enter your details below</p>
      <form className="flex flex-col gap-8">
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
          type="text"
          placeholder="Name"
          required
        />
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
          type="text"
          placeholder="Email or Phone Number"
          required
        />
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none"
          type="password"
          placeholder="Password"
          required
        />
        <Button type="primary">Create Account</Button>
        <Button type="tertiary">
          <Icon
            icon="flat-color-icons:google"
            className="inline-block me-3"
            width="28"
            height="28"
          />
          <span>Sign up with Google</span>
        </Button>

        <p className="text-center space-x-4">
          <span className="text-sm text-gray-600">Already have account?</span>
          <Link href="/Log-In" className="border-b-2 border-gray-400 pb-1">
            Log In
          </Link>
        </p>
      </form>{' '}
    </>
  );
}

export default SignUp;
