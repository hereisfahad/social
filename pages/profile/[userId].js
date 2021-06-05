import axios from "@/lib/axios";
import Image from "next/image";

import Tag from "@/components/Tag";

export default function ProfileDetail({ profile, repos }) {
  console.log(profile);
  console.log(repos);
  const { user, skills, experience, education } = profile;
  return (
    <div className="flex flex-col items-center justify-center flex-1 p-4 space-y-8 bg-gray-50 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center space-y-2 bg-gray-50 sm:px-6 lg:px-8">
        <Image
          className="rounded-full"
          src={`https:${user.avatar}`}
          alt="Picture of the author"
          width={100}
          height={100}
        />
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          {user.name}
        </h2>
        <p className="text-2xl text-gray-800">Bio: Lorem ipsum lorem lorem</p>
        <p className="text-gray-800">Location N/A</p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-2 bg-gray-50 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
      </div>
      <div className="grid items-start justify-center flex-1 grid-cols-1 gap-2 md:grid-cols-2 bg-gray-50 sm:px-6 lg:px-8">
        <div className="p-8 border border-gray-300 rounded">
          <h3 className="mb-3 text-2xl font-medium text-purple-600">
            Experience
          </h3>
          {experience.map((exp) => (
            <div
              key={exp._id}
              className="flex flex-col p-2 space-y-3 border-t border-gray-300"
            >
              <h4 className="font-semibold text-gray-900">{exp.company}</h4>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Duration</span>
                <p className="text-gray-600">2 years</p>
              </div>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Position</span>
                <p className="text-gray-600">{exp.title}</p>
              </div>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Description</span>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 border border-gray-300 rounded">
          <h3 className="mb-3 text-2xl font-medium text-purple-600">
            Education
          </h3>
          {education.map((edu) => (
            <div
              key={edu._id}
              className="flex flex-col p-2 space-y-3 border-t border-gray-300"
            >
              <h4 className="font-semibold text-gray-900">{edu.school}</h4>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Duration</span>
                <p className="text-gray-600">2 years</p>
              </div>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Degree</span>
                <p className="text-gray-600">{edu.degree}</p>
              </div>
              <div className="flex space-x-2">
                <span className="font-semibold text-gray-900">Description</span>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

        {repos && repos.length > 0 && (
          <div className="w-full p-8 border border-gray-300 rounded md:col-span-2">
            <h3 className="mb-3 text-2xl font-medium text-purple-600">
              Github Repos
            </h3>
            {repos.map(({ clone_url, name, description, forks, watchers }) => (
              <div
                key={clone_url}
                className="flex flex-col p-2 space-y-3 border-t border-gray-300"
              >
                <div className="flex justify-between">
                  <div>
                    <span className="font-semibold text-gray-900">{name}</span>
                    <p className="text-gray-600">
                      {description ? description : "Description N/A"}
                    </p>
                    <a className="text-blue-500" href={clone_url} target="_blank">
                      Visit
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">
                      Stars N/A
                    </span>
                    <p className="text-gray-600">{`${forks} Forks`}</p>
                    <p className="text-gray-600">{`${watchers} Watchers`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ req, res, params }) {
  try {
    const { data } = await axios({
      method: "get",
      url: `${process.env.NEXT_API_URL}/profile/user/${params.userId}`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { ...data },
    };
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    }
  }
}
