
var path = require('path');

module.exports = function(app) {

    // Default USE route that leads to Home Page.
    app.get('/', function (request, response) {
        response.sendFile(path.join(__dirname + '/../public/index.html'));
    });
};