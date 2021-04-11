import { DateRange } from 'react-date-range';
import { useState } from 'react'

export default function AddExperience() {
    const [showDatePicker, setShowDatePicker] = useState(false)
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const toggleDatePicker = (e) => {
        setShowDatePicker(!showDatePicker)
    }

    return (
        <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
            { showDatePicker && <div className="absolute inset-0 z-10" onClick={toggleDatePicker} />}
            <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Add Education
                    </h2>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div className="relative">
                            <button type="button" onClick={toggleDatePicker} className="block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm">Select time period</button>
                            {
                                showDatePicker && (
                                    <div className="absolute inset-x-0 top-[36px] z-20 border border-gray-200 shadow">
                                        <DateRange
                                            className="w-full h-full"
                                            maxDate={new Date()}
                                            editableDateInputs={true}
                                            onChange={item => setState([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={state}
                                        />
                                    </div>
                                )
                            }
                        </div>
                        <div className="flex items-center">
                            <input id="current" name="current" type="checkbox" className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer focus:ring-purple-500" />
                            <label htmlFor="current" className="block ml-2 text-xs text-gray-900 cursor-pointer select-none sm:text-sm">
                                Current school
                            </label>
                        </div>
                        <div>
                            <label htmlFor="school" className="sr-only">School or Bootcamp</label>
                            <input id="school" name="school" type="text" autoComplete="off" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="School or Bootcamp" />
                        </div>
                        <div>
                            <label htmlFor="degree" className="sr-only">Degree or Certificate</label>
                            <input id="degree" name="degree" type="text" autoComplete="off" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Degree or Certificate" />
                        </div>
                        <div>
                            <label htmlFor="fieldofstudy" className="sr-only">Field of study</label>
                            <input id="fieldofstudy" name="fieldofstudy" type="text" autoComplete="off" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Field of study" />
                        </div>
                        <div>
                            <label htmlFor="description" className="sr-only">Program Description</label>
                            <textarea id="description" name="description" autoComplete="off" required className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm" placeholder="Program Description" />
                        </div>
                    </div>

                    <div>
                        <button type="submit" className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Add
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
