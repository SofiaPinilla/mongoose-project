const express = require("express");
const app = express();
const PORT = 8080;
const { dbConnection } = require("./config/config");
const { handleTypeError } = require("./middlewares/errors");

app.use(express.json());

dbConnection();

//routes
app.use("/products", require("./routes/products"));
app.use("/users", require("./routes/users"));
app.use("/orders", require("./routes/orders"));


app.get("/myName", (req, res) => {
  res.send("My name is " + req.query.name + " " + req.query.lastname);
});
// localhost:8080/myName/?name=pedro
app.use(handleTypeError)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
