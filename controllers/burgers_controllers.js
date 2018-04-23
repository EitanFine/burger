
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
    var printResults = function(data){
        console.log(data);

        res.send(JSON.stringify(data));
    }
    
    burger.all(printResults);
});

module.exports = router;

