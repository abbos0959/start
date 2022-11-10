const DataModel = require("../model/data");

const getAllData = async (req, res) => {
   try {
      const data = await DataModel.find().populate("productId");
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

const postData = async (req, res) => {
   try {
      const data = await DataModel.create(req.body);

      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({
         message: error.message,
      });
   }
};

module.exports = { getAllData, postData };
