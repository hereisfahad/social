import Image from 'next/image'

import Tag from '@/components/Tag'

export default function ProfileDetail() {
    return (
        <div className="flex flex-col items-center justify-center flex-1 p-4 space-y-8 bg-gray-50 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center space-y-2 bg-gray-50 sm:px-6 lg:px-8">
                <Image
                    className="rounded-full"
                    src="http://www.gravatar.com/avatar/e7e0756ace3878e35aaa6cfc9dbcef50?s=200&d=mm&r=pg"
                    alt="Picture of the author"
                    width={100}
                    height={100}
                />
                <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                    Dummy Name
                </h2>
                <p className="text-2xl text-gray-800">Lorem ipsum lorem lorem</p>
                <p className="text-gray-800">Location</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 bg-gray-50 sm:px-6 lg:px-8">
                <p className="text-2xl text-gray-800">Bio: Lorem ipsum lorem lorem</p>
                <div className="flex flex-wrap items-center justify-center">
                    <Tag>HTML</Tag>
                    <Tag>CSS</Tag>
                    <Tag>JS</Tag>
                </div>
            </div>
            <div className="grid items-center justify-center flex-1 grid-cols-1 gap-2 md:grid-cols-2 bg-gray-50 sm:px-6 lg:px-8">
                <div className="p-8 border border-gray-300 rounded">
                    <h3 className="mb-3 text-2xl font-medium text-purple-600">
                        Experience
                    </h3>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <h4 className="font-semibold text-gray-900">Whatever company name</h4>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Duration</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Position</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Description</span>
                            <p className="text-gray-600">Lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <h4 className="font-semibold text-gray-900">Whatever company name</h4>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Duration</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Position</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Description</span>
                            <p className="text-gray-600">Lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                </div>

                <div className="p-8 border border-gray-300 rounded">
                    <h3 className="mb-3 text-2xl font-medium text-purple-600">
                        Education
                    </h3>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <h4 className="font-semibold text-gray-900">Whatever school name</h4>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Duration</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Degree</span>
                            <p className="text-gray-600">Student</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Description</span>
                            <p className="text-gray-600">Lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <h4 className="font-semibold text-gray-900">Whatever school name</h4>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Duration</span>
                            <p className="text-gray-600">2 years</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Position</span>
                            <p className="text-gray-600">Student</p>
                        </div>
                        <div className="flex space-x-2">
                            <span className="font-semibold text-gray-900">Description</span>
                            <p className="text-gray-600">Lorem ipsum lorem ipsum</p>
                        </div>
                    </div>
                </div>

                <div className="w-full p-8 border border-gray-300 rounded md:col-span-2">
                    <h3 className="mb-3 text-2xl font-medium text-purple-600">
                        Github Repos
                    </h3>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-semibold text-gray-900">Cool-Project</span>
                                <p className="text-gray-600">Description</p>
                                <a className="text-blue-500" href="#">Visit</a>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">5 Stars</span>
                                <p className="text-gray-600">2 Forks</p>
                                <p className="text-gray-600">2 watchers</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 space-y-3 border-t border-gray-300">
                        <div className="flex justify-between">
                            <div>
                                <span className="font-semibold text-gray-900">Cool-Project</span>
                                <p className="text-gray-600">Description</p>
                                <a className="text-blue-500" href="#">Visit</a>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-900">5 Stars</span>
                                <p className="text-gray-600">2 Forks</p>
                                <p className="text-gray-600">2 watchers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
