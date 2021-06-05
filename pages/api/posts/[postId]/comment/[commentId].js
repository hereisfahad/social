import auth from "@/middleware/auth";
import Post from "@/models/Post";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;
  auth(req, res, async (req, res) => {
    if (method === "DELETE") {
      try {
        const { postId, commentId } = req.query;
        let post = await Post.findById(postId);
        const comment = post.comments.find(
          (comment) => comment.id === commentId
        );
        if (!comment) {
          return res.status(404).json({ msg: "Comment not found" });
        }

        if (comment.user.toString() !== req.user.id) {
          return res.status(401).json({ msg: "User not authorized" });
        }

        await Post.updateOne(
          { _id: postId },
          { $pull: { comments: { _id: commentId } } }
        );
        return res.json(await Post.findById(postId));
      } catch (error) {
        if (error.kind === "ObjectId")
          return res.status(404).json({ msg: "Post not found" });
        res.status(500).send("Server Error");
      }
    }
  });
}
