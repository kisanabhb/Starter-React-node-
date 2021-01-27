const { mongo } = require("mongoose");
const crypto = require("crypto");
const { connection, Schema } = require("mongoose");

userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unque: true,
      index: true,
      lowercase: true,
    },
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    email: { type: String, unique: true },
    profile: { type: String, required: true },
    hashed_password: { type: String, required: true },
    salt: { type: Number },
    role: { type: Number, trim: true },
    photo: { data: Buffer, contentType: String },
    resetPasswordLink: {},
  },
  { timestamps: true }
);

const userModal = connection.model("user", userSchema);

module.exports = userModal;
