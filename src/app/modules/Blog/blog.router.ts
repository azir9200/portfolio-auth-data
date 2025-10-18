import express from "express";
import { BlogController } from "./blog.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = express.Router();

router.post("/", checkAuth("OWNER"), BlogController.createBlog);
router.get("/", BlogController.getAllBlog);
router.get("/:id", BlogController.getBlogById);
router.patch("/:id", BlogController.updateBlog);
router.delete("/:id", BlogController.deleteBlog);

export const BlogRouter = router;
