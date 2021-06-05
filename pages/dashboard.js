import axios from "@/lib/axios";
import NextLink from "next/link";
import absoluteUrl from 'next-absolute-url'

import EducationTable from "@/components/EducationTable";
import ExperienceTable from "@/components/ExperienceTable";

export default function Dashboard({ profile }) {
  const { experience, education } = profile;
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 space-y-8 bg-gray-50 sm:px-6 lg:px-8">
      <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Dashboard
      </h2>
      <NextLink href="/update-profile">
        <a className="px-5 py-2 font-medium text-white transition duration-300 bg-purple-700 border border-purple-500 rounded select-none hover:bg-white focus:outline-none focus-within:ring ring-purple-600 hover:text-purple-500">
          Edit Profile
        </a>
      </NextLink>
      <ExperienceTable experience={experience} />
      <EducationTable education={education} />
    </div>
  );
}

export async function getServerSideProps({ req }) {
  try {
    const { origin } = absoluteUrl(req)
    const { data } = await axios({
      method: "get",
      url: `${origin}/api/profile/me`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { profile: data },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
}
