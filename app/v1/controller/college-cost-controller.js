
var express = require('express');
var router = express.Router();

var CollegeCost = require(APP_MODEL_PATH +'college-cost-model');

// COLLEGE NAME IS REQUIRED ERROR
router.get('/', function (req, res) {
    res.status(500).send("Error: College name is required");
});

// RETURN ALL FIELDS FOR THE COLLEGE
router.get('/:name', function (req, res) {
    CollegeCost.findOne({'College':req.params.name} ,function (err, cost) {
        //Error handling
        if (err) return res.status(500).send("There was a problem finding the cost by college name.");
        if (!cost) return res.status(404).send("Error: College not found.");
        res.status(200).send(cost);
    });
});

// GET IN_STATE COST BY NAME. TAKE AN OPTIONAL PARAMETERS-ROOMBOARD, WHICH IS DEFAULT TO TRUE.
// e.g.   GET localhost:3000/costs/Adelphi%20University/in-state?roomboard=false
router.get('/:name/in-state', function (req, res) {
    //handle roomboard parameter, if not defined, set to true as default
    var query = {};
    if(req.query.roomboard == undefined){
        query['roomboard']='true';
    }else{
        query['roomboard']=req.query.roomboard;
    }
    //use findOne to query database
    var result ={};
    CollegeCost.findOne({'College':req.params.name}, 'Tuition_inState RoomBoard' ,function (err, cost) {
        //Error handling
        if (err) return res.status(500).send("There was a problem finding the cost by college name.");
        if (!cost) return res.status(404).send("Error: College not found.");
        //Return Tuition_inState + room&board. These two fields are required fields in database.
        cost = JSON.stringify(cost); cost = JSON.parse(cost);
        if(query['roomboard'] == 'true'){
            result.cost =cost.Tuition_inState + cost.RoomBoard;
        }else{
            result.cost =cost.Tuition_inState;
        }
        res.status(200).send(result);
    });
});

// GET OUT_OF_STATE COST BY NAME. TAKE AN OPTIONAL PARAMETERS-ROOMBOARD, WHICH IS DEFAULT TO TRUE. 
// e.g.   GET localhost:3000/costs/Adelphi%20University/out-state?roomboard=false
router.get('/:name/out-of-state', function (req, res) {
//similar to in-state-out, but need to validate the Tuition_outOfState is not empty.  TODO.
});


module.exports = router;