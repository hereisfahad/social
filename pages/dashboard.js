import axios from "@/lib/axios";
import EducationTable from "@/components/EducationTable";
import ExperienceTable from "@/components/ExperienceTable";

export default function Dashboard({ profile }) {
  const { experience, education } = profile
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 space-y-8 bg-gray-50 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Dashboard
      </h2>
      <ExperienceTable experience={experience} />
      <EducationTable education={education} />
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  try {
    const { data } = await axios({
      method: 'get',
      url: '/profile/me',
      headers: {
        cookie: req.headers.cookie
      }
    })
    return {
      props: { profile: data }
    }
  } catch (error) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
  }
  return { props: {} }
}
