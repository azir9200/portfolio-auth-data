import { Blog, Prisma } from "@prisma/client";
import { prisma } from "../../app/config/db";

const createBlog = async (payload: Prisma.BlogCreateInput): Promise<Blog> => {
  const result = await prisma.blog.create({
    data: payload,
  });
  return result;
};

const getAllBlogs = async () => {
  const result = await prisma.blog.findMany({
    include: { author: true },
    orderBy: { createdAt: "desc" },
  });

  return { data: result };
};
const getBlogById = async (id: string) => {
  const result = await prisma.$transaction(async (tx) => {

    return await tx.blog.findUnique({
      where: { id },
      include: { author: true },
    });
  });

  return result;
};

const updateBlog = async (id: string, payload: Partial<Blog>) => {
  const result = await prisma.blog.update({
    where: { id },
    data: payload,
  });
  return result;
};

const deleteBlog = async (id: string) => {
  const result = await prisma.blog.delete({
    where: { id },
  });
  return result;
};

export const BlogService = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
