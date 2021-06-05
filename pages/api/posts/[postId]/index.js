import auth from "@/middleware/auth";
import Post from "@/models/Post";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  auth(req, res, async (req, res) => {
    const { method } = req;

    if (method === "DELETE") {
      try {
        const post = await Post.findById(req.query.postId);
        if (!post) return res.status(404).json({ msg: "Post not found" });
        if (post.user.toString() !== req.user.id)
          return res.status(401).json({ msg: "User not authorized" });
        await post.remove();
        res.json({ success: true, msg: "Post removed" });
      } catch (error) {
        if (error.kind === "ObjectId")
          return res.status(404).json({ msg: "Post not found" });
        res.status(500).send("Server Error");
      }
    }

    if (method === "GET") {
      try {
        const profile = await Post.findById(req.query.postId);
        if (!profile) {
          return res.status(404).json({ msg: "Post not found" });
        }
        res.json(profile);
      } catch (error) {
        if (error.kind === "ObjectId")
          return res.status(404).json({ msg: "Post not found" });
        res.status(500).send("Server Error");
      }
    }
  });
}
