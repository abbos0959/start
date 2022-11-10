const ProductModel = require("../model/product");
// const catchErrorAsync = require("../utils/catchUtil");
// const AppError = require("../utils/appError");
const getAll = async (req, res, next) => {
   const product = await ProductModel.find();
   res.status(200).json(product);
};

const create = async (req, res, next) => {
   try {
      const product = new ProductModel({
         name: req.body.name,
         description: req.body.description,
         // price: req.body.price,
         // category: req.body.category,
      });

      if (req.file) {
         product.photo = req.file.path;
      }

      product
         .save()
         .then((response) => {
            res.json({ message: "product qoshildi", response });
         })
         .catch((err) => {
            res.json({ message: "product qo`shilmadi error" });
         });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const productById = async (req, res, next) => {
   try {
      const product = await ProductModel.findById(req.params.id);

      if (!product) {
         return res.status(404).json({ message: "bunday idli mavjud emas" });
      }
      res.status(200).json({
         nessage: "success",
         product,
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};
const remove = async (req, res, next) => {
   try {
      const prod = await ProductModel.findByIdAndDelete(req.params.id);

      if (!prod) {
         return res.status(404).json({ message: "bunday prod mavjud emas" });
      }

      res.status(200).json({
         message: "success delete",
      });
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
};

const updateProduct = async (req, res, next) => {
   const id = req.params.id;
   try {
      const product = await ProductModel.findByIdAndUpdate(id, {
         name: req.body.name,
         description: req.body.description,
         // price: req.body.price,
         // category: req.body.category,

         photo: req.file.filename,
      });

      if (!product) {
         return next(new AppError("product update bo`lmadi"));
      }

      // if (req.file) {
      //    product.photo = req.file.path;
      // }

      res.status(200).json({
         product,
         message: "success update",
      });
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};
module.exports = { getAll, create, productById, remove, updateProduct };
