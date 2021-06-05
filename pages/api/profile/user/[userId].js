import auth from "@/middleware/auth";
import Profile from "@/models/Profile";
import axios from "@/lib/axios";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;

    if (method === "GET") {
      auth(req, res, async (req, res) => {
        try {
          const profile = await Profile.findOne({ user: req.query.userId })
            .select("-__v")
            .populate("user", ["name", "avatar"]);
          if (!profile) {
            return res
              .status(404)
              .json({ msg: "There is no profile for this user" });
          }
          if (profile?.handle) {
            const { data } = await axios.get(
              `https://api.github.com/users/${profile.handle}/repos?per_page=5&sort=created:asc&client_id=${process.env.githubClientId}`
            );
            return res.json({
              profile,
              repos: data.map(
                ({ clone_url, name, description, forks, watchers }) => ({
                  clone_url,
                  name,
                  description,
                  forks,
                  watchers,
                })
              ),
            });
          }
          res.json({ profile });
          return resolve();
        } catch (error) {
          console.log(error);
          if (error.kind === "ObjectId")
            return res
              .status(404)
              .json({ msg: "There is no profile for this user" });
          res.status(500).send("Server Error");
          return resolve();
        }
      });
    }
  });
}
