"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// gets all the users from the db
const getAllUsers = () => {
    return prisma.users.findMany({
        select: {
            name: true,
            last_name: true,
            user_id: true,
            email: true,
            password: true,
            createdAt: true,
            updatedAt: true
        }
    });
};
exports.getAllUsers = getAllUsers;
// get a single user by the id 
const getUserById = (id) => {
    return prisma.users.findUnique({
        where: {
            user_id: id
        },
        select: {
            name: true,
            last_name: true,
            user_id: true,
            email: true,
            password: true,
            createdAt: true,
            updatedAt: true
        }
    });
};
exports.getUserById = getUserById;
const createUser = async (input) => {
    const { email, password, name, last_name } = input;
    return prisma.users.create({
        data: {
            name,
            last_name,
            email,
            password,
        }
    });
};
exports.createUser = createUser;
// update user
const updateUser = (id, input) => {
    const { email, password, name, last_name } = input;
    return prisma.users.update({
        where: {
            user_id: id
        },
        data: {
            email: email && { set: email },
            password: password && { set: password },
            name: name && { set: name },
            last_name: last_name && { set: last_name },
        }
    });
};
exports.updateUser = updateUser;
// delete user 
const deleteUser = (id) => {
    return prisma.users.delete({
        where: {
            user_id: id
        }
    });
};
exports.deleteUser = deleteUser;
