import Link from 'next/link'
import { formatDistanceStrict } from 'date-fns'

function EducationTable({ education }) {
    return (
        <div className="max-w-screen-md py-4 pr-10 overflow-x-auto bg-white border border-gray-300 rounded shadow shadow-dashboard justify-evenly sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex items-baseline justify-between py-4">
                <h1 className="text-3xl">Education</h1>
                <Link href="/add-education">
                    <a className="px-5 py-2 font-medium text-white transition duration-300 bg-purple-700 border border-purple-500 rounded select-none hover:bg-white focus:outline-none focus-within:ring ring-purple-600 hover:text-purple-500">
                        Add Education
                    </a>
                </Link>
            </div>
            <div className="inline-block min-w-full overflow-hidden align-middle">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">School</th>
                            <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">Degree</th>
                            <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">Duration</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300" />
                            <th className="px-6 py-3 border-b-2 border-gray-300" />
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            education && education.map(({ _id, school, degree, from, to }) => (
                                <tr key={_id}>
                                    <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{school}</td>
                                    <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{degree}</td>
                                    <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{formatDistanceStrict(new Date(from), new Date(to))}</td>
                                    <td className="px-6 py-4 text-sm leading-5 text-right whitespace-no-wrap border-b-2 border-gray-100">
                                        <button className="px-5 py-2 text-blue-500 transition duration-300 border border-blue-500 rounded hover:bg-blue-700 hover:text-white focus:outline-none focus-within:ring ring-blue-600">View</button>
                                    </td>
                                    <td className="px-6 py-4 text-sm leading-5 text-right whitespace-no-wrap border-b-2 border-gray-100">
                                        <button className="px-5 py-2 text-red-500 transition duration-300 border border-red-500 rounded hover:bg-red-700 hover:text-white focus:outline-none focus-within:ring ring-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}
export default EducationTable
