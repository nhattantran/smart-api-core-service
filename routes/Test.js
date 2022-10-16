import Express from "express";

import upload from "../Middleware/Upload.js";
import { Test } from "../controller/Test.js";

const router = Express.Router({mergeParams: true})

router.post('/', upload, Test);

export default router;