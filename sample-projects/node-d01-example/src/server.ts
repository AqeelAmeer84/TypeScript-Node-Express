import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3000;

// endpoint / -> response "Hello world from our express app"
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world from our express app");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
