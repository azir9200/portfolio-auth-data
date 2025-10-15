import { BlogService } from "./blog.service";
import { Request, Response } from "express";

const createBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.createBlog(req.body);
    
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllBlogFromDB = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.getAllBlogs();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getBlogById = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.getBlogById(req.params.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.updateBlog(req.params.id, req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteBlog = async (req: Request, res: Response) => {
  try {
    const result = await BlogService.deleteBlog(req.params.id);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const BlogController = {
  createBlog,
  getAllBlogFromDB,
  getBlogById,
  updateBlog,
  deleteBlog,
};
