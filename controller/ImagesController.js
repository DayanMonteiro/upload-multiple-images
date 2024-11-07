const Images = require("../models/ImagesModels");

module.exports = class ImagesController {
  static async create(req, res) {
    const images = req.files;

    if (!images || images.length === 0) {
      return res.status(422).json({ message: "As imagens são obrigatórias!" });
    }

    const available = true;

    const imagesUpload = new Images({
      available,
      images: images.map((image) => image.filename),
    });

    try {
      const newImages = await imagesUpload.save();
      res.status(201).json({
        message: "Imagens cadastradas com sucesso!",
        newImages,
      });
    } catch (err) {
      res.status(500).json({ messsage: err.message });
    }
  }
};
