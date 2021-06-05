import cookie from "cookie";
import dbConnect from "db";

export default async function helloAPI(req, res) {
  dbConnect();
  const { method } = req;
  if (method === "POST") {
    try {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", "", {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          expires: new Date(0),
          // sameSite: "strict",
          path: "/",
        })
      );
      return res.json({ sucess: true });
    } catch (error) {
      res.status(500).json("server error");
    }
  }
}
