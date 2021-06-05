import auth from "@/middleware/auth";
import Profile from "@/models/Profile";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;

    if (method === "POST") {
      auth(req, res, async (req, res) => {
        try {
          const profile = await Profile.findOne({ user: req.user.id });
          profile.education.unshift(req.body);

          await profile.save();
          res.json(profile);
          return resolve();
        } catch (error) {
          res.status(404).json({ profile: "There are no profiles" });
          return resolve();
        }
      });
    }
  });
}
