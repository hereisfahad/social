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
            { $pull: { education: { _id: req.query.educationId } } }
          );
          res.json({ success: true });
          return resolve();
        } catch (error) {
          res.status(404).json({ profile: "There are no profiles" });
          return resolve();
        }
      });
    }
  });
}
