import auth from "@/middleware/auth";
import Profile from "@/models/Profile";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;

    if (method === "GET") {
      auth(req, res, async (req, res) => {
        try {
          const profile = await Profile.findOne({
            user: req.user.id,
          })?.populate("user", ["name", "avatar"]);
          if (!profile) {
            return res.status(404).json({ msg: "No profile for this user" });
          }
          res.json(profile);
          return resolve();
        } catch (error) {
          res.status(500).json("server error");
          return resolve();
        }
      });
    }
  });
}
