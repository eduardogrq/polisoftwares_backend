import express from "express";
import cors from "cors";
import applicationsRouter from "./routes/applications.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/v1/applications", applicationsRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
