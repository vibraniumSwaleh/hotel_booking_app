import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.options('*', cors());
app.use(bodyParser.json());

app.get("/test", (req, res) =>
{
    res.json("Server '/test' endpoint");
    console.log("Server '/test' endpoint");
});

app.post("/register", (req, res) =>
{
    const { name, email, password } = req.body;
    res.json({ name, email, password });

    console.log({ name, email, password });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});