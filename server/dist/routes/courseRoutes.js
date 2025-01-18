"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CourseControllers_1 = require("../controllers/CourseControllers");
const router = express_1.default.Router();
router.get("/", CourseControllers_1.listCourses);
router.get("/:courseId", CourseControllers_1.getCourse);
exports.default = router;
