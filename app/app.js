// Root path
global.APP_ROOT_PATH = __dirname ;
// Set other  paths
require('./global-variable');
// Set config variables
global.config = require('./global-variable');
var db = require('./db');
// Create an express app
var express = require("express");
var app = express();


//link the cost controller to the route /users. Now, the / route within the cost controller will get mapped to /costs
var CostController = require(APP_CONTROLLER_PATH + 'college-cost-controller');
app.use('/v1/costs', CostController);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

module.exports = app;