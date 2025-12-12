import * as z from 'zod'

export const userLoginSchema = z.object({
    email: z.email(),
    password: z.string()
})