const AuthorController = require('../controllers/author.controller')

console.log(AuthorController)

module.exports = (app) => {
    app.post("/api/authors", AuthorController.createOneAuthor)
    app.get("/api/authors", AuthorController.showAllAuthors)
    app.get("/api/authors/:id", AuthorController.showOneAuthor)
    app.put("/api/authors/:id", AuthorController.updateOneAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteOneAuthor)
}