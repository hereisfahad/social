import Link from 'next/link'
import { useAuth } from '@/lib/auth'

const NavLink = ({ href, children, className }) => {
    return (
        <Link href={href}>
            <a className={`hover:text-purple-300 focus:outline-none focus-within:ring rounded px-1 ring-purple-600 ${className}`}>
                {children}
            </a>
        </Link>
    )
}

function Navbar() {
    const { user, signout } = useAuth()
    return (
        <div className="flex flex-col items-center px-6 py-4 text-white bg-purple-500 sm:flex-row sm:justify-between">
            <NavLink href="/" className="mb-3 sm:mb-0">DevConnector</NavLink>
            <ul className="flex space-x-4">
                <li><NavLink href="/profiles">Developers</NavLink></li>
                {!user?._id && <li><NavLink href="/register">Register</NavLink></li>}
                {
                    user?._id ? (
                        <li>
                            <button onClick={signout}>Signout</button>
                        </li>
                    ) :
                        <li><NavLink href="/login">Login</NavLink></li>
                }
            </ul>
        </div>
    )
}

export default Navbar
