const Entry = require('../models/entry')

exports.getIndex = (req, res, next) => {
    res.render('index')

}

exports.createEntry= (req, res, next) =>{
    res.render('createEntry')
}

exports.postEntry=(req, res, next) =>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const entry = req.body.entry;
    const myEntry = new Entry(title, imageUrl, entry);
    myEntry.save();
    res.redirect('/');
}