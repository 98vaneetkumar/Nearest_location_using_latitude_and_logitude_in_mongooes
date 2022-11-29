const mongoose = require("mongoose");
const storeSchemas = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  name: {
    type: String,
  },
  address: {
    type: String,
  },
  location: {
    type: { type: String, require: true },
    coordinates: [],
  },
});
storeSchemas.index({ location: "2dsphere" });

module.exports = mongoose.model("Store", storeSchemas);
