import multer from "multer";
import multerConfig from "../config/multer";
import Media from "../models/Media";
const upload = multer(multerConfig).single("media");

class MediaController {
  store(req, res) {
    return upload(req, res, async (e) => {
      if (e)
        return res.status(400).json({
          errors: [e.code],
        });
      try {
        const { filename } = req.file;
        const user_id = req.userID;
        const media = await Media.create({ filename, user_id });
        return res.json(media);
        // eslint-disable-next-line no-unused-vars
      } catch (e) {
        return res.status(400).json({ errors: ["User does not exist"] });
      }
    });
  }
}

export default new MediaController();
