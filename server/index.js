const express = require("express");
const app = express();
const { Dbconection } = require("./Dbconection/Dbconection");
const route = require("./routes/Routes");
const loginRoutes = require("./routes/loginRoutes");
const PORT = 8001;
const cors = require("cors");

Dbconection();

app.use(express.json());
app.use(cors());

app.use("/", route);
app.use("/register", loginRoutes);

app.listen(PORT, () => {
  console.log(`server connected :  ${PORT}`);
});
