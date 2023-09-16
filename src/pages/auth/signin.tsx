import AuthLayout from '@/components/Layouts/AuthLayout';
import { Button, Card, Input, Typography } from '@material-tailwind/react';
import Link from 'next/link';
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi';

const SignIn = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Card color="transparent" shadow={false}>
      <Link href="/">
          <FiArrowLeft className="w-6 h-6 mb-12"/>
      </Link>
      <Typography variant="h4" color="blue-gray">
        Sign In
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to Masuk.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Link href="/auth/lupa-password">Lupa Password ?</Link>
        <Button className="mt-6" fullWidth>
          Masuk
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <Link href="/auth/signup" className="font-medium text-gray-900">
            Sign Up
          </Link>
        </Typography>
      </form>
    </Card>
    </div>
  )
}

SignIn.getLayout = (page: any) => {
  return <AuthLayout>{page}</AuthLayout>;
};
export default SignIn