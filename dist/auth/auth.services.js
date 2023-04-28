"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.login = void 0;
const client_1 = require("@prisma/client");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = new client_1.PrismaClient();
const SECRET = process.env.SECRET_KEY;
const login = (email) => {
    return prisma.users.findUnique({
        where: {
            email: email
        }
    });
};
exports.login = login;
const signToken = (payload) => {
    const token = jsonwebtoken_1.default.sign(payload, SECRET, { expiresIn: 60 * 15 });
    return token;
};
exports.signToken = signToken;
const verifyToken = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET);
        return decoded;
    }
    catch (error) {
        return false;
    }
};
exports.verifyToken = verifyToken;
