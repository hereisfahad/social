import auth from "@/middleware/auth";
import Profile from "@/models/Profile";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve, reject) => {
    dbConnect();
    const { method } = req;

    if (method === "GET") {
      auth(req, res, async (req, res) => {
        try {
          const profiles = await Profile.find()
            .select("-__v")
            .populate("user", ["name", "avatar"]);
          if (!profiles || profiles.length === 0) {
            res.status(404).json({ profile: "There are no profiles" });
            return resolve();
          }
          res.json(profiles);
        } catch (error) {
          res.status(404).json({ profile: "There are no profiles" });
          return reject();
        }
      });
    }
  });
}
