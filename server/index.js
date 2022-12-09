const express = require("express") ;
const routes = require("./routes/index");
const app = express();
require("dotenv").config();

app.use(express.json());

//Routes calling
app.use("/", routes);

//404 Error handling
app.use((req, res) => {
  return res.status(404).send({
    error: true,
    msg: `URL: ${req.url} not found`
  })
})

//Starts server
app.listen(process.env.PORT, () => [
  console.log(`SERVER running on port ${process.env.PORT}`)
])