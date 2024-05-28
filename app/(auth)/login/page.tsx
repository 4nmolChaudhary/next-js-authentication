'use client'
import TextInput from '@/components/form/text-input'
import { login } from '@/schemas'
import { loginAction } from '@/actions/login'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(login),
    defaultValues: { email: '', password: '' },
  })
  const onSubmit = async (d: { email: string; password: string }) => {
    const res = await loginAction(d)
    console.log(res)
  }
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold tracking-tight'>🔐</h1>
      <h1 className='text-2xl font-semibold '>Welcome back</h1>
      <p className='text-sm text-muted-foreground mb-4'>Enter your email to sign in to your account</p>
      <div className='grid gap-2 w-1/4'>
        <form className='w-full' onSubmit={handleSubmit(onSubmit)}>
          <TextInput error={errors.email} {...register('email')} autoComplete='off' id='email' placeholder='name@example.com' label='Email' />
          <TextInput error={errors.password} {...register('password')} autoComplete='off' id='password' type='password' placeholder='******' label='Password' />
          <button className='w-full mt-2 inline-flex items-center justify-center text-sm font-bold bg-black text-white h-10 py-2 px-4 disabled:opacity-50'>SIGN IN</button>
        </form>
        <div className='w-full text-center text-sm'>OR</div>
        <button onClick={() => signIn('github')} className='w-full mt-2 inline-flex items-center justify-center text-sm font-bold bg-black text-white h-10 py-2 px-4 disabled:opacity-50'>
          SIGN IN WITH GITHUB
        </button>
      </div>
    </div>
  )
}
