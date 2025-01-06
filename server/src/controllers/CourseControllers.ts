import { Request, Response } from "express";

export const listCourse = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { category } = req.query;
};
