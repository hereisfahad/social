import axios from "@/lib/axios";
import { useState } from "react";
import PostCard from "@/components/PostCard";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "@/lib/auth";
import absoluteUrl from 'next-absolute-url'

function Posts(props) {
  const { user } = useAuth();
  const [posts, setPosts] = useState(props.posts);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addToast, removeAllToasts } = useToasts();

  const onSubmit = async (postData) => {
    try {
      const { data } = await axios.post("/posts", postData);
      removeAllToasts();
      addToast("Post added", { appearance: "success", autoDismiss: true });
      reset();
      setPosts([data, ...posts]);
    } catch (error) {
      removeAllToasts();
      addToast(error?.response?.data, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const handleDeletePost = async (postId) => {
    const sureDelete = window.confirm(
      "Are you sure, you wanna delete this post?"
    );
    if (sureDelete) {
      try {
        await axios.delete(`/posts/${postId}`);
        removeAllToasts();
        setPosts([...posts.filter((post) => post._id !== postId)]);
        addToast("Post deleted", { appearance: "success", autoDismiss: true });
      } catch (error) {
        removeAllToasts();
        addToast(error?.response?.data, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };

  const toggleLikePost = async (postId) => {
    try {
      const { data } = await axios.put(`/posts/like/${postId}`);
      setPosts([
        ...posts.map((post) => {
          if (post._id == postId) return data;
          else return post;
        }),
      ]);
    } catch (error) {
      removeAllToasts();
      addToast(error?.response?.data, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const isLikedByMe = (likes) =>
    likes.find((like) => like.user === user?._id) ? true : false;

  return (
    <div className="flex flex-col items-center flex-1 px-4 py-10 sm:p-8">
      <h2 className="text-3xl font-bold text-gray-900">Developers</h2>
      <p className="font-semibold text-gray-700">
        Welcome to the Developers communit!
      </p>
      <form className="mt-8 space-y-6 w-64" onSubmit={handleSubmit(onSubmit)}>
        <input type="hidden" name="remember" value="true" />
        <div className="space-y-2 rounded-md shadow-sm">
          <div>
            <label htmlFor="text" className="sr-only">
              Post text
            </label>
            <textarea
              className={`relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border ${
                errors?.text ? "border-red-300" : "border-gray-300"
              } rounded appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm`}
              id="text"
              name="text"
              col={20}
              rows={5}
              {...register("text", { required: true })}
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Post
          </button>
        </div>
      </form>
      <div className="grid grid-cols-1 gap-6 mt-8">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            {...post}
            isLikedByMe={isLikedByMe(post.likes)}
            toggleLikePost={toggleLikePost}
            handleDeletePost={handleDeletePost}
            isCreator={post?.user === user?._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Posts;

export async function getServerSideProps({ req, res }) {
  try {
    const { origin } = absoluteUrl(req)
    const { data } = await axios({
      method: "get",
      url: `${origin}/api/posts/`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { posts: data },
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
