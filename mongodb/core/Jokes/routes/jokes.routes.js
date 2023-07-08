
const Joke = require ('../controllers/jokes.controller');
console.log('Joke', Joke)

module.exports = (app) =>{
    app.get("/api/jokes", Joke.findAllJokes)
    app.get("/api/jokes/:id", Joke.findonejoke)
    app.post("/api/jokes", Joke.createNewJoke)
    app.put("/api/jokes/:id", Joke.updateExistingJoke)
    app.delete("/api/jokes/:id", Joke.deleteAnExistingJoke)
}