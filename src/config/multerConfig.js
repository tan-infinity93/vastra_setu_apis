import multer from "multer";
import path from "path";
import fs from "fs";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(process.cwd(), "uploads/"));
    },
    filename: (req, file, cb) => {
        // cb(null, `${Date.now()}${path.extname(file.originalname)}`);
        cb(null, file.originalname);
    }
});

const uploads = path.join(process.cwd(), "uploads");

if (fs.existsSync(uploads)) {
    fs.mkdirSync(uploads, { recursive: true });
}

export const upload = multer({ storage: storage });