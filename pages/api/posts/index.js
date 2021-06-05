import auth from "@/middleware/auth";
import User from "@/models/User";
import Post from "@/models/Post";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;

  if (method === "POST") {
    auth(req, res, async (req, res) => {
      const userId = req.user.id;
      try {
        const user = await User.findById(userId).select("-password");
        const newPost = await Post.create({
          text: req.body.text,
          name: user.name,
          avatar: user.avatar,
          user: userId,
        });
        res.json(newPost);
      } catch (error) {
        res.status(500).send("Server Error");
      }
    });
  }

  if (method === "GET") {
    try {
      const posts = await Post.find().sort({ createdAt: -1 });
      res.json(posts);
    } catch (error) {
      res.status(404).json({ nopostsfound: "No posts found" });
    }
  }
}
