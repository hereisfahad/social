import auth from "@/middleware/auth";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cookie from "cookie";

import dbConnect from "db";

export default async function helloAPI(req, res) {
  return new Promise(async (resolve) => {
    dbConnect();
    const { method } = req;
    if (method === "POST") {
      const { email, password } = req.body;
      try {
        //check if user already exists in database
        let user = await User.findOne({ email });
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid credentials" }] });
        }
        //compare the password with hashed
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid credentials" }] });
        }
        //payload with user id
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
                // sameSite: "none",
                path: "/",
              })
            );
            res.json({ sucess: true });
            return resolve();
          }
        );
      } catch (error) {
        res.status(500).json("server error");
        return resolve();
      }
    }

    if (method === "GET") {
      auth(req, res, async (req, res) => {
        try {
          const user = await User.findById(req?.user?.id).select(
            "-password -__v"
          );
          return res.status(200).json(user);
        } catch (err) {
          return res.status(500).json("server error");
        }
      });
    }
  });
}
