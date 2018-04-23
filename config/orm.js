// Import MySQL connection.
var connection = require("../config/connection.js");


// Object Relational Mapper (ORM)

//Select all burgers in the database

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT * FROM `burgers`";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },

    insertOne: function (burgerName, cb) {
        var queryString = "INSERT INTO `burgers` (burger_name) VALUES (?)";
        connection.query(queryString, [burgerName],  function (err, result) {
            if (err) throw err;
             // console.log(result);
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(queryString, [id],  function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
}

module.exports = orm;

