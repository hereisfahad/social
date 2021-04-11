import EducationTable from "@/components/EducationTable";
import ExperienceTable from "@/components/ExperienceTable";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 space-y-8 bg-gray-50 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Dashboard
          </h2>
      <ExperienceTable />
      <EducationTable />
    </div>
  )
}
