// src/middlewares/upload.ts
import multer from 'multer';
import { v4 as uuid } from 'uuid';
import path from 'path';

const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    const uniqueName = `${uuid()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

export const upload = multer({ storage });
