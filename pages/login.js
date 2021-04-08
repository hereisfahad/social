import Link from 'next/link'

function login() {
    return (
        <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Sign in
                </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autoComplete="email" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input id="password" name="password" type="password" autoComplete="current-password" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Password" />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer focus:ring-purple-500" />
                            <label htmlFor="remember_me" className="block ml-2 text-xs text-gray-900 cursor-pointer select-none sm:text-sm">
                                Remember me
                        </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-purple-600 select-none hover:text-purple-500">
                                Forgot your password?
                        </a>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Sign in
                        </button>
                        <Link href="/register">
                            <a className="inline-block mt-2 font-medium text-purple-600">
                                Don't have an account?
                            </a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default login
