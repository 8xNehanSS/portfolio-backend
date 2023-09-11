import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import ProjectData from "./models/Project.js";
import TechData from "./models/Technologies.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/projects", async (request, response) => {
  const data = await ProjectData.find({});
  console.log("Fetched Projects from MongoDB");
  response.status(200).json(data);
});

app.get("/api/tech", async (request, response) => {
  const data = await TechData.find({});
  console.log("Fetched Techs from MongoDB");
  response.status(200).json(data);
});

app.post("/api/projects", async (request, response) => {
  const newProject = request.body;
  const CreatedProject = await ProjectData.create(newProject);
  console.log("Created project on MongoDB");
  response.status(201).send(CreatedProject);
});
app.post("/api/tech", async (request, response) => {
  const newProject = request.body;
  const CreatedProject = await TechData.create(newProject);
  console.log("Created project on MongoDB");
  response.status(201).send(CreatedProject);
});

mongoose
  .connect(
    "mongodb+srv://8xnehanss_bootcamp:ccgTrweqa3ixbqpU@cluster0.uybfv4r.mongodb.net/portfolioData?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("[✅] DB connection successful");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("[🎤] Web service is listening on port 8000 to requests.");
});
