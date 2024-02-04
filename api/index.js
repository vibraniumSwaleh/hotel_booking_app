import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "./models/User.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();
const PORT = 4000;
const bcryptSalt = bcrypt.genSaltSync(12);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.options("*", cors());

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Server '/test' endpoint");
  console.log("Server '/test' endpoint");
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userDoc = await UserModel.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.status(201).json(userDoc);
    console.log(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await UserModel.findOne({ email });
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      jwt.sign(
        {
          email: userDoc.email,
          id: userDoc._id,
        },
        process.env.jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          {
            res.cookie("token", token).json(userDoc);
          }
        }
      );
    } else {
      res.status(401).json("Wrong password");
    }
  } else {
    res.status(404).json("User not found");
  }
});

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.jwtSecret, {}, async (err, tokenUser) => {
      if (err) throw err;
      const { name, email, _id } = await UserModel.findById(tokenUser.id);
      res.json({name, email, _id});
    });
  } else {
    res.json(null);
  }
});

app.post("/logout", (req, res) =>
{
  res.clearCookie("token").json(true);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
