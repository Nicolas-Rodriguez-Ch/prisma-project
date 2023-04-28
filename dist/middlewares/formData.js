"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formData = void 0;
const busboy_1 = __importDefault(require("busboy"));
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
    api_key: process.env.CLOUDNIARY_API_KEY,
    api_secret: process.env.CLOUDNIARY_API_SECRET,
});
const formData = (req, res, next) => {
    let uploadingFile = false;
    let uploadingCount = 0;
    const done = () => {
        if (!uploadingFile)
            return;
        if (uploadingCount > 0)
            return;
        next();
    };
    const bb = (0, busboy_1.default)({ headers: req.headers });
    req.body = {
        username: "John Doe",
    };
    bb.on("field", (key, val) => {
        req.body[key] = val;
    });
    bb.on("file", (key, stream) => {
        uploadingFile = true;
        uploadingCount++;
        const cloud = cloudinary_1.v2.uploader.upload_stream({ upload_preset: "top27-preset" }, (err, res) => {
            if (err)
                throw new Error("there has been an error");
            req.body[key] = res?.secure_url;
            uploadingFile = false;
            uploadingCount--;
            done();
        });
        stream.on("data", (data) => {
            cloud.write(data);
        });
        stream.on("end", () => {
            cloud.end();
        });
    });
    bb.on("finish", () => {
        done();
    });
    req.pipe(bb);
};
exports.formData = formData;
