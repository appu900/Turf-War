import express, { Application, Response, Request } from "express";
import "dotenv/config";
const app: Application = express();
const PORT = process.env.PORT || 5000;


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});



app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
