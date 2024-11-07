const router = require("express").Router();

const ImagesController = require("../controller/ImagesController");

const { imageUpload } = require("../helpers/image-upload");

router.post("/create", imageUpload.array("images"), ImagesController.create);

module.exports = router;
