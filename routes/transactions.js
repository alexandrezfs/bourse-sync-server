var db = require('../models')

exports.getAll = function(req, res) {
    db.transactions.findAll().success(function(transactions) {
        res.send(JSON.stringify(transactions));
    })
}
