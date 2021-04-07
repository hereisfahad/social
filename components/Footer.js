import Link from "next/link";

function Footer() {
    return (
        <footer className="pb-4 text-center">
            <Link href="/"><a className="px-1 font-semibold text-gray-700 rounded hover:text-purple-500 focus:outline-none focus-within:ring ring-purple-600">Home</a></Link>
        </footer>
    )
}

export default Footer
