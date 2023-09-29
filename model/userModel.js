const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true, trim: true },
    lastName: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true },
    country: { type: String, require: true, trim: true },
    state: { type: String, require: true, trim: true },
    city: { type: String, require: true, trim: true },
    gender: {
      type: String,
      require: true,
      trim: true,
      enum: ["male", "female", "others"],
    },
    dob: { type: Date, min: "2009-01-01", require: true, trim: true },
    age: { type: Number },
  },
  { timestamps: true }
);

const userSchemaModel = mongoose.model("user", userSchema);
module.exports = userSchemaModel;
