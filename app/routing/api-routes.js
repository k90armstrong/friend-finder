var friends = require('../data/friends');
var fs = require('fs');

module.exports = function (app) {

    // This module will include all of the routes for the APIs
    app.get('/api/friends', function (req, res) {
        // this will return all of the friends in json format
        console.log('this is a get');
        console.log(req.body);
        res.json(friends);
    });

    app.post('/api/friends', function (req, res) {
        // add friend to possible friends
        friends.friends.push(req.body);
        // return the match in json format
        // do the algorithm to compare all of the answers to ever friend
        // choose the one with the lowest score
        // return that friend
        console.log('this is a post');
        console.log(req.body);
        res.json(friends);
    });
};