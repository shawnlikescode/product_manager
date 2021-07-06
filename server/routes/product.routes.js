const productController = require('../controllers/product.controller.js');


module.exports = (app) => {
    app.get("/api/product", productController.index);
    app.post("/api/product/create", productController.create);
    app.get("/api/product/:id", productController.showOne);
    app.put("/api/product/update/:id", productController.updateOne);
    app.delete("/api/product/destroy/:id", productController.destroy);     
}