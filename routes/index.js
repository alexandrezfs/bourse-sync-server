var db = require('../models')

exports.pushEverything = function(req, res){

    var data = req.body;

	console.log("-----START DATA");

	console.log(data);

	console.log("-----END DATA");

    for(var key in data) {

	try {
        	var objectsToPersist = JSON.parse(data[key]);
	}
	catch(e) {
		console.log("--DATA ERROR--");
		console.log(data[key]);
		console.log("--DATA ERROR END--");
	}

        if(key != 'recap_global' && key != 'localisation' && key != 'produits') {

            console.log("Trying to persist " + key);

            for(var i = 0; i < objectsToPersist.length; i++) {

                var objectToPersist = objectsToPersist[i];

                if(key != 'produits_encaisses') {
                    delete objectToPersist.id;
                }

                console.log(objectToPersist);

                db[key].create(objectToPersist);

            }
        }
        else if(key == 'produits') {

            console.log('INSERTING produits');

            db.produits.bulkCreate(objectsToPersist, {ignoreDuplicates : true});

        }
        else if(key == 'recap_global') {

            console.log('UPDATING recap_global');

            console.log(objectsToPersist);

            if(objectsToPersist != null) {

                delete objectsToPersist.id;

                db.recap_global.find({where : { date : objectsToPersist.date, magasin : objectsToPersist.magasin }}).success(function(recap_global) {

                    console.log('RECAP GLOBAL SUCCESS');

                    if(recap_global == null) {

                        db.recap_global.create(objectsToPersist);

                    }
                    else {

                        recap_global.updateAttributes(objectsToPersist);

                    }

                });

            }
        }
        else if(key == 'localisation') {

            console.log(objectsToPersist);

            if(objectsToPersist != null) {

                //This is alive, so mark it as alive.

                delete objectsToPersist.id;

                db.alive.find({where : { localisation : objectsToPersist.valeur }}).success(function(alive) {

                    console.log('ALIVE SUCCESS');

                    if(alive == null) {

                        db.alive.create({ localisation : objectsToPersist.valeur, timestamp : new Date().getTime() });

                    }
                    else {

                        alive.timestamp = new Date().getTime();
                        alive.save();

                    }

                });

            }

        }
    }

    res.send(JSON.stringify({
        response : "success"
    }));
}
