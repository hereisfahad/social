import auth from "@/middleware/auth";
import User from "@/models/User";
import Post from "@/models/Post";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;
  auth(req, res, async (req, res) => {
    if (method === "POST") {
      const userId = req.user.id;
      try {
        const user = await User.findById(userId).select("-password");
        let post = await Post.findById(req.query.postId);
        const newComment = {
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: userId,
        };
        post.comments.unshift(newComment);
        await post.save();
        res.json(post);
      } catch (error) {
        res.status(500).send("Server Error");
      }
    }
  });
}
