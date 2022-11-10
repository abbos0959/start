const app = require("./middleware/app");
require("dotenv").config();

require("colors");
const DB = require("./connect/DB");
DB();

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => console.log("Server ishladi".yellow.bold.underline));
