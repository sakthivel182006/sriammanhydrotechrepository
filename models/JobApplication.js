import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
{
    phone: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    address: {
        type: String,
        required: true
    },

    role: {
        type: String,
        required: true
    },

    experienceType: {
        type: String,
        enum: ["Fresher", "Experienced"],
        required: true
    },

    years: {
        type: String,
        default: ""
    },

    company: {
        type: String,
        default: ""
    },

    previousAddress: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        default: "UNDER_REVIEW"
    }
},
{
    timestamps: true
}
);

export default mongoose.model(
    "JobApplication",
    jobApplicationSchema
);