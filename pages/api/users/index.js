import User from "@/models/User";
import gravatar from "gravatar";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;

  if (method === "POST") {
    const { body } = req;
    const { name, email, password } = body;
    try {
      //check if user already exists in database
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "user already exists" }] });
      }
      //set avatar
      const avatar = gravatar.url(email, { s: "200", d: "mm", r: "pg" });
      //create new user using user model
      user = new User({
        name,
        email,
        avatar,
        password,
      });
      //encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      //save in database
      await user.save();
      //res.send(user);

      const payload = {
        user: {
          id: user.id,
        },
      };
      //implement jsonwebtoken
      jwt.sign(
        payload,
        process.env.jwtSecret,
        { expiresIn: "1d" },
        (error, token) => {
          if (error) throw error;
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("token", token, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              maxAge: 60 * 60 * 24, // 1 day
              // sameSite: "strict",
              path: "/",
            })
          );
          return res.status(200).json({ sucess: true });
        }
      );
    } catch (error) {
      return res.status(500).json("server error");
    }
  }
}
