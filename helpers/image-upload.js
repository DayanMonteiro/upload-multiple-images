const multer = require("multer");
const path = require("path");

const imagesStorage = multer.diskStorage({
  destination: function (req, file, funCallback) {
    funCallback(null, "public/images");
  },

  filename: function (req, file, funCallback) {
    funCallback(
      null,
      Date.now() +
        String(Math.floor(Math.random() * 100)) +
        path.extname(file.originalname)
    );
  },
});

const imageUpload = multer({
  storage: imagesStorage,
  fileFilter(req, file, funCallback) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      return funCallback(
        new Error("Por favor adicione apenas imagens nos formatos jpg ou png!")
      );
    }
    funCallback(undefined, true);
  },
});

module.exports = { imageUpload };
