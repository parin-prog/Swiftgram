import * as z from "zod"

export const SignupFormSchema = z.object({
	name: z.string().min(2, 'Too short name').max(50),
	username: z.string().min(2, "Make a valid username").max(50),
	email: z.string().email(),
  	password: z.string().min(8, { message: "Password must be at least 8 characters." }),
      })