import { useForm } from "react-hook-form";
import axios from "@/lib/axios";
import { useToasts } from "react-toast-notifications";

function UpdateProfile({ apiProfile }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      status: apiProfile?.status,
      handle: apiProfile?.handle,
      company: apiProfile?.company,
      website: apiProfile?.website,
      location: apiProfile?.location,
      skills: apiProfile?.skills,
      githubUsername: apiProfile?.githubUsername,
      bio: apiProfile?.bio,
      social: apiProfile?.social,
    },
  });

  const { addToast, removeAllToasts } = useToasts();

  const onSubmit = async (profileData) => {
    const { data } = await axios.post("/profile", profileData);
    if (data?.errors) {
      removeAllToasts();
      addToast(data.errors[0].msg, { appearance: "error", autoDismiss: true });
    } else {
      addToast("Profile Updated", { appearance: "success", autoDismiss: true });
    }
  };

  return (
    <div className="flex items-center justify-center flex-1 p-4 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white border border-purple-200 rounded shadow lg:shadow-md">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Edit Profile
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 rounded-md shadow-sm">
            <div>
              <label htmlFor="status" className="sr-only">
                Professional Status
              </label>
              <select
                id="status"
                name="status"
                {...register("status", { required: true })}
                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${
                  errors?.status ? "border-red-300" : "border-gray-300"
                }  rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
              >
                <option value="">Select Employement Status</option>
                <option value="Employed">Employed</option>
                <option value="Looking for break">Looking for break</option>
              </select>
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Handle
              </label>
              <input
                id="handle"
                name="handle"
                type="text"
                {...register("handle", { required: true })}
                autoComplete="handle"
                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border  ${
                  errors?.handle ? "border-red-300" : "border-gray-300"
                } rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="handle"
              />
            </div>
            <div>
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                {...register("company")}
                autoComplete="company"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Company"
              />
            </div>
            <div>
              <label htmlFor="website" className="sr-only">
                Website
              </label>
              <input
                id="website"
                name="website"
                type="url"
                {...register("website")}
                autoComplete="website"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Website"
              />
            </div>
            <div>
              <label htmlFor="location" className="sr-only">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                {...register("location")}
                autoComplete="location"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Location"
              />
            </div>
            <div>
              <label htmlFor="skills" className="sr-only">
                Skills
              </label>
              <input
                id="skills"
                name="skills"
                type="text"
                autoComplete="skills"
                {...register("skills", { required: true })}
                className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${
                  errors?.skills ? "border-red-300" : "border-gray-300"
                } rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
                placeholder="Skills"
              />
            </div>
            <div>
              <label htmlFor="githubUsername" className="sr-only">
                Github Username
              </label>
              <input
                id="githubUsername"
                name="githubUsername"
                type="text"
                {...register("githubUsername")}
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Github Username"
              />
            </div>
            <div>
              <label htmlFor="bio" className="sr-only">
                Bio
              </label>
              <input
                id="bio"
                name="bio"
                type="text"
                {...register("bio")}
                autoComplete="bio"
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Bio"
              />
            </div>
            <div>
              <label htmlFor="social" className="">
                Add Social Profiles
              </label>
              <div className="flex flex-col h-24 space-y-2 overflow-y-scroll">
                <input
                  id="twitter"
                  name="twitter"
                  type="url"
                  autoComplete="twitter"
                  {...register("social.twitter")}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Twitter"
                />
                <input
                  id="facebook"
                  name="facebook"
                  type="url"
                  {...register("social.facebook")}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Facebook"
                />
                <input
                  id="linkedin"
                  name="linkedin"
                  type="url"
                  {...register("social.linkedin")}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Linkedin"
                />
                <input
                  id="instagram"
                  name="instagram"
                  type="url"
                  {...register("social.instagram")}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Instagram"
                />
                <input
                  id="youtube"
                  name="youtube"
                  type="url"
                  {...register("social.youtube")}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                  placeholder="Youtube"
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;

export async function getServerSideProps({ req, params }) {
  try {
    const { data } = await axios({
      method: "get",
      url: `${process.env.NEXT_API_URL}/profile/me`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { apiProfile: data },
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
