import { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range';
import { useForm } from "react-hook-form";
import { isEqual, format } from 'date-fns'
import { useToasts } from 'react-toast-notifications'

import axios from "@/lib/axios";

export default function AddExperience() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { addToast, removeAllToasts } = useToasts()
    const [showDatePicker, setShowDatePicker] = useState(false)
    const intialDateState = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    const [state, setState] = useState([intialDateState]);

    useEffect(() => {
        const { startDate, endDate } = state[0]
        if ((startDate && endDate && !isEqual(startDate, endDate))) setShowDatePicker(!showDatePicker)
    }, [state])

    const toggleDatePicker = (e) => {
        setShowDatePicker(!showDatePicker)
    }
    const { startDate, endDate } = state[0]

    const onSubmit = async ({ duration, ...formData }, e) => {
        const experienceData = { ...formData, from: startDate, to: endDate }
        try {
            await axios.post('/profile/experience', experienceData)
            removeAllToasts()
            addToast('Experience added', { appearance: 'success', autoDismiss: true })
            setState([intialDateState])
            reset()
        } catch (error) {
            removeAllToasts()
            addToast(error.response.data, { appearance: 'error', autoDismiss: true })
        }
    }

    const getDurationLabel = () => (startDate && endDate && !isEqual(startDate, endDate))
        ? `${format(new Date(startDate), 'yyyy/MM/dd')} - ${format(new Date(endDate), 'yyyy/MM/dd')}`
        : 'Select time period'

    return (
        <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
            { showDatePicker && <div className="absolute inset-0 z-10" onClick={toggleDatePicker} />}
            <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
                <div>
                    <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
                        Add Experience
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-2 rounded-md shadow-sm">
                        <div className="relative">
                            <input
                                className={`block text-center cursor-pointer w-full px-3 py-2 ${getDurationLabel() === 'Select time period' ? 'text-gray-500' : 'text-gray-900'} border ${errors?.duration && getDurationLabel() === 'Select time period' ? 'border-red-300' : 'border-gray-300'} rounded focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                type="text"
                                name="duration"
                                {...register('duration', { validate: () => getDurationLabel() !== 'Select time period' })}
                                onClick={toggleDatePicker}
                                value={getDurationLabel()}
                                onChange={getDurationLabel}
                            />
                            {
                                showDatePicker && (
                                    <div className={`absolute inset-x-0 top-[36px] z-20 border border-gray-200 shadow`}>
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
                        <div>
                            <label htmlFor="title" className="sr-only">Job Title</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.title ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="title"
                                name="title"
                                type="text"
                                autoComplete="off"
                                {...register('title', { required: true })}
                                placeholder="Job Title"
                            />
                        </div>
                        <div>
                            <label htmlFor="company" className="sr-only">Company</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.company ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="company"
                                name="company"
                                type="text"
                                autoComplete="off"
                                {...register('company', { required: true })}
                                placeholder="Company"
                            />
                        </div>
                        <div>
                            <label htmlFor="location" className="sr-only">Location</label>
                            <input
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.location ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="location"
                                name="location"
                                type="text"
                                autoComplete="off"
                                {...register('location')}
                                placeholder="Location"
                            />
                        </div>
                        <div>
                            <label htmlFor="description" className="sr-only">Job Description</label>
                            <textarea
                                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${errors?.description ? 'border-red-300' : 'border-gray-300'} rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                                id="description"
                                name="description"
                                autoComplete="off"
                                {...register('description')}
                                placeholder="Job Description"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                className="w-4 h-4 text-purple-600 border-gray-300 rounded cursor-pointer focus:ring-purple-500"
                                id="current"
                                name="current"
                                type="checkbox"
                                {...register('current')}
                            />
                            <label htmlFor="current" className="block ml-2 text-xs text-gray-900 cursor-pointer select-none sm:text-sm">
                                Current Job
                            </label>
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
