const UserModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const crypto = require("crypto");
const Register = async (req, res) => {
   try {
      const { name, email, password } = req.body;

      const checkuser = await UserModel.findOne({ email });

      if (checkuser) {
         return res.status(400).json({
            message: "bunday user allaqachon mavjud",
         });
      }

      const hashPassword = await bcrypt.hash(password, 12);

      const user = await UserModel.create({
         name,
         email,
         password: hashPassword,
         avatar: { public_id: "salom", url: "qalesan" },
      });
      const token = await jwt.sign({ id: user._id }, "secret");

      const options = {
         maxAge: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
         httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
         success: true,
         user,
         token,
      });
   } catch (error) {
      res.status(500).json({
         status: false,
         message: error.message,
      });
   }
};



const login = async (req, res) => {
   try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });
      if (!user) {
         return res.status(404).json({
            message: "bunday user mavjud emas",
         });
      }
      const checkPassword = await bcrypt.compare(password, user.password);

      if (!checkPassword) {
         return res.status(400).json({
            message: "parol xato kiritildi",
         });
      }

      const token = await jwt.sign({ id: user._id }, "secret");

      res.status(200)
         .cookie("token", token, {
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            httpOnly: true,
         })
         .json({
            success: true,
            user,
            token,
         });
   } catch (error) {
      res.status(500).json({
         success: false,
         message: error.message,
      });
   }
};



const logout = async (req, res) => {
   res.clearCookie("token", null, {
      maxAge: new Date(Date.now()),
      httpOnly: true,
   });
   res.status(200).json({
      message: true,
      message: "Logout User",
   });
};

module.exports = { Register ,login,logout};
