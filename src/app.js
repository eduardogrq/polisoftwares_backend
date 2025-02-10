import express from "express";
import cors from "cors";
import websitesRouter from "./routes/websites.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/v1/applications", websitesRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
