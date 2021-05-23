import Image from "next/image";
import Link from "next/link";

import Tag from "@/components/Tag";

function ProfileCard(props) {
  const { user, skills } = props;
  return (
    <div className="flex flex-col items-center justify-center max-w-lg px-6 py-6 space-y-2 bg-gray-100 border border-gray-200 rounded w-94 sm:px-8 sm:space-x-6 sm:justify-start sm:flex-row">
      <div className="flex items-center justify-center p-1 bg-white rounded-full">
        <Image
          className="rounded-full"
          src={`https:${user.avatar}`}
          alt={`Picture of ${user.name}`}
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col items-center justify-start space-y-2 sm:items-baseline">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-800">I would love to have some chemistry(bio)</p>
        <div className="flex flex-wrap items-center justify-center">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </div>
        <Link href={`/profile/${user._id}`}>
          <a className="px-3 py-2 text-sm font-semibold tracking-wider text-white uppercase bg-purple-500 rounded hover:bg-purple-400 focus:outline-none focus-within:ring-2 ring-purple-600">
            View Profile
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ProfileCard;
