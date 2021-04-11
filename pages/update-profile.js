function UpdateProfile() {
    return (
        <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
            <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Edit Profile
                </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div>
                            <label htmlFor="status" className="sr-only">Professional Status</label>
                            <select
                                id="status"
                                name="status"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                            >
                                <option>Select Employement Status</option>
                                <option>Employed</option>
                                <option>Looking for break</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="company" className="sr-only">Company</label>
                            <input
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="company"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Company"
                            />
                        </div>
                        <div>
                            <label htmlFor="website" className="sr-only">Website</label>
                            <input
                                id="website"
                                name="website"
                                type="url"
                                autoComplete="website"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Website"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="sr-only">Location</label>
                            <input
                                id="location"
                                name="location"
                                type="text"
                                autoComplete="location"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Location"
                            />
                        </div>
                        <div>
                            <label htmlFor="skills" className="sr-only">Skills</label>
                            <input
                                id="skills"
                                name="skills"
                                type="text"
                                autoComplete="skills"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Skills"
                            />
                        </div>
                        <div>
                            <label htmlFor="githubUsername" className="sr-only">Github Username</label>
                            <input
                                id="githubUsername"
                                name="githubUsername"
                                type="text"
                                autoComplete="githubUsername"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Github Username"
                            />
                        </div>
                        <div>
                            <label htmlFor="bio" className="sr-only">Bio</label>
                            <input
                                id="bio"
                                name="bio"
                                type="text"
                                autoComplete="bio"
                                required
                                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                placeholder="Bio"
                            />
                        </div>
                        <div>
                            <label htmlFor="social" className="">Add Social Profiles</label>
                            <div className="flex flex-col h-24 space-y-2 overflow-y-scroll">
                                <input
                                    id="twitter"
                                    name="twitter"
                                    type="url"
                                    autoComplete="twitter"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Twitter"
                                />
                                <input
                                    id="facebook"
                                    name="facebook"
                                    type="url"
                                    autoComplete="facebook"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Facebook"
                                />
                                <input
                                    id="linkedin"
                                    name="linkedin"
                                    type="url"
                                    autoComplete="linkedin"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Linkedin"
                                />
                                <input
                                    id="instagram"
                                    name="instagram"
                                    type="url"
                                    autoComplete="instagram"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Instagram"
                                />
                                <input
                                    id="youtube"
                                    name="youtube"
                                    type="url"
                                    autoComplete="youtube"
                                    required
                                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                                    placeholder="Youtube"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default UpdateProfile
