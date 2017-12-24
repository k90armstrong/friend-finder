var path = require('path');
module.exports = function(app) {
    
    // This module will include all of the routes for the html pages
    app.get('/', function (req, res) {
        var filePath = path.join(__dirname, '../', 'public', 'home.html');
        res.sendFile(filePath);
    });

    app.get('/survey', function (req, res) {
        var filePath = path.join(__dirname, '../', 'public', 'survey.html');
        res.sendFile(filePath);
    });
}