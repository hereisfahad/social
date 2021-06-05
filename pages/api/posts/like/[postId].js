import auth from "@/middleware/auth";
import Post from "@/models/Post";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;
  auth(req, res, async (req, res) => {
    if (method === "PUT") {
      const userId = req.user.id;
      const { postId } = req.query;
      try {
        let post = await Post.findById(postId);
        if (
          post.likes.filter((like) => like.user.toString() === userId).length >
          0
        ) {
          await Post.updateOne(
            { _id: postId },
            { $pull: { likes: { user: userId } } }
          );
          return res.json(await Post.findById(postId));
        }
        post.likes.unshift({ user: userId });
        await post.save();
        res.json(post);
      } catch (error) {
        res.status(404).json({ postnotfound: "No post found" });
      }
    }
  });
}
