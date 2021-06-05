import axios from "@/lib/axios";
import ProfileCard from "@/components/ProfileCard";
import absoluteUrl from 'next-absolute-url'

function profiles({ profiles }) {
  return (
    <div className="flex flex-col items-center flex-1 px-4 py-10 sm:p-8">
      <h2 className="text-3xl font-bold text-gray-900">Developers</h2>
      <p className="font-semibold text-gray-700">
        Browse and connect with Developers
      </p>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {profiles.map((profile) => (
          <ProfileCard key={profile._id} {...profile} />
        ))}
      </div>
    </div>
  );
}

export default profiles;

export async function getServerSideProps({ req, res }) {
  try {
    const { origin } = absoluteUrl(req)
    const { data } = await axios({
      method: "get",
      url: `${origin}/api/profile/all`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { profiles: data },
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
