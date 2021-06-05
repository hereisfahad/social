import auth from "@/middleware/auth";
import Profile from "@/models/Profile";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;

    if (method === "DELETE") {
      auth(req, res, async (req, res) => {
        try {
          await Profile.updateOne(
            { user: req.user.id },
            { $pull: { experience: { _id: req.query.experienceId } } }
          );
          res.json({ success: true });
          return resolve();
        } catch (error) {
          res.status(500).send("Server Error");
          return resolve();
        }
      });
    }
  });
}
