import jwt from "jsonwebtoken";

function getcookies(req) {
  const {
    headers: { cookie },
  } = req;
  if (cookie) {
    return cookie.split(";").reduce((res, item) => {
      const data = item.trim().split("=");
      return { ...res, [data[0]]: data[1] };
    }, {});
  } else return { token: undefined };
}

export default function (req, res, next) {
  const cookies = getcookies(req);
  const token = cookies.token;
  if (!token) {
    res.status(401).json("no token, authorization failed");
  }
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.jwtSecret);
      req.user = decoded.user;
      next(req, res);
    } catch (err) {
      res.status(401).json("token is not valid");
    }
  }
}
