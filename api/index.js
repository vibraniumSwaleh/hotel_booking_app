import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.options('*', cors());

app.get("/test", (req, res) =>
{
    res.json("Server endpoint");
    console.log("Server endpoint");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});