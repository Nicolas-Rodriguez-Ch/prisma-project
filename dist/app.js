"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./config/express"));
const routes_1 = __importDefault(require("./routes"));
const formData_1 = require("./middlewares/formData");
const app = (0, express_1.default)();
const port = 8080;
//config
(0, express_2.default)(app);
app.post('/test-formdata', formData_1.formData, (req, res) => {
    console.log('this be da new body:', req);
    res.status(200).json({ ...req.body });
});
// routes config
(0, routes_1.default)(app);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
