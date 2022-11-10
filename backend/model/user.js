const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Iltimos Ism Kiriting"],
      trim: true,
   },
   email: {
      type: String,
      required: [true, "Iltimos email kiriting"],
      unique: [true, "bunday email avvaldan mavjud"],
   },

   avatar: {
      public_id: String,
      url: String,
   },
   password: {
      type: String,
      required: [true, "Iltimos parol kiriting"],
      minlength: [6, "Siz kamida 6 ta belgidan iborat parol kiritishingiz kerak"],
   },
   role: {
      type: String,
      enum: ["ADMIN", "USER"],
      default: "USER",
   },
});

module.exports = mongoose.model("user", UserModel);
