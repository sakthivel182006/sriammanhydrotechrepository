import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {

        const { phone, role } = req.body;

        const existingUser = await User.findOne({
            phone
        });

        if (existingUser) {
            return res.status(400).json({
                message: "Phone Number Already Exists"
            });
        }

        const user = await User.create({
            phone,
            role
        });

        res.status(201).json(user);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

export const getUsers = async (req, res) => {
    try {

        const users = await User.find();

        res.json(users);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};