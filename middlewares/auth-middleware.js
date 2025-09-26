import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

const checkUserAuth = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;

  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      console.log("Token",token);

      // verify token
      const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);

      // attach user to request
      req.user = await UserModel.findById(userID).select("-password");

      next();
    } catch (error) {
      res.status(401).send({
        status: "failed",
        message: "Unauthorized User, Invalid Token",
      });
    }
  }

  if (!token) {
    res.status(401).send({
      status: "failed",
      message: "Unauthorized User, No Token",
    });
  }

}

export default checkUserAuth;
