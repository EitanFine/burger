var orm = require("../config/orm.js");

// var testFunction = function(result){
// //    console.log("Hello World!")
//     console.log(result)
// }

var burger = {
    all: function (cb) {
        orm.selectAll(cb);
    },
    create: function(burgerName, cb){
        orm.insertOne(burgerName, cb);
    },
    devour: function(id, cb){
        orm.updateOne(id, cb);
    }
}

module.exports = burger;
