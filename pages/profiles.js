import ProfileCard from "@/components/ProfileCard";

function profiles() {
    return (
        <div className="flex flex-col items-center flex-1 px-4 py-10 sm:p-8">
            <h2 className="text-3xl font-bold text-gray-900">Developers</h2>
            <p className="font-semibold text-gray-700">Browse and connect with Developers</p>
            <div className="grid grid-cols-1 gap-6 mt-8">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
        </div>
    )
}

export default profiles
