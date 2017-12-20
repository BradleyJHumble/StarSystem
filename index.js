var http = require('http');
var express = require('express');
var nodemailer = require('nodemailer');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ type: 'application/json' }));


app.post('/StarSystem/:id/:starRating/', function(require, response) {
	const ID = require.params.id;
	const StarRating = require.params.starRating;

	database.connect(requestBody.MongoDBURI)
    .then(
        function() {


            // Asynchronously run all of the operations

            var allPromise = Promise.all(taskList);
            allPromise
            .then(
                function(values) {
                    documentsUpdated = values.reduce(add, 0);
                    return {
                                "success": true,
                                "count": documentsUpdated,
                                "error": {}
                            };
                },
                function(error) {
                    console.log("Error Failed to connect to the database" + error);
                    return {
                                "success": false,
                                "count": 0,
                                "error": "Error updating documents: " + error
                            };
                }
            )
            .then(
                function(resultObject) {
                    database.close();
                    res.json(resultObject);
                }
            )
        },
        function(error) {
            console.log("Failed to connect to the database: " + error);
            resultObject = {
                        "success": false,
                        "count": 0,
                        "error": "Failed to connect to the database: " + error
                    };
            res.json(resultObject); 
        }
	
});


app.get('/', function(require, response) {
response.send("Hello World");
});

http.createServer(app).listen(3000, function() {
 	console.log("Server is running");
});