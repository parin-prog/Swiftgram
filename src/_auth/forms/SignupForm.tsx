import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { SignupFormSchema } from '@/lib/validation'
import Loader from '@/components/ui/shared/Loader'
import { Link } from 'react-router-dom'

const SignupForm = () => {
  let isLoading = true;

  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupFormSchema>>({
    resolver: zodResolver(SignupFormSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="mt-9">
      <Form {...form}>

        <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="logo" />
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Create a new
            account</h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>
            To use Swiftgram, please enter your account details</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)}
          className="flex-col gap-5 w-full mt-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input type="text" className='shad-input'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" className='shad-input'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className='shad-input'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className='shad-input'
                    {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit"
            className='shad-button_primary mx-auto my-6 w-full'>Submit</Button>
          <p className='text-small-regular text-light-2 text-center mt-2'>
            Already have an account ?
            <Link to="/sign-in" className='text-primary-500
               text-small-semibold ml-1'>Log in</Link>
          </p>
          {isLoading ? (
            <div className='flex-center gap-2'>
              <Loader />
            </div>
          ) : "Sign up"}
        </form>
      </Form>
    </div>
  )
}

export default SignupForm