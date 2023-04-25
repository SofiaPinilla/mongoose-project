const Product = require("../models/Product");

const ProductController = {
  async create(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el producto" });
    }
  },
  async getAll(req, res) {
    try {
        const { page = 1, limit = 10 } = req.query;//recogemos los datos
        const products = await Product.find()
          .limit(limit)//establecemos limite de respuesta
          .skip((page - 1) * limit);//saltamos de 10 en 10 la pagina
      res.send(products);
    } catch (error) {
      console.error(error);
    }
  },
  async getById(req, res) {
    try {
      const product = await Product.findById(req.params._id);
      res.send(product);
    } catch (error) {
      console.error(error);
    }
  },
  async getProductsByName(req, res) {
    try {
      //   if (req.params.name.length > 20) {
      //     validacion para la expresion regular
      //     return res.status(400).send("Búsqueda demasiado larga");
      //   }
      //   const name = new RegExp(req.params.name, "i");
      //   const products = await Product.find({ name });//busqueda por expresion regular
      //   const products = await Product.find({ name:req.params.name});//busqueda normal
      const products = await Product.find({
        //busqueda por índice
        $text: {
          $search: req.params.name,
        },
      });
      res.send(products);
    } catch (error) {
      console.log(error);
    }
  },
  async delete(req, res) {
    try {
      const product = await Product.findByIdAndDelete(req.params._id);
      res.send({ message: "Product deleted", product });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({
          message: "there was a problem trying to remove the publication",
        });
    }
  },
  async update(req, res) {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true }
      );
      res.send({ message: "product successfully updated", product });
    } catch (error) {
      console.error(error);
    }
  },
};

module.exports = ProductController;
