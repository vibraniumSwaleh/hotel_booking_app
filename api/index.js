import express from "express";

const app = express();
const PORT = 4000;

app.get("/test", (req, res) =>
{
    res.json("Server end point");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});