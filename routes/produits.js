var db = require('../models')

exports.produitsLight = function(req, res) {
    db.produits.findAll({limit : 100, order : "id DESC"}).success(function(produits) {
        res.send(JSON.stringify(produits));
    })
}
