import { Router } from "express";
import { AuthRouter } from "../auth/auth.routes";
import { BlogRouter } from "../Blog/blog.router";
import { ProjectRouter } from "../Project/project.router";

export const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRouter,
  },
  {
    path: "/blog",
    route: BlogRouter,
  },
  {
    path: "/auth",
    route: ProjectRouter,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
