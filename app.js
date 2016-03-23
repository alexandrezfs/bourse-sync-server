var bodyParser = require('body-parser');
var config = require('./config');

var express = require('express')
    , routes  = require('./routes')
    , transactions    = require('./routes/transactions')
    , produits    = require('./routes/produits')
    , http    = require('http')
    , path    = require('path')
    , db      = require('./models')

var app = express()

// all environments
app.set('port', process.env.PORT || config.values.port)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.favicon())
app.use(express.logger('dev'))
app.use(express.json())
app.use(express.urlencoded())
app.use(express.methodOverride())
app.use(app.router)
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.bodyParser({limit: 1024000000}));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler())
}

app.get('/transactions', transactions.getAll)
app.get('/produits/light', produits.produitsLight)
app.post('/pushEverything', routes.pushEverything)

db
    .sequelize
    .sync({ force: false })
    .complete(function(err) {
        if (err) {
            throw err
        } else {
            http.createServer(app).listen(app.get('port'), function(){
                console.log('Express server listening on port ' + app.get('port'))
            })
        }
    })
