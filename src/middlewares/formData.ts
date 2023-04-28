import busboy from "busboy";
import { v2 as cloudinary } from "cloudinary";
import { Request, Response, NextFunction } from "express";

cloudinary.config({
  cloud_name: process.env.CLOUDNIARY_CLOUD_NAME,
  api_key: process.env.CLOUDNIARY_API_KEY,
  api_secret: process.env.CLOUDNIARY_API_SECRET,
});

export const formData = (req: Request, res: Response, next: NextFunction) => {
  let uploadingFile = false;
  let uploadingCount = 0;
  const done = (): void => {
    if (!uploadingFile) return;
    if (uploadingCount > 0) return;
    next();
  };
  const bb = busboy({ headers: req.headers });
  req.body = {
    username: "John Doe",
  };
  bb.on("field", (key, val) => {
    req.body[key] = val;
  });

  bb.on("file", (key, stream) => {
    uploadingFile = true;
    uploadingCount++;
    const cloud = cloudinary.uploader.upload_stream(
      { upload_preset: "top27-preset" },
      (err, res) => {
        if (err) throw new Error("there has been an error");
        req.body[key] = res?.secure_url;
        uploadingFile = false;
        uploadingCount--;
        done();
      }
    );
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
