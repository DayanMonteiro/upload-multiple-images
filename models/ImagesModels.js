const mongoose = require("../db/database");
const { Schema } = mongoose;

const Images = mongoose.model(
  "Images",
  new Schema(
    {
      images: {
        type: Array,
        require: true,
      },
      available: {
        type: Boolean,
      },
    },
    { timestamps: true }
  )
);

module.exports = Images;
