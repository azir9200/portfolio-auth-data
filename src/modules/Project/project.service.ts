import { Prisma, Project } from "@prisma/client";
import { prisma } from "../../app/config/db";

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
const getProjectById = async (id: string) => {
  const result = await prisma.$transaction(async (tx) => {
    return await tx.project.findUnique({
      where: { id },
      include: { owner: true },
    });
  });

  return result;
};

const updateProject = async (id: string, payload: Partial<Project>) => {
  const result = await prisma.project.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteProject = async (id: string) => {
  const data = await prisma.project.delete({
    where: { id },
  });
  return data;
};

export const projectService = {
  createProject,
  getAllProject,
  getProjectById,
  updateProject,
  deleteProject,
};
