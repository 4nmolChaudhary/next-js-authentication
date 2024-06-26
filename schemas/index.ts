import * as z from 'zod'

export const login = z.object({
  email: z.string().email({ message: 'Enter a valid email !' }),
  password: z.string().min(1, { message: 'Password is required !' }),
})
