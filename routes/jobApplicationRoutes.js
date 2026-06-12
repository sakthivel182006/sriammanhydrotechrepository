import express from "express";

import {
    applyJob,
    getAllApplications,
    getApplicationsByPhone,
    getApplicationById,
    updateStatus,
    deleteApplication
}
from "../controllers/jobApplicationController.js";

const router = express.Router();

// Apply Job
router.post(
    "/apply",
    applyJob
);

// Get All Applications
router.get(
    "/",
    getAllApplications
);

// Get By Phone
router.get(
    "/phone/:phone",
    getApplicationsByPhone
);

// Get Single Application
router.get(
    "/:id",
    getApplicationById
);

// Update Status
router.put(
    "/:id/status",
    updateStatus
);

// Delete Application
router.delete(
    "/:id",
    deleteApplication
);

export default router;