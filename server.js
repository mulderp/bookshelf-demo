var http=require('http');
var fs=require('fs');
var finalhandler=require('finalhandler');
var Router=require('router');

var router = new Router();

var Movie = require('./models/movie');

var api = new Router();
api.get('/movies', function(req, res) {
  Movie.fetchAll().then(function(movies) {
    res.write(JSON.stringify(movies.toJSON()));
    res.end();
  });
});
router.use('/api', api);

http.createServer(function(req, res) {
  router(req, res, finalhandler(req, res));
}).listen(3000);

