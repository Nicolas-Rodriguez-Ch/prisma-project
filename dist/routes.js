"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const healthcheck_1 = __importDefault(require("./api/healthcheck"));
const products_1 = __importDefault(require("./api/products/"));
const review_1 = __importDefault(require("./api/review"));
const users_1 = __importDefault(require("./api/users"));
const local_1 = __importDefault(require("./auth/local"));
const routes = (app) => {
    app.use('/api/healthcheck', healthcheck_1.default);
    app.use('/api/products', products_1.default);
    app.use('/api/reviews', review_1.default);
    app.use('/api/users', users_1.default);
    // auth routes
    app.use('/auth/local', local_1.default);
};
exports.default = routes;
