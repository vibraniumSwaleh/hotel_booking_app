import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import "dotenv/config";
import UserModel from "./models/User.js";

const app = express();
const PORT = 4000;
const bcryptSalt = bcrypt.genSaltSync(12);

app.use(express.json());
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
    res.json(userDoc);
    //console.log(userDoc);
  } catch (error) {
    res.status(422).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
