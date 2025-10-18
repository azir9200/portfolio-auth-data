import express from "express";
import { ProjectController } from "./project.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = express.Router();

router.post("/", checkAuth("OWNER"), ProjectController.createProject);
router.get("/", checkAuth("OWNER"), ProjectController.getAllProject);
router.get("/:id", ProjectController.getProjectById);
router.patch("/:id", ProjectController.updateProject);
router.delete("/:id", ProjectController.deleteProject);

export const ProjectRouter = router;
