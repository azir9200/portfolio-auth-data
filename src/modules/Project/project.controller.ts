import { Request, Response } from "express";
import { projectService } from "./project.service";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await projectService.createProject(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const ProjectController = {
  createProject,
};
