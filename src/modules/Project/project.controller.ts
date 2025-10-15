import { Request, Response } from "express";
import { projectService } from "./project.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

const createProject = async (req: Request, res: Response) => {
  try {
    const result = await projectService.createProject(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getAllProject();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All Project retrieve by successfully",
    data: result.data,
  });
});

export const ProjectController = {
  createProject,
  getAllProject,
};
