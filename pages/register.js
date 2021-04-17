import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { useToasts } from 'react-toast-notifications'

import { useAuth } from '@/lib/auth'

function register() {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { addToast, removeAllToasts } = useToasts()
    const { signup, user } = useAuth()
    if (user?._id) router.replace('/')
    const onSubmit = async userData => {
        const data = await signup(userData)
        if (data?.errors) {
            removeAllToasts()
            addToast(data.errors[0].msg, { appearance: 'error', autoDismiss: true })
        }
    }

    return (
        <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Sign Up
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.name ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="name"
                                name="name"
                                type="text"
                                {...register('name', { required: true })}
                                autoComplete="name"
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.email ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="email-address"
                                name="email-address"
                                type="email"
                                {...register('email', { required: true })}
                                autoComplete="email"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.password ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                {...register('password', { required: true })}
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Register
                        </button>
                        <Link href="/login">
                            <a className="inline-block mt-2 font-medium text-purple-600">
                                Already have an account?
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default register
