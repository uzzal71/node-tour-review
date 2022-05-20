import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
const ENV = process.env.PORT || "Development";

app.get('/', (req, res) => {
    res.send(`Node, express server is running on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Your ${ENV} server is running on port ${PORT}`)
})