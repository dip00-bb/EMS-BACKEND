import * as z from 'zod'

export const departmentSchema = z.object({
    departmentName: z.string(),
    depertmentDescription: z.string()
})