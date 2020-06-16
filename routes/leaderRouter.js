var express = require('express');
var leaderRouter  = express.Router();

leaderRouter.route('/')
.all(function(req,res,next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})

.get(function(req,res,next){
        res.end('Will send all the leaders to you!');
})

.put(function(req, res, next) {
    res.statusCode = 403;
    res.end('PUT function not allowed');
})

.post(function(req, res, next){
    res.end('Will add the leader: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting all leaders');
});

leaderRouter.route('/:leaderId')
.all(function(req,res,next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
      next();
})

.post(function(req, res, next){
    res.statusCode = 403;
    res.end('POST operation not allowed');  
})

.get(function(req,res,next){
        res.end('Will send details of the leader: ' + req.params.leaderId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update the leader: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting leader: ' + req.params.leaderId);
});

module.exports = leaderRouter;