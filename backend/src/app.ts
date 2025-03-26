import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

app.get("/data", (req: Request, res: Response) => {
    res.json({ receivedData: req.body });
});
// Sample POST route
app.post("/data", (req: Request, res: Response) => {
    res.json({ receivedData: req.body });
});

export default app;
