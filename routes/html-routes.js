
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // index route loads index.handlebars
  app.get("/", function(req, res) {
    res.render(path.join(__dirname + "/../views/index.handlebars"));
  });

};