const Author = require('../models/author.model')

console.log(Author)

// Create One

module.exports.createOneAuthor = (req, res) => {
    Author.create(req.body)
        .then((newAuthor) => {
            console.log(newAuthor)
            res.json(newAuthor)
        })
        .catch((err) => {
            res.status(400).json(err ) 
        })
};

//Show all

module.exports.showAllAuthors = (req, res) => {
    Author.find()
        .then((allAuthors) => {
            res.status(200).json({ authors: allAuthors })
        })
        .catch((err) => {
            res.json({err })
        });
};

//Show one

module.exports.showOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
        .then((oneAuthor) => {
            console.log({ author: oneAuthor })
            res.json({ author: oneAuthor })
        })
        .catch((err) => {
            res.json({err })
        });
};

//Delete one

module.exports.deleteOneAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ author: result })
        })
        .catch((err) => {
            res.json({err})
        });
};

//Update One

module.exports.updateOneAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body,
        {new: true, runValidators: true})
        .then((updatedAuthor) => {
            res.json({ author: updatedAuthor })
            console.log({ author: updatedAuthor })
        })
        .catch((err) => {
            res.status(400).json({err })
        });
};

