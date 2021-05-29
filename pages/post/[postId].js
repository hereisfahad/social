import axios from "@/lib/axios";
import { useState } from "react";
import CommentCard from "@/components/CommentCard";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { useAuth } from "@/lib/auth";
import { useRouter } from "next/router";

function PostDetail(props) {
  const { user } = useAuth();
  const { query } = useRouter();

  const [post, setPost] = useState(props.post);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { addToast, removeAllToasts } = useToasts();

  const onSubmit = async (commentData) => {
    try {
      const { data } = await axios.post(
        `/posts/comment/${query.postId}`,
        commentData
      );
      removeAllToasts();
      addToast("Post added", { appearance: "success", autoDismiss: true });
      reset();
      setPost(data);
    } catch (error) {
      removeAllToasts();
      addToast(error?.response?.data, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const handleDeleteComment = async (commentId) => {
    const sureDelete = window.confirm(
      "Are you sure, you wanna delete this comment?"
    );
    if (sureDelete) {
      try {
        const { data } = await axios.delete(
          `/posts/${query.postId}/comment/${commentId}`
        );
        removeAllToasts();
        setPost(data);
        addToast("Comment deleted", {
          appearance: "success",
          autoDismiss: true,
        });
      } catch (error) {
        removeAllToasts();
        addToast(error?.response?.data, {
          appearance: "error",
          autoDismiss: true,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center flex-1 px-4 py-10 sm:p-8">
      <h2 className="text-3xl font-bold text-gray-900">Developers</h2>
      <div className="flex flex-col items-center justify-center max-w-lg px-6 py-6 space-y-2 bg-gray-100 border border-gray-200 rounded w-94 sm:px-8 sm:space-x-6 sm:justify-start sm:flex-row">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center justify-center p-1 bg-white rounded-full">
            <Image
              className="rounded-full"
              src={`https:${post.avatar}`}
              alt={`Picture of ${post.name}`}
              width={100}
              height={100}
            />
          </div>
          <p className="text-purple-500 font-semibold text-sm">{post.name}</p>
        </div>

        <div className="flex flex-col items-center justify-start space-y-2 sm:items-baseline">
          <p className="text-gray-900">{post.text}</p>
          <div className="flex flex-wrap items-center justify-center">
            {new Date(post.createdAt).toDateString()}
          </div>
        </div>
      </div>
      <form className="mt-8 space-y-6 w-64" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2 rounded-md shadow-sm">
          <div>
            <label htmlFor="text" className="sr-only">
              write comment
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
        {post.comments.map((comment) => (
          <CommentCard
            key={comment._id}
            {...comment}
            handleDeleteComment={handleDeleteComment}
            isCreator={comment?.user === user?._id}
          />
        ))}
      </div>
    </div>
  );
}

export default PostDetail;

export async function getServerSideProps({ req, res, params }) {
  try {
    const { data } = await axios({
      method: "get",
      url: `/posts/${params.postId}`,
      headers: {
        cookie: req.headers.cookie,
      },
    });
    return {
      props: { post: data },
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
