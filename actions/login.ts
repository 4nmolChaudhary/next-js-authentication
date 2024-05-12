'use server'

import * as z from 'zod'
import { login } from '@/schemas'

export const loginAction = async (values: z.infer<typeof login>) => {
  if (values.email !== 'john@email.com' || values.password !== '1234') return { success: false, message: 'Email/Password is incorrect !' }
  console.log(values)
  return { success: true, message: 'Logged in successfully' }
}
