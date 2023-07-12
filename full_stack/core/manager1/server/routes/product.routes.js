const ProductController = require("../controllers/product.controllers");

module.exports = (app) =>{
    app.get("/api/Products", ProductController.readAll);
    app.post("/api/Products", ProductController.create);
    app.get("/api/Products/:id", ProductController.findOne);
    app.put("/api/Products/:id", ProductController.update);
    app.delete("/api/Products/:id", ProductController.delete);


}