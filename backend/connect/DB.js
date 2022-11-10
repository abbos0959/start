const mongoose = require("mongoose");

const DB = async () => {
   try {
      await mongoose.connect(process.env.URL);
      console.log("mongodb Ulandi".blue.bold.underline);
   } catch (error) {
      console.log(`mongodb ulanmadi${error}`.red.bold.underline);
   }
};

module.exports = DB;

//  Rduu6xQTYGwLFI3l
