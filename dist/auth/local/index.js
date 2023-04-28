"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const local_controller_1 = require("./local.controller");
const router = (0, express_1.Router)();
router.post('/signup', local_controller_1.signupController);
router.post('/login', local_controller_1.loginController);
exports.default = router;
