import express, { Application, Request, Response } from "express";
import cors from "cors";
import { studentRoutes } from "./app/modules/students/student.route";
const app: Application = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(cors());
app.use("/api/v1/students", studentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("hello World");
});

export default app;
