import express from "express";
import { getCourse, listCourses } from "../controllers/CourseControllers";

const router = express.Router();
router.get("/", listCourses);
router.get("/:courseId", getCourse);

export default router;
