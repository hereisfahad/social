import auth from "@/middleware/auth";
import Profile from "@/models/Profile";
import User from "@/models/User";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;

    if (method === "DELETE") {
      return new Promise((resolve) => {
        auth(req, res, async (req, res) => {
          const userId = req.user.id;
          try {
            await Profile.findOneAndRemove({ user: userId });
            await User.findOneAndRemove({ _id: userId });
            res.json({ success: true, msg: "User removed" });
            return resolve();
          } catch (error) {
            res.status(500).send("Server Error");
            return resolve();
          }
        });
      });
    }

    if (method === "POST") {
      auth(req, res, async (req, res) => {
        const { body, user } = req;
        body.user = user.id;

        if (typeof body.skills === "string") {
          body.skills = body.skills.split(",");
        }
        try {
          let profile = await Profile.findOne({ user: user.id });
          if (profile) {
            let profile = await Profile.findOneAndUpdate(
              { user: req.user.id },
              { $set: body },
              { new: true }
            );
            return res.json(profile);
          } else {
            // Create
            // Check if handle exists
            profile = await Profile.findOne({ handle: body.handle });
            if (profile) {
              errors.handle = "That handle already exists";
              return res.status(400).json(errors);
            } else {
              // Save Profile
              profile = new Profile(body);
              await profile.save();
              res.json(profile);
              return resolve();
            }
          }
        } catch (error) {
          res.status(500).send("Server Error");
          return resolve();
        }
      });
    }
  });
}
