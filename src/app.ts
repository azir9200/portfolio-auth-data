
import express, { Application, NextFunction, Request, Response } from "express";

import { router } from "./app/routes";

import globalErrorHandler from "./app/middlewares/globalErrorHandle";
import { sendResponse } from "./shared/sendResponse";
import notFound from "./app/middlewares/notFound";

const app: Application = express();
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Hey developer, Your code is running well!" });
});

app.use("/api/v1", router);
// ✅ Error handler
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  sendResponse(res, {
    statusCode: 500,
    success: false,
    message: error.message || "Something went wrong!",
    data: error,
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
