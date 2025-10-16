import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../../config/db";

const createProject = async (
  payload: Prisma.ProjectCreateInput
): Promise<Project> => {
  const result = await prisma.project.create({
    data: payload,
  });
  return result;
};

const getAllProject = async () => {
  const result = await prisma.project.findMany({
    include: { owner: true },
    orderBy: { createdAt: "desc" },
  });

  return { data: result };
};
//....
const getProjectById = async (id: string): Promise<Project | null> => {
  const result = await prisma.project.findUnique({
    where: { id },
    include: { owner: true },
  });

  return result;
};

const updateProject = async (
  id: string,
  payload: Partial<Project>
): Promise<Project | null> => {
  const result = await prisma.project.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteProject = async (id: string): Promise<Project | null> => {
  const data = await prisma.project.delete({
    where: { id },
  });
  return data;
};

export const ProjectService = {
  createProject,
  getAllProject,
  getProjectById,
  updateProject,
  deleteProject,
};
