import express, { Express, Request, Response } from 'express';
import cors from 'cors';
// OPENAI API IMPORT HERE FOR LATER
import openai from './routes/openai.route';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.use("/chat", openai);
app.use("*", (req: Request, res: Response) => res.status(404).json({ error: "Not found" }));

export default app;