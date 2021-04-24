import { useState } from 'react'
import Link from 'next/link'
import { formatDistanceStrict } from 'date-fns'

import axios from "@/lib/axios"

function ExperienceTable({ experience }) {
    const [experienceDetail, setExperienceDetail] = useState(() => experience || [])

    const deleteExperience = async (experienceId) => {
        const deleteEntry = window.confirm('Are you sure you wanna delete this entry?')
        if (!deleteEntry) return
        try {
            await axios.delete(`/profile/experience/${experienceId}`)
            setExperienceDetail([...experienceDetail.filter(({ _id }) => _id !== experienceId)])
        } catch (error) {
            removeAllToasts()
            addToast('Delete operation failed', { appearance: 'error', autoDismiss: true })
        }
    }

    return (
        <div className="py-4 pr-10 overflow-x-auto bg-white border border-gray-300 rounded shadow min-w-[45rem] shadow-dashboard justify-evenly sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="flex items-baseline justify-between py-4">
                <h1 className="text-3xl">Experience</h1>
                <Link href="/add-experience">
                    <a className="px-5 py-2 font-medium text-white transition duration-300 bg-purple-700 border border-purple-500 rounded select-none hover:bg-white focus:outline-none focus-within:ring ring-purple-600 hover:text-purple-500">
                        Add Experience
                    </a>
                </Link>
            </div>
            <div className="inline-block min-w-full overflow-hidden align-middle">
                {
                    experienceDetail.length === 0 ? <p className="font-semibold text-center">No Entry found</p> :
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">Company</th>
                                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">Title</th>
                                    <th className="px-6 py-3 text-sm leading-4 tracking-wider text-left text-blue-500 border-b-2 border-gray-300">Duration</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300" />
                                </tr>
                            </thead>
                            <tbody className="">
                                {
                                    experienceDetail.map(({ _id, company, title, from, to }) => (
                                        <tr key={_id}>
                                            <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{company}</td>
                                            <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{title}</td>
                                            <td className="px-6 py-4 text-sm leading-5 text-blue-900 whitespace-no-wrap border-b-2 border-gray-100">{formatDistanceStrict(new Date(from), new Date(to))}</td>
                                            <td className="px-6 py-4 text-sm leading-5 text-right whitespace-no-wrap border-b-2 border-gray-100">
                                                <button onClick={() => deleteExperience(_id)} className="px-5 py-2 text-red-500 transition duration-300 border border-red-500 rounded hover:bg-red-700 hover:text-white focus:outline-none focus-within:ring ring-red-600">
                                                    Delete
                                        </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div >
    )
}
export default ExperienceTable
