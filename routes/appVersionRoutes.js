import express from "express";

import {
    getVersion,
    updateApk
}
from "../controllers/appVersionController.js";

const router = express.Router();

router.get(
    "/version",
    getVersion
);

router.post(
    "/update",
    updateApk
);

export default router;