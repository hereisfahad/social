import Image from "next/image";

function CommentCard(props) {
  const { avatar, name, text, _id, createdAt, isCreator, handleDeleteComment } =
    props;

  return (
    <div className="flex flex-col items-center justify-center max-w-lg px-6 py-6 space-y-2 bg-gray-100 border border-gray-200 rounded w-94 sm:px-8 sm:space-x-6 sm:justify-start sm:flex-row">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center p-1 bg-white rounded-full">
          <Image
            className="rounded-full"
            src={`https:${avatar}`}
            alt={`Picture of ${name}`}
            width={100}
            height={100}
          />
        </div>
        <p className="text-purple-500 font-semibold text-sm">{name}</p>
      </div>

      <div className="flex flex-col items-center justify-start space-y-2 sm:items-baseline">
        <p className="text-gray-900">{text}</p>
        <div className="flex flex-wrap items-center justify-center">
          {new Date(createdAt).toDateString()}
        </div>
        {isCreator && (
          <button
            onClick={() => handleDeleteComment(_id)}
            className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md group hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default CommentCard;
