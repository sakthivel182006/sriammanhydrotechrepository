import User from "../models/User.js";
import JobApplication from "../models/JobApplication.js";

// Apply Job
export const applyJob = async (req, res) => {

    try {

        const {
            phone,
            name,
            age,
            gender,
            address,
            role,
            experienceType,
            years,
            company,
            previousAddress
        } = req.body;

        const user =
            await User.findOne({ phone });

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "Please register first"
            });
        }

        const existingApplication =
            await JobApplication.findOne({
                phone,
                role
            });

        if (existingApplication) {

            return res.status(400).json({
                success: false,
                message:
                    "You already applied for this role"
            });
        }

        const application =
            await JobApplication.create({
                phone,
                name,
                age,
                gender,
                address,
                role,
                experienceType,
                years,
                company,
                previousAddress,
                status: "UNDER_REVIEW"
            });

        res.status(201).json({
            success: true,
            message:
                "Application submitted successfully",
            application
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Applications
export const getAllApplications = async (
    req,
    res
) => {

    try {

        const applications =
            await JobApplication.find()
                .sort({
                    createdAt: -1
                });

        res.status(200).json({
            success: true,
            count: applications.length,
            applications
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get By Phone
export const getApplicationsByPhone =
    async (req, res) => {

        try {

            const applications =
                await JobApplication.find({
                    phone: req.params.phone
                });

            res.status(200).json({
                success: true,
                applications
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    };

// Get Single Application
export const getApplicationById =
    async (req, res) => {

        try {

            const application =
                await JobApplication.findById(
                    req.params.id
                );

            if (!application) {

                return res.status(404).json({
                    success: false,
                    message:
                        "Application not found"
                });
            }

            res.status(200).json({
                success: true,
                application
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    };

// Update Status
export const updateStatus = async (
    req,
    res
) => {

    try {

        const { status } = req.body;

        const application =
            await JobApplication.findByIdAndUpdate(
                req.params.id,
                {
                    status
                },
                {
                    new: true
                }
            );

        if (!application) {

            return res.status(404).json({
                success: false,
                message:
                    "Application not found"
            });
        }

        res.status(200).json({
            success: true,
            message:
                "Status updated successfully",
            application
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Application
export const deleteApplication =
    async (req, res) => {

        try {

            const application =
                await JobApplication.findById(
                    req.params.id
                );

            if (!application) {

                return res.status(404).json({
                    success: false,
                    message:
                        "Application not found"
                });
            }

            await application.deleteOne();

            res.status(200).json({
                success: true,
                message:
                    "Application deleted successfully"
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    };