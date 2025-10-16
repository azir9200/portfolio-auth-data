import { Request, Response } from "express";
import { AuthService } from "./auth.service";
import { sendResponse } from "../../../shared/sendResponse";
import { IRefreshTokenResponse } from "./auth.interface";

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
  const result = await AuthService.loginWithEmailAndPassword(req.body);
  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: 200,
    success: true,
    message: "Logged in successfully!",
    data: result,
  });
};

export const AuthController = {
  loginWithEmailAndPassword,
};
