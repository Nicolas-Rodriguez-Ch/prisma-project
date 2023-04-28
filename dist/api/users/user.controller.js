"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserController = exports.updateUserController = exports.getUserByIdController = exports.getAllUsersController = void 0;
const user_services_1 = require("./user.services");
// gets all the users from the bd
const getAllUsersController = async (req, res) => {
    try {
        const users = await (0, user_services_1.getAllUsers)();
        res.status(200).send({ message: 'Users retrieved successfully', data: users });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getAllUsersController = getAllUsersController;
// get single user with id
const getUserByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, user_services_1.getUserById)(id);
        if (!user) {
            return res.status(404).json({ message: 'User with that ID does not exist' });
        }
        res.status(200).json({ message: 'User found!', data: user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getUserByIdController = getUserByIdController;
// update user
const updateUserController = async (req, res) => {
    try {
        const id = req.user;
        const user = await (0, user_services_1.updateUser)(id, req.body);
        res.status(200).json({ message: 'User updated', data: user });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.updateUserController = updateUserController;
// delete user
const deleteUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await (0, user_services_1.deleteUser)(id);
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteUserController = deleteUserController;
